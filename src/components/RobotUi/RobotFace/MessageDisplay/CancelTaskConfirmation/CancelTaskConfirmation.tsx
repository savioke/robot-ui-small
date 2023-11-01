import React from 'react';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './CancelTaskConfirmation.styles';

/** redux */

export default function CancelTaskConfirmation() {
  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        sx={{ marginLeft: 3 }}
      >
        Ok! Are you sure you want to cancel?
      </Text>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 3 }}
      >
        <Button
          variant='contained'
          color='error'
          sx={{ height: '65px', fontSize: '24px' }}
        >
          Cancel Task
        </Button>
        <Button
          variant='contained'
          color='error'
          sx={{ height: '65px', fontSize: '24px' }}
        >
          Cancel Task
        </Button>
      </Box>
    </Box>
  );
}
