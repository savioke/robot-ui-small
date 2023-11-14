import React, { useState } from 'react';
import { useSelector, useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Autocomplete, Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/Keyboard/Keyboard';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Search.styles';

/** redux */
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';
import { setDeliverFormValues } from 'state/deliver/deliver.slice';
import { getGoals } from 'state/r2c2/r2c2.selectors';

/** helpers */

export default function Search() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const deliverFormValues = useSelector(getDeliverFormValues);
  let inputRef = React.useRef<HTMLInputElement>(null);
  const goals = useSelector(getGoals);

  const handleInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(
      setDeliverFormValues({
        dropoff_location: deliverFormValues.config.dropoff_location + event.currentTarget.value,
      }),
    );
  };

  const handleBackspace = () => {
    dispatch(
      setDeliverFormValues({
        dropoff_location: deliverFormValues.config.dropoff_location.slice(0, -1),
      }),
    );
  };

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.textFieldContainer}>
          <Text
            variant='h4'
            sx={{ marginTop: 5 }}
            id='whatAreYouLookingFor?'
          />
          <Autocomplete
            open={isPopupOpen}
            inputValue={deliverFormValues.config.dropoff_location}
            options={goals}
            onOpen={() => {
              setIsPopupOpen(true);
            }}
            onClose={() => {
              setIsPopupOpen(false);
            }}
            onInputChange={() => {
              if (deliverFormValues.config.dropoff_location) {
                setIsPopupOpen(true);
              }
            }}
            onChange={(event, value, reason) => {
              if (reason === 'selectOption' && value) {
                dispatch(setDeliverFormValues({ dropoff_location: value }));
              } else if (reason === 'clear') {
                dispatch(setDeliverFormValues({ dropoff_location: '' }));
              }
            }}
            renderInput={(params) => (
              <TextField
                required
                ref={inputRef}
                name='dropoff_location'
                label={intl.formatMessage({ id: 'dropoffLocation(s)' })}
                {...params}
                inputRef={(input) => {
                  inputRef = input;
                }}
              />
            )}
          />
        </Box>
      </Box>
      <Keyboard
        setValues={handleInput}
        handleBackspace={handleBackspace}
      />
    </Box>
  );
}
