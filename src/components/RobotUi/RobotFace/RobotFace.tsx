import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import { useSelector } from 'typeDux';

/** Mui Components */
import { Box, Paper } from '@mui/material';

/** Components */
import MessageDisplay from './MessageDisplay/MessageDisplay';
import Keyboard from '../Keyboard/Keyboard';

/** styles */
import { styles } from './RobotFace.styles';

/** redux */
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */

export default function RobotFace() {
  const intl = useIntl();
  const formRef = React.useRef<HTMLFormElement>(null);
  const keyboardRef = React.useRef<any | null>(null);
  const displayScreen = useSelector(getDisplayScreen);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.messageContainer(displayScreen)}>
        <Paper
          elevation={5}
          sx={styles.paper}
        >
          <MessageDisplay formRef={formRef} />
        </Paper>
      </Box>
      <Box sx={styles.eyesContainer}>
        <Image
          priority
          src='images/eye_left.svg'
          height={64}
          width={64}
          alt={intl.formatMessage({ id: 'leftEye' })}
        />
        <Image
          priority
          src='/images/eye_right.svg'
          height={64}
          width={64}
          alt={intl.formatMessage({ id: 'rightEye' })}
        />
      </Box>
      <Keyboard
        keyboardRef={keyboardRef}
        formRef={formRef}
      />
    </Box>
  );
}
