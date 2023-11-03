import React, { useState } from 'react';
import { useSelector } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Autocomplete, Box, Checkbox, TextField, styled, lighten, darken } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/Keyboard/Keyboard';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Search.styles';

/** redux */
import { getDeliverFormValues, getDeliverLocations } from 'state/ui/ui.selectors';

/** helpers */

const GroupHeader = styled('div')(({ theme }) => ({
  // Makes header have priority over checkboxes
  zIndex: 2000,
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
  padding: 0,
});

export default function Search() {
  const intl = useIntl();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [roomMessage, setRoomMessage] = useState('');
  const deliverFormValues = useSelector(getDeliverFormValues);
  const deliverLocations = useSelector(getDeliverLocations);
  let inputRef = React.useRef<HTMLInputElement>(null);

  // const handleFocus = (
  //   event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  // ) => {
  //   dispatch(setInputName(event.target.name));
  // };

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />

        <Box sx={styles.textFieldContainer}>
          <Text
            variant='h4'
            sx={{ marginTop: 5 }}
          >
            What are you looking for?
          </Text>
          <Autocomplete
            multiple
            disableCloseOnSelect
            open={isPopupOpen}
            inputValue={deliverFormValues.context.dropoff_location}
            options={deliverLocations}
            groupBy={(option) => `${intl.formatMessage({ id: 'floor' })} ${option.floor_name}`}
            getOptionLabel={(option) => option.name}
            onOpen={() => {
              setIsPopupOpen(true);
            }}
            onClose={() => {
              setIsPopupOpen(false);
            }}
            onInputChange={() => {
              if (deliverFormValues.context.dropoff_location.length === 1) {
                setIsPopupOpen(true);
              }
            }}
            onChange={(event, value, reason) => {
              // if (reason === 'selectOption') {
              //   dispatch(setDeliverFormValues({ dropoff_location: value.name }));
              //   dispatch(
              //     setDeliverFormValues({
              //       transit_message: `${intl.formatMessage({ id: 'deliveringTo' })} ${value.name}`,
              //     }),
              //   );
              // }
            }}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlank />}
                  checkedIcon={<CheckBox />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                autoFocus
                required
                ref={inputRef}
                name='dropoff_location'
                // onFocus={handleFocus}
                label={intl.formatMessage({ id: 'dropoffLocation(s)' })}
                {...params}
                inputRef={(input) => {
                  inputRef = input;
                }}
              />
            )}
            renderGroup={(params) => (
              <li key={params.key}>
                <GroupHeader>{params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
              </li>
            )}
          />
        </Box>
      </Box>
      <Keyboard setPasscode={setRoomMessage} />
    </Box>
  );
}
