import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Grid, IconButton, Button } from '@mui/material';
import { Backspace } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from './Keypad.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface KeypadProps {
  setValues: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  handleSetValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Keypad({ setValues, handleSetValues }: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);

  return (
    <Box sx={styles.keypadContainer}>
      <Grid
        container
        justifyContent='flex-end'
        rowSpacing='22px'
        sx={styles.gridContainer}
      >
        <Grid
          container
          item
          justifyContent='flex-end'
          xs={12}
        >
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={1}
            >
              {intl.formatMessage({ id: '1' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={2}
            >
              {intl.formatMessage({ id: '2' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={3}
            >
              {intl.formatMessage({ id: '3' })}
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent='flex-end'
          xs={12}
        >
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={4}
            >
              {intl.formatMessage({ id: '4' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={5}
            >
              {intl.formatMessage({ id: '5' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={6}
            >
              {intl.formatMessage({ id: '6' })}
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent='flex-end'
          xs={12}
        >
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={7}
            >
              {intl.formatMessage({ id: '7' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={8}
            >
              {intl.formatMessage({ id: '8' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={9}
            >
              {intl.formatMessage({ id: '9' })}
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent='flex-end'
          xs={12}
        >
          <Grid
            item
            xs={3}
            sx={[styles.fabContainer, styles.iconButtonContainer]}
          ></Grid>
          <Grid
            item
            xs={3}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleSetValues}
              value={0}
            >
              {intl.formatMessage({ id: '0' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
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
              onClick={() => setValues((previousValues) => previousValues.slice(0, -1))}
            >
              <Backspace
                fontSize='large'
                sx={{ color: 'white' }}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          xs={9}
        >
          <Button
            fullWidth
            sx={{ height: '65px', fontSize: '24px' }}
            variant='contained'
            onClick={() => {
              // TODO: Hook in error message for invalid code... This might be verified from R2C2.
              // TODO: Passcode validation from R2C2
              if (displayScreen === DisplayScreenOptions.RoomNumber) {
                return dispatch(setDisplayScreen(DisplayScreenOptions.RoomMessage));
              }

              return dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
            }}
          >
            {intl.formatMessage({ id: 'ok' })}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
