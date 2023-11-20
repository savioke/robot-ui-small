import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import { useIdleTimer } from 'react-idle-timer';
import { type Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from 'types/socket';

/** Mui Components */
import { Box, Divider, Fab, Fade } from '@mui/material';
import { Wifi, WifiOff, Clear } from '@mui/icons-material';

/** Components */
import BatteryIcon from './BatteryIcon/BatteryIcon';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './TopBar.styles';

/** redux */
import {
  setDisplayScreen,
  setIsScreenTouched,
  setPasscode,
  setAuthorized,
} from 'state/ui/ui.slice';
import {
  getDisplayScreen,
  getIsScreenTouched,
  getTransitMessage,
  getConfirmationMessage,
} from 'state/ui/ui.selectors';
import { getDisplayState, getDeliverStatus } from 'state/r2c2/r2c2.selectors';
import { resetDeliverFormValues } from 'state/deliver/deliver.slice';
import { resetGoToFormValues } from 'state/goTo/goTo.slice';

/** helpers */
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';
import { resetMappingFormValues } from 'state/mapping/mapping.slice';

export default function TopBar({
  socket,
}: {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | null | undefined;
}) {
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);
  const isScreenTouched = useSelector(getIsScreenTouched);
  const displayState = useSelector(getDisplayState);
  const deliverStatus = useSelector(getDeliverStatus);
  const transitMessage = useSelector(getTransitMessage);
  const confirmationMessage = useSelector(getConfirmationMessage);

  React.useEffect(() => {
    if (displayScreen === DisplayScreenOptions.Home) {
      dispatch(setAuthorized(null));
      dispatch(resetDeliverFormValues());
      dispatch(resetGoToFormValues());
      dispatch(resetMappingFormValues());
      dispatch(setPasscode(''));
      socket?.emit('logout');
    }
  }, [dispatch, displayScreen, socket]);

  useIdleTimer({
    onIdle: () => {
      if (displayScreen === DisplayScreenOptions.Home) {
        dispatch(setIsScreenTouched(false));
      }
    },
    timeout: 10000,
  });

  useIdleTimer({
    onIdle: () => {
      if (displayScreen !== DisplayScreenOptions.Home && deliverStatus === DeliverStatus.NONE) {
        dispatch(setDisplayScreen(DisplayScreenOptions.Home));
      }
    },
    timeout: 60000,
  });

  return (
    <Fade in={isScreenTouched}>
      <Box sx={styles.container}>
        {displayScreen !== DisplayScreenOptions.Home && !transitMessage && !confirmationMessage && (
          <Fab
            sx={styles.fab}
            size='small'
            onClick={() => {
              dispatch(setPasscode(''));
              dispatch(setDisplayScreen(DisplayScreenOptions.Home));
            }}
          >
            <Clear fontSize='large' />
          </Fab>
        )}
        <Box sx={styles.metricContainer}>
          <Box sx={styles.rightContainer}>
            {displayState.connected ? <Wifi fontSize='large' /> : <WifiOff fontSize='large' />}
            <Text sx={styles.robotNickname}>{displayState.hostname}</Text>
          </Box>
          <Divider
            flexItem
            sx={styles.divider}
            orientation='vertical'
            variant='middle'
          />
          <BatteryIcon />
        </Box>
      </Box>
    </Fade>
  );
}
