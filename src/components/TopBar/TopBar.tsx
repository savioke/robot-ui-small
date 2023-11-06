import React, { useState } from 'react';
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

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { DisplayScreenOptions } from 'appConstants';

export default function TopBar() {
  const dispatch = useDispatch();
  const socket = useSocketIo();
  const displayScreen = useSelector(getDisplayScreen);
  const isScreenTouched = useSelector(getIsScreenTouched);
  const [isNetworkConnected, setIsNetworkConnected] = useState(true);

  React.useEffect(() => {
    console.log(displayScreen, DisplayScreenOptions.Home);
    if (displayScreen === DisplayScreenOptions.Home) {
      dispatch(setAuthorized(null));
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

  if (!isScreenTouched) {
    return <Box sx={styles.container} />;
  }

  return (
    <Fade in={isScreenTouched}>
      <Box sx={styles.container}>
        {displayScreen !== DisplayScreenOptions.Home ? (
          <Fab
            sx={{ position: 'relative', top: '23px', left: '2px' }}
            size='small'
            onClick={() => {
              dispatch(setPasscode(''));
              dispatch(setDisplayScreen(DisplayScreenOptions.Home));
            }}
          >
            <Clear fontSize='large' />
          </Fab>
        ) : (
          // TODO: Used to keep styling consistent on home page for sticking icons to the right.
          <Box></Box>
        )}
        <Box sx={styles.metricContainer}>
          <Box sx={styles.rightContainer}>
            {/* TODO: Condtiionally display this from socket connection sent from robot */}
            {isNetworkConnected ? <Wifi fontSize='large' /> : <WifiOff fontSize='large' />}
            <Text sx={{ color: '#FFFFFF', fontSize: '20px' }}>m2012</Text>
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
