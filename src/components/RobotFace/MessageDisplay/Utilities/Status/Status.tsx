import React from 'react';
import { useSelector } from 'typeDux';

/** Mui Components */
import { Box, Divider } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Status.styles';

/** redux */
import { getDisplayState } from 'state/r2c2/r2c2.selectors';

/** helpers */

export default function Status() {
  const displayState = useSelector(getDisplayState);

  return (
    <>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.contentContainer}>
          <Text
            variant='h3'
            component='h1'
            id='myStatusAndInformation'
            sx={styles.title}
          />
          <Box sx={styles.textContainer}>
            <Text variant='h5'>Hostname: {displayState.hostname}</Text>
            <Text variant='h5'>Nickname: {displayState.nickname}</Text>
            <Divider sx={styles.divider} />
            <Text variant='h5'>Network Connectivity: {String(!!displayState.connected)}</Text>
            <Divider sx={styles.divider} />
            <Text variant='h5'>Battery: {displayState.battery.percent}%</Text>
            <Text variant='h5'>Battery Voltage: {displayState.battery.voltage}</Text>
            <Text variant='h5'>Charging Dock: {String(!!displayState.battery.chargingDock)}</Text>
            <Text variant='h5'>Charging Plug: {String(!!displayState.battery.chargingPlug)}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
