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
    <>
      <ArrowBackTopBar />
      <Box sx={styles.contentContainer}>
        <Text
          variant='h3'
          component='h1'
          id='needAdditionalSupport?'
          sx={styles.title}
        />
        <Box sx={styles.textContainer}>
          <Box>
            <Text
              component='b'
              variant='h5'
              id='email'
            />
            <Text variant='h5'>support@relayrobotics.com</Text>
          </Box>
          <Box>
            <Text
              component='b'
              variant='h5'
              id='phone'
            />
            <Text variant='h5'>1-408-809-5600, Dial 1</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
