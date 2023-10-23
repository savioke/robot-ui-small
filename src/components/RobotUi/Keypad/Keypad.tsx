import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Grid, IconButton, Button } from '@mui/material';
import { Backspace } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from './Keypad.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface KeypadProps {
  passCode: string;
  setPasscode: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keypad({ passCode, setPasscode }: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();

  const handleKeypadValues = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPasscode((previousValue) => {
      // TODO: This needs to be dynamic to accept any number of pins...
      if (previousValue.length === 6) {
        return previousValue;
      }

      return previousValue + event.currentTarget.value;
    });
  };

  return (
    <Grid
      container
      rowSpacing={2}
    >
      <Grid
        container
        item
        xs={12}
      >
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={1}
          >
            {intl.formatMessage({ id: '1' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={2}
          >
            {intl.formatMessage({ id: '2' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={3}
          >
            {intl.formatMessage({ id: '3' })}
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={1}
        xs={12}
      >
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={4}
          >
            {intl.formatMessage({ id: '4' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={5}
          >
            {intl.formatMessage({ id: '5' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={6}
          >
            {intl.formatMessage({ id: '6' })}
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={1}
        xs={12}
      >
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={7}
          >
            {intl.formatMessage({ id: '7' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={8}
          >
            {intl.formatMessage({ id: '8' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={9}
          >
            {intl.formatMessage({ id: '9' })}
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
      >
        <Grid
          item
          xs={4}
          sx={[styles.fabContainer, styles.iconButtonContainer]}
        ></Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeypadValues}
            value={0}
          >
            {intl.formatMessage({ id: '0' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          sx={styles.fabContainer}
        >
          <IconButton
            sx={[
              styles.numberButtons,
              {
                '&:hover': {
                  backgroundColor: '#1272b2',
                },
              },
            ]}
            onClick={() => setPasscode((accessCode) => accessCode.slice(0, -1))}
          >
            <Backspace sx={{ color: 'white' }} />
          </IconButton>
        </Grid>
      </Grid>
      <Button
        fullWidth
        sx={{ marginTop: 3, height: '56px' }}
        variant='contained'
        onClick={() => {
          // TODO: Hook in error message for invalid code... This might be verified from R2C2.
          // TODO: Passcode validation from R2C2
          // if (keypadValues !== '1234') {
          //   return;
          //   // return setErrorMessage('Invalid passcode')
          // }

          return dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
        }}
      >
        {intl.formatMessage({ id: 'ok' })}
      </Button>
    </Grid>
  );
}
