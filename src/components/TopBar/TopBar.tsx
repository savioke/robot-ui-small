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
} from 'state/ui/ui.slice';
import { getDisplayScreen, getIsScreenTouched } from 'state/ui/ui.selectors';
import { getDisplayState } from 'state/r2c2/r2c2.selectors';
import { resetDeliverFormValues } from 'state/deliver/deliver.slice';
import { resetGoToFormValues } from 'state/goTo/goTo.slice';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { DisplayScreenOptions } from 'appConstants';
import { resetMappingFormValues } from 'state/mapping/mapping.slice';

export default function TopBar() {
  const dispatch = useDispatch();
  const socket = useSocketIo();
  const displayScreen = useSelector(getDisplayScreen);
  const isScreenTouched = useSelector(getIsScreenTouched);
  const displayState = useSelector(getDisplayState);

  React.useEffect(() => {
    if (displayScreen === DisplayScreenOptions.Home) {
      dispatch(setAuthorized(null));
      dispatch(resetDeliverFormValues());
      dispatch(resetGoToFormValues());
      dispatch(resetMappingFormValues());
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

  return (
    <Fade in={isScreenTouched}>
      <Box sx={styles.container}>
        {displayScreen !== DisplayScreenOptions.Home && (
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
            <Text sx={styles.robotNickname}>m1234</Text>
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
