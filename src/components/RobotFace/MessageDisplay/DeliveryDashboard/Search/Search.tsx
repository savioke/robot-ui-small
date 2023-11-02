import React, { useState } from 'react';
import { useSelector, useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Autocomplete, Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from 'components/RobotFace/MessageDisplay/ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/Keyboard/Keyboard';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Search.styles';

/** redux */
import { getDeliverFormValues, getDeliverLocations } from 'state/ui/ui.selectors';

/** helpers */

export default function Search() {
  const intl = useIntl();
  const dispatch = useDispatch();
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
            sx={{ marginTop: 5, marginLeft: 3 }}
          >
            What I will say on delivery!
          </Text>
          <Autocomplete
            fullWidth
            disableClearable
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
            renderInput={(params) => (
              <TextField
                autoFocus
                required
                ref={inputRef}
                name='dropoff_location'
                // onFocus={handleFocus}
                label={intl.formatMessage({ id: 'dropOffLocation' })}
                {...params}
                inputRef={(input) => {
                  inputRef = input;
                }}
              />
            )}
            // renderGroup={(params) => (
            //   <li key={params.key}>
            //     <GroupHeader>{params.group}</GroupHeader>
            //     <GroupItems>{params.children}</GroupItems>
            //   </li>
            // )}
          />
        </Box>
      </Box>
      <Keyboard setPasscode={setRoomMessage} />
    </Box>
  );
}
