import React from 'react';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Paper, TextField, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

/** Components */
import Text from 'components/Text/Text';
import Keypad from 'components/RobotUi/Keypad/Keypad';

/** styles */
import { styles } from './EnterRoomNumber.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function EnterRoomNumber() {
  const dispatch = useDispatch();
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
              <Box sx={styles.arrowBackContainer}>
                <IconButton
                  sx={styles.iconButton}
                  onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
                >
                  <ArrowBack fontSize='large' />
                </IconButton>
                <Text
                  sx={styles.rooNumberText}
                  variant='h4'
                  id='enterRoomNumber'
                />
              </Box>
              <Box sx={styles.textFieldContainer}>
                <TextField
                  fullWidth
                  variant='standard'
                  type='number'
                  value={roomNumber}
                  inputProps={{ style: { textAlign: 'center' } }}
                  InputProps={{ disableUnderline: true }}
                  sx={styles.textfield}
                />
              </Box>
            </Box>
            <Box sx={styles.keypadContainer}>
              <Keypad
                passCode={roomNumber}
                setPasscode={setRoomNumber}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
