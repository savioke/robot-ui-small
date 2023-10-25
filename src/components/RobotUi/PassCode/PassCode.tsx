import React from 'react';

/** Mui Components */
import { Box, Paper, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../RobotFace/MessageDisplay/ArrowBackTopBar/ArrowBackTopBar';
import Keypad from '../Keypad/Keypad';

/** styles */
import { styles } from './PassCode.styles';

/** redux */

/** helpers */

export default function PassCode() {
  const [passCode, setPassCode] = React.useState('');

  return (
    <Box sx={styles.container}>
      <Box sx={styles.messageContainer}>
        <Paper
          elevation={5}
          sx={styles.paper}
        >
          <Box sx={styles.innerPaper}>
            <Box sx={styles.roomNumberContainer}>
              <ArrowBackTopBar />
              <Box sx={styles.textFieldContainer}>
                <TextField
                  fullWidth
                  variant='standard'
                  type='password'
                  value={passCode}
                  inputProps={{ style: { textAlign: 'center' } }}
                  InputProps={{ disableUnderline: true }}
                  sx={styles.textfield}
                />
              </Box>
            </Box>
            <Box sx={styles.keypadContainer}>
              <Keypad
                passCode={passCode}
                setPasscode={setPassCode}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
