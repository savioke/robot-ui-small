import React, { useState } from 'react';

/** Mui Components */
import { Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/RobotUi/Keyboard/Keyboard';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './RoomMessage.styles';

/** redux */

/** helpers */

export default function RoomMessage() {
  const [roomMessage, setRoomMessage] = useState('');

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.textFieldContainer}>
          <Text
            variant='h4'
            sx={{ marginTop: 5, marginLeft: 3 }}
          >
            What I will say on delivery!
          </Text>
          <TextField
            multiline
            rows={5}
            placeholder='Your order has arrived'
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
      <Keyboard setPasscode={setRoomMessage} />
    </Box>
  );
}
