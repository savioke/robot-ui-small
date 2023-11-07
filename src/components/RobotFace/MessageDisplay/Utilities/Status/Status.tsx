import React from 'react';
import { useSelector } from 'typeDux';

/** Mui Components */
import { Box, List, ListItem } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Status.styles';

/** redux */
import { getDisplayState } from 'state/ui/ui.selectors';

/** helpers */

export default function Status() {
  const displayState = useSelector(getDisplayState);

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.contentContainer}>
          <Text sx={styles.text}>Robot Hostname: {displayState.hostname}</Text>
          <Text sx={styles.text}>Robot Nickname: {displayState.nickname}</Text>
          <Text sx={styles.text}>Connected: {String(displayState.connected)}</Text>
          <Text sx={styles.text}>Battery: </Text>
          <List>
            <ListItem>{displayState.battery.percent}</ListItem>
          </List>
          {/* <Text sx={styles.text}>Robot: {displayState.hostname}</Text> */}
        </Box>
      </Box>
    </Box>
  );
}
