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
      <Text>Place holder support page</Text>
    </Box>
  );
}
