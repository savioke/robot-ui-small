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
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Text
          variant='h3'
          component='h1'
          id='myStatusAndInformation'
          sx={styles.title}
        />
        <Box sx={styles.contentContainer}>
          <Text sx={styles.text}>Hostname: {displayState.hostname}</Text>
          <Text sx={styles.text}>Nickname: {displayState.nickname}</Text>
          <Divider sx={{ marginY: 1 }} />
          <Text sx={styles.text}>Network Connectivity: {String(!!displayState.connected)}</Text>
          <Divider sx={{ marginY: 1 }} />
          <Text sx={styles.text}>Battery: {displayState.battery.percent}%</Text>
          <Text sx={styles.text}>Battery Voltage: {displayState.battery.voltage}</Text>
        </Box>
      </Box>
    </Box>
  );
}
