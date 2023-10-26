import React from 'react';

/** Mui Components */
import { Box, Paper, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keypad from 'components/RobotUi/Keypad/Keypad';
import Keyboard2 from 'components/RobotUi/Footer/Keyboard2/Keyboard2';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './RoomMessage.styles';

/** redux */

/** helpers */

export default function RoomMessage() {
  const [roomMessage, setRoomMessage] = React.useState('');

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
                <Text variant='h4'>
                  Delivery to <strong>(Room 101)</strong>
                </Text>
                <Text variant='h4'>What I will say on delivery!</Text>
                <TextField
                  multiline
                  rows={10}
                  value={roomMessage}
                  inputProps={{ style: { textAlign: 'center' } }}
                  InputProps={{ disableUnderline: true, sx: { borderRadius: '20px' } }}
                  sx={styles.textfield}
                />
              </Box>
            </Box>
            <Box sx={styles.keypadContainer}>
              <Keyboard2
                passCode={roomMessage}
                setPasscode={setRoomMessage}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
