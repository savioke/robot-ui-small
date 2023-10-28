import React from 'react';

/** Mui Components */
import { Box, Paper, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../RobotFace/MessageDisplay/ArrowBackTopBar/ArrowBackTopBar';
import Keypad from '../Keypad/Keypad';
import Text from 'components/Text/Text';

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
              <Text
                variant='h5'
                component='h1'
                id='enterPasscode'
                sx={{ fontSize: '55px' }}
              />
              <Box sx={styles.textFieldContainer}>
                <TextField
                  fullWidth
                  disabled
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
              <Keypad setValues={setPassCode} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
