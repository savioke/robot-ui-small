import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */

/** styles */
import { styles } from './ScreenContainer.styles';

/** redux */
import { setDisplayScreen, setIsScreenTouched, setTransitMessage } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';
import { getDeliverStatus } from 'state/r2c2/r2c2.selectors';

/** helpers */
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export interface ScreenContainerProps {
  stateTheme: string;
  children: React.ReactNode;
}

export default function ScreenContainer({ stateTheme, children }: ScreenContainerProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const deliverStatus = useSelector(getDeliverStatus);
  const displayScreen = useSelector(getDisplayScreen);
  /** IMPORTANT - DO NOT REMOVE */
  /** This socket hook needs to pass in both parameters for app to function on sockets */
  const socket = useSocketIo(dispatch, intl);

  // TODO: Need to clean this logic up for handling attempting to cancel tasks while deliver in progress.
  return (
    <Box
      sx={styles.container(stateTheme)}
      onClick={() => {
        if (
          (deliverStatus === DeliverStatus.GO_TO_PICKUP ||
            deliverStatus === DeliverStatus.GO_TO_DROPOFF) &&
          displayScreen !== DisplayScreenOptions.CancelTaskConfirmation
        ) {
          socket?.emit('deliver_interrupt');
          dispatch(setTransitMessage(''));
          dispatch(setDisplayScreen(DisplayScreenOptions.CancelTaskConfirmation));
        }

        dispatch(setIsScreenTouched(true));
      }}
    >
      {children}
    </Box>
  );
}
