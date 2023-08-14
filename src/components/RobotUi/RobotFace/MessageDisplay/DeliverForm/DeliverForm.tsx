import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Autocomplete, Box, TextField, styled, lighten, darken } from '@mui/material';

/** Components */

/** styles */
import { styles } from './DeliverForm.styles';

/** redux */
import { setDeliverFormValues, setInputName, setDisplayScreen } from 'state/ui/ui.slice';
import { getDeliverFormValues, getDeliverLocations } from 'state/ui/ui.selectors';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { DisplayScreenOptions } from 'appConstants';

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
  const socket = useSocketIo(dispatch, intl);
  const deliverFormValues = useSelector(getDeliverFormValues);
  const deliverLocations = useSelector(getDeliverLocations);
  let inputRef = React.useRef<HTMLInputElement>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

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
            event.preventDefault();
            await socket?.emit('ui_request', deliverFormValues);
            dispatch(setDisplayScreen(DisplayScreenOptions.Home));
          }}
        >
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
              if (reason === 'selectOption') {
                dispatch(setDeliverFormValues({ dropoff_location: value.name }));
                dispatch(
                  setDeliverFormValues({
                    transit_message: `${intl.formatMessage({ id: 'deliveringTo' })} ${value.name}`,
                  }),
                );
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
            renderGroup={(params) => (
              <li key={params.key}>
                <GroupHeader>{params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
              </li>
            )}
          />
          <TextField
            required
            name='dropoff_message'
            value={deliverFormValues.context.dropoff_message}
            onFocus={handleFocus}
            label={intl.formatMessage({ id: 'dropOffMessage' })}
            onChange={(event) => {
              dispatch(
                setDeliverFormValues({
                  dropoff_message: event.target.value,
                }),
              );
            }}
          />
        </Box>
      </Box>
    </>
  );
}
