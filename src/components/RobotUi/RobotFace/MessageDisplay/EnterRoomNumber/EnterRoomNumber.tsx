import React from 'react';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();
  const dispatch = useDispatch();
  const [roomNumber, setRoomNumber] = React.useState('');

  return (
    <Box sx={styles.container}>
      <Box sx={styles.messageContainer}>
        <Paper
          elevation={5}
          sx={styles.paper}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <IconButton
                  sx={{ color: '#000000' }}
                  onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
                >
                  <ArrowBack fontSize='large' />
                </IconButton>
                <Text
                  sx={{ fontSize: '55px' }}
                  variant='h4'
                  id='enterRoomNumber'
                />
              </Box>
              <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                <TextField
                  fullWidth
                  variant='standard'
                  type='number'
                  value={roomNumber}
                  inputProps={{ style: { textAlign: 'center' } }}
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    '& .MuiInput-root': { fontSize: '100px' },
                  }}
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
