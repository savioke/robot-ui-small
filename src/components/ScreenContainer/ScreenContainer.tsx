import React from 'react';
import { useIntl } from 'react-intl';
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
  let deliverStatus = useSelector(getDeliverStatus);
  const idleStatus = useSelector(getIdleStatus);
  const displayScreen = useSelector(getDisplayScreen);
  // const [activeSocket, setActiveSocket] = React.useState(false);
  /** IMPORTANT - DO NOT REMOVE */
  /** This socket hook needs to pass in both parameters for app to function on sockets */
  const socket = useSocketIo({ dispatch, intl, setPrimaryColor });
  const playShimmySound = useSelector(getPlayShimmySound);
  const [play] = useSound('/sounds/nav-start.mp3');
  const isRobotNavigating =
    deliverStatus === DeliverStatus.GO_TO_PICKUP ||
    deliverStatus === DeliverStatus.GO_TO_DROPOFF ||
    idleStatus === IdleStatus.GO_TO_DOCK;
  const isPackageConfirmationShowing =
    deliverStatus === DeliverStatus.LOAD_PACKAGE || DeliverStatus.LOAD_PACKAGE;

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
        if (
          isRobotNavigating &&
          !isPackageConfirmationShowing &&
          displayScreen !== DisplayScreenOptions.CancelTaskConfirmation
        ) {
          socket?.emit('deliver_interrupt');
          dispatch(setTransitMessage(''));
          dispatch(setDisplayScreen(DisplayScreenOptions.CancelTaskConfirmation));
        }

        dispatch(setIsScreenTouched(true));
      }}
    >
      <TopBar socket={socket} />
      {children}
    </Box>
  );
}
