import React from 'react';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Help.styles';

/** redux */

/** helpers */

export default function Help() {
  return (
    <Box>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        id='needAdditionalSupport?'
        sx={styles.title}
      />
      <Box sx={styles.container}>
        <Box>
          <Text component='b'>Email</Text>
          <Text>support@relayrobotics.com</Text>
        </Box>
        <Box>
          <Text component='b'>Phone</Text>
          <Text>1-408-809-5600, Dial 1</Text>
        </Box>
      </Box>
    </Box>
  );
}
