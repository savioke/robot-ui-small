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
import { styles } from './OverrideMap.styles';

/** redux */
import { setMappingFormValues } from 'state/mapping/mapping.slice';
import { getMaps } from 'state/r2c2/r2c2.selectors';
import { getMappingFormValues } from 'state/mapping/mapping.selectors';

/** helpers */

export default function OverrideMap() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  let inputRef = React.useRef<HTMLInputElement>(null);
  const maps = useSelector(getMaps);
  const mappingFormValues = useSelector(getMappingFormValues);

  const handleInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(
      setMappingFormValues({
        name: mappingFormValues.config.name + event.currentTarget.value,
      }),
    );
  };

  const handleBackspace = () => {
    dispatch(
      setMappingFormValues({
        name: mappingFormValues.config.name.slice(0, -1),
      }),
    );
  };

  React.useEffect(() => {
    dispatch(setMappingFormValues({ override_existing: true }));
  }, [dispatch]);

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
            inputValue={mappingFormValues.config.name}
            options={maps}
            onOpen={() => {
              setIsPopupOpen(true);
            }}
            onClose={() => {
              setIsPopupOpen(false);
            }}
            onInputChange={() => {
              if (mappingFormValues.config.name) {
                setIsPopupOpen(true);
              }
            }}
            onChange={(event, value, reason) => {
              if (reason === 'selectOption' && value) {
                dispatch(setMappingFormValues({ name: value }));
              } else if (reason === 'clear') {
                dispatch(setMappingFormValues({ name: '' }));
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
      <Keyboard
        setValues={handleInput}
        handleBackspace={handleBackspace}
      />
    </Box>
  );
}
