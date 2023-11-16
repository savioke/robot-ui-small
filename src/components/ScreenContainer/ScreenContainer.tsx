import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';
import useSound from 'use-sound';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */

/** styles */
import { styles } from './ScreenContainer.styles';

/** redux */
import { setDisplayScreen, setIsScreenTouched, setTransitMessage } from 'state/ui/ui.slice';
import { getDisplayScreen, getPlayShimmySound } from 'state/ui/ui.selectors';
import { getDeliverStatus, getIdleStatus } from 'state/r2c2/r2c2.selectors';

/** helpers */
import { DeliverStatus, DisplayScreenOptions, IdleStatus } from 'appConstants';
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export interface ScreenContainerProps {
  stateTheme: string;
  setPrimaryColor: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

export default function ScreenContainer({
  stateTheme,
  children,
  setPrimaryColor,
}: ScreenContainerProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const deliverStatus = useSelector(getDeliverStatus);
  const idleStatus = useSelector(getIdleStatus);
  const displayScreen = useSelector(getDisplayScreen);
  /** IMPORTANT - DO NOT REMOVE */
  /** This socket hook needs to pass in both parameters for app to function on sockets */
  const socket = useSocketIo(dispatch, intl, setPrimaryColor);
  const playShimmySound = useSelector(getPlayShimmySound);
  const [play] = useSound('/sounds/nav-start.mp3');

  React.useEffect(() => {
    if (playShimmySound) {
      play();
    }
  }, [play, playShimmySound]);

  // TODO: Need to clean this logic up for handling attempting to cancel tasks while deliver in progress.
  return (
    <Box
      sx={styles.container(stateTheme)}
      onClick={() => {
        if (
          (deliverStatus === DeliverStatus.GO_TO_PICKUP ||
            deliverStatus === DeliverStatus.GO_TO_DROPOFF ||
            idleStatus === IdleStatus.GO_TO_DOCK) &&
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
