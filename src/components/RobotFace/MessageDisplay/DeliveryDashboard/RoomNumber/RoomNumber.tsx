import React from 'react';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keypad from 'components/Keypad/Keypad';

/** styles */
import { styles } from './RoomNumber.styles';

/** redux */
import { setDeliverFormValues } from 'state/deliver/deliver.slice';
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';

/** helpers */

export default function RoomNumber() {
  const dispatch = useDispatch();
  const deliverFormValues = useSelector(getDeliverFormValues);

  const handleSetRoomNumber = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (deliverFormValues.context.dropoff_location.length === 4) {
      return deliverFormValues.context.dropoff_location;
    }
    dispatch(
      setDeliverFormValues({
        dropoff_location: deliverFormValues.context.dropoff_location + event.currentTarget.value,
      }),
    );
  };

  const handleBackspace = () => {
    dispatch(
      setDeliverFormValues({
        dropoff_location: deliverFormValues.context.dropoff_location.slice(0, -1),
      }),
    );
  };

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.textFieldContainer}>
          <TextField
            variant='standard'
            value={deliverFormValues.context.dropoff_location}
            inputProps={{ style: { textAlign: 'center' } }}
            InputProps={{
              readOnly: true,
            }}
            sx={styles.textfield}
            onChange={(event) =>
              dispatch(setDeliverFormValues({ dropoff_location: event.target.value }))
            }
          />
        </Box>
      </Box>
      <Keypad
        setValues={handleBackspace}
        handleSetValues={handleSetRoomNumber}
      />
    </Box>
  );
}
