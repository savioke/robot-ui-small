import React from 'react';
import { useSelector, useDispatch } from 'typeDux';
import useSound from 'use-sound';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */
import TopBar from 'components/TopBar/TopBar';

/** styles */
import { styles } from './ScreenContainer.styles';

/** redux */
import {
  setDisplayScreen,
  setIsScreenTouched,
  setPlayShimmySound,
  setTransitMessage,
} from 'state/ui/ui.slice';
import { getDisplayScreen, getPlayShimmySound } from 'state/ui/ui.selectors';
import { getDeliverStatus, getDisplayState, getIdleStatus } from 'state/r2c2/r2c2.selectors';
import { getSocket } from 'state/socket/socket.selectors';

/** helpers */
import { DeliverStatus, DisplayScreenOptions, IdleStatus } from 'appConstants';
import { startConnecting } from 'state/socket/socket.slice';

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
  const dispatch = useDispatch();
  let deliverStatus = useSelector(getDeliverStatus);
  const idleStatus = useSelector(getIdleStatus);
  const displayScreen = useSelector(getDisplayScreen);
  const displayState = useSelector(getDisplayState);
  const socket = useSelector(getSocket);
  const playShimmySound = useSelector(getPlayShimmySound);
  const [play] = useSound('/sounds/nav-start.mp3');
  const isRobotNavigating =
    deliverStatus === DeliverStatus.GO_TO_PICKUP || deliverStatus === DeliverStatus.GO_TO_DROPOFF;

  React.useEffect(() => {
    if (displayState?.config?.primary_color) {
      setPrimaryColor(displayState?.config?.primary_color);
    }
  }, [displayState?.config?.primary_color, setPrimaryColor]);

  React.useEffect(() => {
    dispatch(startConnecting());
  }, [dispatch]);

  React.useEffect(() => {
    if (playShimmySound) {
      play();
    }

    return () => {
      dispatch(setPlayShimmySound(false));
    };
  }, [dispatch, play, playShimmySound]);

  return (
    <Box
      sx={styles.container(stateTheme)}
      onClick={() => {
        if (isRobotNavigating && displayScreen !== DisplayScreenOptions.CancelTaskConfirmation) {
          socket?.emit('deliver_interrupt');
          dispatch(setTransitMessage(''));
          dispatch(setDisplayScreen(DisplayScreenOptions.CancelTaskConfirmation));
        } else if (idleStatus === IdleStatus.GO_TO_DOCK) {
          socket?.emit('deliver_interrupt');
          dispatch(setTransitMessage(''));
          dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
        }

        dispatch(setIsScreenTouched(true));
      }}
    >
      <TopBar />
      {children}
    </Box>
  );
}
