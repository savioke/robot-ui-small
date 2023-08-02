import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Checkbox, MenuItem, TextField } from '@mui/material';

/** Components */

/** styles */
import { styles } from './MingleForm.styles';

/** redux */
import { setDeliverFormValues } from 'state/ui/ui.slice';

/** helpers */

const mingleLocations: { id: string; name: string; map_id: string; tags: string[] }[] = [
  { id: '1', name: 'Mingle1', map_id: '1', tags: ['Mingle'] },
  { id: '2', name: 'Mingle2', map_id: '2', tags: ['Mingle'] },
  { id: '3', name: 'Mingle3', map_id: '3', tags: ['Mingle'] },
  { id: '4', name: 'Mingle4', map_id: '4', tags: ['Mingle'] },
];

interface MingleFormProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export default function MingleForm({ formRef }: MingleFormProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  // const formValues = useSelector(getDeliverFormValues);
  const [formValues, setFormValues] = React.useState<{
    type: string;
    version: string;
    config: {
      places: string[];
      choices: string[];
      duration: number;
      type: string;
      time_per_location: number;
    };
  }>({
    type: 'Mingle',
    version: '1.0',
    config: {
      places: [],
      choices: [],
      duration: 0,
      type: 'time',
      time_per_location: 0,
    },
  });

  const choices = [
    {
      label: intl.formatMessage({ id: 'guideMe' }),
      value: 'Guide me to...',
    },
    {
      label: intl.formatMessage({ id: 'makeMeLaugh' }),
      value: 'Make me laugh',
    },
    {
      label: intl.formatMessage({ id: 'rockPaperScissors' }),
      value: 'Rock Paper Scissors',
    },
    {
      label: intl.formatMessage({ id: 'haveAGift' }),
      value: 'Have a gift',
    },
    {
      label: intl.formatMessage({ id: 'danceWithMe' }),
      value: 'Dance with me',
    },
  ];

  React.useEffect(() => {
    dispatch(
      setDeliverFormValues({
        dropoff_message: intl.formatMessage({ id: 'yourOrderHasArrived' }),
      }),
    );
  }, [dispatch, intl]);

  return (
    <>
      <Box sx={styles.container}>
        <Box
          ref={formRef}
          component='form'
          sx={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            // TODO: Submit formValues and display transmitting delivery screen with message
          }}
        >
          <TextField
            required
            select
            name='places'
            label={intl.formatMessage({ id: 'places' })}
            value={formValues.config.places}
            SelectProps={{
              multiple: true,
              renderValue: (selected: any) => selected.join(', '),
            }}
            onChange={(event) => {
              setFormValues((previousFormValues) => ({
                ...previousFormValues,
                config: {
                  ...previousFormValues.config,
                  [event.target.name]: event.target.value,
                },
              }));
            }}
          >
            {Object.entries(mingleLocations)?.map(([, location]) => (
              <MenuItem
                key={location.id}
                value={location.name}
              >
                <Checkbox
                  checked={
                    formValues?.config?.places &&
                    formValues.config.places.indexOf(location.name) > -1
                  }
                />
                {location.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            select
            name='choices'
            label={intl.formatMessage({ id: 'choices' })}
            value={formValues.config.choices}
            SelectProps={{
              multiple: true,
              // @ts-expect-error
              renderValue: (selected) => selected.join(', '),
            }}
            onChange={(event) => {
              setFormValues((previousFormValues) => ({
                ...previousFormValues,
                config: {
                  ...previousFormValues.config,
                  [event.target.name]: event.target.value,
                },
              }));
            }}
          >
            {choices.map((choice) => (
              <MenuItem
                key={choice.value}
                value={choice.value}
              >
                <Checkbox
                  checked={
                    formValues?.config?.choices &&
                    formValues.config.choices.indexOf(choice.value) > -1
                  }
                />
                {choice.label}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={styles.numberInputContainer}>
            <TextField
              required
              name='duration'
              type='number'
              InputProps={{
                inputProps: {
                  min: '1',
                },
              }}
              sx={styles.numberInput}
              label={intl.formatMessage({ id: 'duration' })}
              value={formValues.config.duration}
              onChange={(event) => {
                setFormValues((previousFormValues) => ({
                  ...previousFormValues,
                  config: {
                    ...previousFormValues.config,
                    [event.target.name]: Number(event.target.value),
                  },
                }));
              }}
            />
            <TextField
              name='time_per_location'
              type='number'
              InputProps={{
                inputProps: {
                  min: '0',
                },
              }}
              sx={styles.numberInput}
              label={intl.formatMessage({ id: 'timePerLocation' })}
              value={formValues.config.time_per_location}
              onChange={(event) => {
                setFormValues((previousFormValues) => ({
                  ...previousFormValues,
                  config: {
                    ...previousFormValues.config,
                    [event.target.name]: Number(event.target.value),
                  },
                }));
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
