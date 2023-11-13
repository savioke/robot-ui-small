import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Autocomplete, Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/Keyboard/Keyboard';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './GotoSearch.styles';

/** redux */
import { setGoToFormValues } from 'state/goTo/goTo.slice';
import { getGoToFormValues } from 'state/goTo/goTo.selectors';
import { getGoals } from 'state/r2c2/r2c2.selectors';

/** helpers */

export default function GoToSearch() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  let inputRef = React.useRef<HTMLInputElement>(null);
  const goToFormValues = useSelector(getGoToFormValues);
  const goals = useSelector(getGoals);

  const handleInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(
      setGoToFormValues({
        destination: goToFormValues.config.destination + event.currentTarget.value,
      }),
    );
  };

  const handleBackspace = () => {
    dispatch(
      setGoToFormValues({
        destination: goToFormValues.config.destination.slice(0, -1),
      }),
    );
  };

  React.useEffect(() => {
    if (goToFormValues.config.destination)
      dispatch(
        setGoToFormValues({ transit_message: `Heading to ${goToFormValues.config.destination}` }),
      );
  }, [dispatch, goToFormValues.config.destination]);

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
            inputValue={goToFormValues.config.destination}
            options={goals}
            onOpen={() => {
              setIsPopupOpen(true);
            }}
            onClose={() => {
              setIsPopupOpen(false);
            }}
            onInputChange={() => {
              if (goToFormValues.config.destination) {
                setIsPopupOpen(true);
              }
            }}
            onChange={(event, value, reason) => {
              if (reason === 'selectOption' && value) {
                dispatch(setGoToFormValues({ destination: value }));
              } else if (reason === 'clear') {
                dispatch(setGoToFormValues({ destination: '' }));
              }
            }}
            renderInput={(params) => (
              <TextField
                required
                ref={inputRef}
                name=''
                label={intl.formatMessage({ id: 'location' })}
                {...params}
                inputRef={(input) => {
                  inputRef = input;
                }}
              />
            )}
          />
        </Box>
      </Box>
      {/* @ts-ignore */}
      <Keyboard
        setValues={handleInput}
        handleBackspace={handleBackspace}
      />
    </Box>
  );
}
