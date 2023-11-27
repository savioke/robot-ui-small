import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import { useIdleTimer } from 'react-idle-timer';

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
  setNotificationMessage,
  setTransitMessage,
  setIsIdleBehaviorInterrupted,
} from 'state/ui/ui.slice';
import {
  getDisplayScreen,
  getIsIdleBehaviorInterrupted,
  getIsScreenTouched,
} from 'state/ui/ui.selectors';
import { getDisplayState, getDeliverStatus } from 'state/r2c2/r2c2.selectors';
import { resetDeliverFormValues } from 'state/deliver/deliver.slice';
import { resetGoToFormValues } from 'state/goTo/goTo.slice';
import { getSocket } from 'state/socket/socket.selectors';

/** helpers */
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';
import { resetMappingFormValues } from 'state/mapping/mapping.slice';

export default function TopBar() {
  const dispatch = useDispatch();
  const socket = useSelector(getSocket);
  const displayScreen = useSelector(getDisplayScreen);
  const isScreenTouched = useSelector(getIsScreenTouched);
  const displayState = useSelector(getDisplayState);
  const deliverStatus = useSelector(getDeliverStatus);
  const isIdleBehaviorInterrupted = useSelector(getIsIdleBehaviorInterrupted);

  React.useEffect(() => {
    if (displayScreen === DisplayScreenOptions.Home && socket) {
      dispatch(
        setAuthorized({
          method: '',
          state: null,
        }),
      );
      dispatch(resetDeliverFormValues());
      dispatch(resetGoToFormValues());
      dispatch(resetMappingFormValues());
      dispatch(setPasscode(''));
      dispatch(setIsIdleBehaviorInterrupted(false));
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
        {displayScreen !== DisplayScreenOptions.Home &&
          (deliverStatus === DeliverStatus.NONE || deliverStatus === DeliverStatus.DONE) && (
            <Fab
              sx={styles.fab}
              size='small'
              onClick={() => {
                dispatch(setNotificationMessage(''));
                dispatch(setPasscode(''));
                dispatch(setDisplayScreen(DisplayScreenOptions.Home));

                if (isIdleBehaviorInterrupted) {
                  dispatch(setTransitMessage('Resuming...'));
                  socket?.emit('idle_resume');
                }
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
