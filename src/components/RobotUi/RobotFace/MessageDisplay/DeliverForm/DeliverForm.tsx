import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Autocomplete, Box, TextField, styled, lighten, darken } from '@mui/material';

/** Components */

/** styles */
import { styles } from './DeliverForm.styles';

/** redux */
import { setDeliverFormValues, setInputName } from 'state/ui/ui.slice';
import { getDeliverFormValues, getDeliverLocations } from 'state/ui/ui.selectors';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

const top100Films = [
  { title: 'The Shawshank Redemption', floor: '178' },
  { title: 'The Godfather', floor: '597' },
  { title: 'The Godfather: Part II', floor: '197' },
  { title: 'The Dark Knight', floor: '204' },
  { title: '12 Angry Men', floor: '395' },
  { title: "Schindler's List", floor: '499' },
  { title: 'Pulp Fiction', floor: '399' },
  {
    title: 'The Lord of the Rings: The Return of the King',
    floor: '200',
  },
  { title: 'The Good, the Bad and the Ugly', floor: '196' },
  { title: 'Fight Club', floor: '192' },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    floor: '203',
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    floor: '198',
  },
  { title: 'Forrest Gump', floor: '199' },
  { title: 'Inception', floor: '201' },
  {
    title: 'The Lord of the Rings: The Two Towers',
    floor: '209',
  },
];

const GroupHeader = styled('div')(({ theme }) => ({
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

interface DeliverFormProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export default function DeliverForm({ formRef }: DeliverFormProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo(dispatch);
  const deliverFormValues = useSelector(getDeliverFormValues);
  const deliverLocations = useSelector(getDeliverLocations);
  let inputRef = React.useRef<HTMLInputElement>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // const options = top100Films.map((option) => {
  //   const firstLetter = option.floor[0];

  //   return {
  //     firstLetter,
  //     ...option,
  //   };
  // });

  React.useEffect(() => {
    if (inputRef) {
      // @ts-ignore Ignore this focus check because there is no "current" where we set it below.
      inputRef.focus();
    }

    dispatch(
      setDeliverFormValues({
        dropoff_message: intl.formatMessage({ id: 'yourOrderHasArrived' }),
      }),
    );
  }, [dispatch, intl]);

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    dispatch(setInputName(event.target.name));
  };

  return (
    <>
      <Box sx={styles.container}>
        <Box
          ref={formRef}
          component='form'
          sx={styles.form}
          onSubmit={async (event) => {
            // TODO: Submit deliverFormValues and display transmitting delivery screen with message
            event.preventDefault();
            // TODO: Need to send locationId instead of locationName - Will need to work on Autocomplete
            await socket?.emit('ui_request', deliverFormValues);
          }}
        >
          <Autocomplete
            fullWidth
            disableClearable
            open={isPopupOpen}
            inputValue={deliverFormValues.dropoff_location}
            options={deliverLocations}
            // groupBy={(option) => `Floor ${option.firstLetter}`}
            getOptionLabel={(option) => option.name}
            onOpen={() => {
              setIsPopupOpen(true);
            }}
            onClose={() => {
              setIsPopupOpen(false);
            }}
            onInputChange={() => {
              if (deliverFormValues.dropoff_location.length === 1) {
                setIsPopupOpen(true);
              }
            }}
            onChange={(event, value, reason) => {
              if (reason === 'selectOption') {
                dispatch(setDeliverFormValues({ dropoff_location: value.name }));
              }
            }}
            renderInput={(params) => (
              <TextField
                autoFocus
                required
                ref={inputRef}
                name='dropoff_location'
                onFocus={handleFocus}
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
          {/* <Autocomplete
            fullWidth
            disableClearable
            open={isPopupOpen}
            inputValue={deliverFormValues.dropoff_location}
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => `Floor ${option.firstLetter}`}
            getOptionLabel={(option) => option.floor}
            onOpen={() => {
              setIsPopupOpen(true);
            }}
            onClose={() => {
              setIsPopupOpen(false);
            }}
            onInputChange={() => {
              if (deliverFormValues.dropoff_location.length === 1) {
                setIsPopupOpen(true);
              }
            }}
            onChange={(event, value, reason) => {
              if (reason === 'selectOption') {
                dispatch(setDeliverdeliverFormValues({ dropoff_location: value.floor }));
              }
            }}
            renderInput={(params) => (
              <TextField
                required
                ref={inputRef}
                autoFocus
                name='dropoff_location'
                onFocus={handleFocus}
                label={intl.formatMessage({ id: 'dropOffLocation' })}
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
          /> */}
          <TextField
            required
            name='dropoff_message'
            value={deliverFormValues.dropoff_message}
            onFocus={handleFocus}
            label={intl.formatMessage({ id: 'dropOffMessage' })}
          />
        </Box>
      </Box>
    </>
  );
}
