import React from 'react';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import CancelTaskMessage from './CancelTaskMessage/CancelTaskMessage';

/** styles */
import { styles } from './CancelTaskConfirmation.styles';

/** redux */

/** helpers */

export default function CancelTaskConfirmation() {
  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <CancelTaskMessage />
    </Box>
  );
}
