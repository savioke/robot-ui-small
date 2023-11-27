import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Paper } from '@mui/material';

/** Components */
import MessageDisplay from './MessageDisplay/MessageDisplay';

/** styles */
import { styles } from './RobotFace.styles';

/** redux */

/** helpers */

export default function RobotFace() {
  const intl = useIntl();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.messageContainer}>
        <Paper
          elevation={5}
          sx={styles.paper}
        >
          <MessageDisplay />
        </Paper>
      </Box>
      <Box sx={styles.eyesContainer}>
        {/* TODO: Update eye files to match the correct eye. */}
        <Image
          // fill
          priority
          // objectFit='contain'
          src='images/eye_right_v3.svg'
          width={0}
          height={0}
          style={{ width: '100%', height: '40%' }} // optional
          alt={intl.formatMessage({ id: 'leftEye' })}
        />
        <Image
          // fill
          priority
          // objectFit='contain'
          src='/images/eye_left_v3.svg'
          width={0}
          height={0}
          style={{ width: '100%', height: '40%' }} // optional
          alt={intl.formatMessage({ id: 'rightEye' })}
        />
      </Box>
    </Box>
  );
}
