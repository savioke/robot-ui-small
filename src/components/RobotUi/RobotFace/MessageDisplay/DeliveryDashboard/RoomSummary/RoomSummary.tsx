import React from 'react';

/** Mui Components */
import { Box, Paper, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/RobotUi/Keyboard/Keyboard';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './RoomSummary.styles';

/** redux */

/** helpers */

export default function RoomSummary() {
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
              <Keyboard
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
