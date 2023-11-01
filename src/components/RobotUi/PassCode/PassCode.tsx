import React from 'react';

/** Mui Components */
import { Box, TextField } from '@mui/material';

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

  const handleSetPassCode = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPassCode((previousValue) => {
      if (previousValue.length === 16) {
        return previousValue;
      }

      return previousValue + event.currentTarget.value;
    });
  };

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.contentContainer}>
          <Text
            variant='h5'
            component='h1'
            id='couldYouEnterThePasscode?'
            sx={styles.title}
          />
          <Box sx={styles.textFieldContainer}>
            <TextField
              fullWidth
              variant='standard'
              type='password'
              value={passCode}
              inputProps={{
                style: {
                  textAlign: 'center',
                },
              }}
              sx={styles.textfield}
            />
          </Box>
        </Box>
      </Box>
      <Keypad
        setValues={setPassCode}
        handleSetValues={handleSetPassCode}
      />
    </Box>
  );
}
