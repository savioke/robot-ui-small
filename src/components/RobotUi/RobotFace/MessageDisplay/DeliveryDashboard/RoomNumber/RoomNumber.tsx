import React from 'react';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keypad from 'components/RobotUi/Keypad/Keypad';

/** styles */
import { styles } from './RoomNumber.styles';

/** redux */
import { setDeliverFormValues } from 'state/ui/ui.slice';
import { getDeliverFormValues } from 'state/ui/ui.selectors';

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
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.textFieldContainer}>
          <TextField
            variant='standard'
            value={roomNumber}
            inputProps={{ style: { textAlign: 'center' } }}
            InputProps={{
              readOnly: true,
            }}
            sx={styles.textfield}
          />
        </Box>
      </Box>
      <Keypad
        setValues={setRoomNumber}
        handleSetValues={handleSetRoomNumber}
      />
    </Box>
  );
}
