import React from 'react';

/** Mui Components */
import { Box, Paper, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keypad from 'components/RobotUi/Keypad/Keypad';

/** styles */
import { styles } from './RoomNumber.styles';

/** redux */

/** helpers */

export default function RoomNumber() {
  const [roomNumber, setRoomNumber] = React.useState('');

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
                  value={roomNumber}
                  inputProps={{ style: { textAlign: 'center' } }}
                  InputProps={{ disableUnderline: true }}
                  sx={styles.textfield}
                />
              </Box>
            </Box>
            <Box sx={styles.keypadContainer}>
              <Keypad setValues={setRoomNumber} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
