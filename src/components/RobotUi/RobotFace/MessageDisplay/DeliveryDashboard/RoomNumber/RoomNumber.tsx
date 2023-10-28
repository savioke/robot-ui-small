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

  const handleSetRoomNumber = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setRoomNumber((previousValue) => {
      if (previousValue.length === 4) {
        return previousValue;
      }

      return previousValue + event.currentTarget.value;
    });
  };

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
                  disabled
                  variant='standard'
                  value={roomNumber}
                  inputProps={{ style: { textAlign: 'center' } }}
                  InputProps={{ disableUnderline: true }}
                  sx={styles.textfield}
                />
              </Box>
            </Box>
            <Box sx={styles.keypadContainer}>
              <Keypad
                setValues={setRoomNumber}
                handleSetValues={handleSetRoomNumber}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
