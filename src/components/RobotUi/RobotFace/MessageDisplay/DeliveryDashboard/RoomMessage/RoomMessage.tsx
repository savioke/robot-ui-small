import React, { useState } from 'react';

/** Mui Components */
import { Box, Paper, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/RobotUi/Keyboard/Keyboard';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './RoomMessage.styles';

/** redux */

/** helpers */

export default function RoomMessage() {
  const [roomMessage, setRoomMessage] = useState('Your order has arrived');

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
                <Text
                  variant='h4'
                  sx={{ marginTop: 2, marginLeft: 3 }}
                >
                  What I will say on delivery!
                </Text>
                <TextField
                  multiline
                  rows={5}
                  value={roomMessage}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      borderRadius: '20px',
                      fontSize: '32px',
                    },
                  }}
                  sx={styles.textfield}
                />
              </Box>
            </Box>
            <Box sx={styles.keypadContainer}>
              <Keyboard setPasscode={setRoomMessage} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
