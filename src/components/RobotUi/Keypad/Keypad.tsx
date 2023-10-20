import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Grid, Fab, IconButton, Button } from '@mui/material';

/** Components */

/** styles */
import { styles } from './Keypad.styles';
import BackspaceIcon from '../SvgIcons/BackspaceIcon/BackspaceIcon';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface KeypadProps {
  keypadValues: string;
  setKeypadValues: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keypad({ keypadValues, setKeypadValues }: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();

  const addToKeypadValues = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setKeypadValues((previousValue) => {
      if (previousValue.length === 4) {
        return previousValue;
      }

      return previousValue + event.currentTarget.value;
    });
  };

  return (
    <Grid
      container
      rowSpacing={3}
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
            onClick={() => setKeypadValues((accessCode) => accessCode.slice(0, -1))}
            sx={styles.iconButton}
          >
            <BackspaceIcon />
          </IconButton>
        </Grid>
        <Button
          sx={styles.button}
          variant='contained'
          onClick={() => {
            // TODO: Hook in error message for invalid code... This might be verified from R2C2.
            if (keypadValues !== '1234') {
              return;
              // return setErrorMessage('Invalid passcode')
            }

            return dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
          }}
        >
          {intl.formatMessage({ id: 'ok' })}
        </Button>
      </Grid>
    </Grid>
  );
}
