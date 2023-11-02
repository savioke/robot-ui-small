import React from 'react';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './CancelTask.styles';

/** redux */

export default function CancelTask() {
  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        sx={{ marginLeft: 3 }}
      >
        Hello I'm currently on a Task
      </Text>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Button
          variant='contained'
          color='error'
          sx={{ height: '65px', width: '30%', fontSize: '24px' }}
        >
          Cancel Task
        </Button>
      </Box>
    </Box>
  );
}
