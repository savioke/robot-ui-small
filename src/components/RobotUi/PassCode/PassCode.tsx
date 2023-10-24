import React from 'react';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Paper, TextField, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

/** Components */
import Text from 'components/Text/Text';
import Keypad from '../Keypad/Keypad';

/** styles */
import { styles } from './PassCode.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function PassCode() {
  const dispatch = useDispatch();
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
              <Box sx={styles.arrowBackContainer}>
                <IconButton
                  sx={styles.iconButton}
                  onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Home))}
                >
                  <ArrowBack fontSize='large' />
                </IconButton>
                <Text
                  sx={styles.rooNumberText}
                  variant='h4'
                  id='enterPasscode'
                />
              </Box>
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
