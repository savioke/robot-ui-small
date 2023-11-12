import React from 'react';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */

/** styles */
import { styles } from './ScreenContainer.styles';

/** redux */
import { setDisplayScreen, setIsScreenTouched } from 'state/ui/ui.slice';
import { getDeliverStatus } from 'state/r2c2/r2c2.selectors';

/** helpers */
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';

export interface ScreenContainerProps {
  stateTheme: string;
  children: React.ReactNode;
}

export default function ScreenContainer({ stateTheme, children }: ScreenContainerProps) {
  const dispatch = useDispatch();
  const deliverStatus = useSelector(getDeliverStatus);

  // TODO: Need to clean this logic up for handling attempting to cancel tasks while deliver in progress.
  return (
    <Box
      sx={styles.container(stateTheme)}
      onClick={() => {
        if (deliverStatus > DeliverStatus.NONE) {
          dispatch(setDisplayScreen(DisplayScreenOptions.CancelTaskConfirmation));
        }

        dispatch(setIsScreenTouched(true));
      }}
    >
      {children}
    </Box>
  );
}
