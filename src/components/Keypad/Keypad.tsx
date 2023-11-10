import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Grid, Button } from '@mui/material';
import { Backspace } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from './Keypad.styles';

/** redux */
import { setDisplayScreen, setPasscode } from 'state/ui/ui.slice';
import { getDisplayScreen, getPasscode } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

interface KeypadProps {
  isContinueDisabled: boolean;
  setValues: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  handleSetValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Keypad({ isContinueDisabled, setValues, handleSetValues }: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo();
  const displayScreen = useSelector(getDisplayScreen);
  const passCode = useSelector(getPasscode);

  return (
    <Box sx={styles.keypadContainer}>
      <Grid
        container
        rowSpacing={2}
        sx={styles.gridContainer}
      >
        <Grid
          container
          item
          justifyContent='flex-end'
          spacing={2}
          xs={12}
        >
          <Grid
            item
            xs={3}
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
          spacing={2}
          justifyContent='flex-end'
          xs={12}
        >
          <Grid
            item
            xs={3}
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
          spacing={2}
          justifyContent='flex-end'
          xs={12}
        >
          <Grid
            item
            xs={3}
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
          spacing={2}
          justifyContent='flex-end'
          xs={12}
        >
          <Grid
            item
            xs={3}
            sx={styles.iconButtonContainer}
          ></Grid>
          <Grid
            item
            xs={3}
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
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={() => setValues((previousValues) => previousValues.slice(0, -1))}
            >
              <Backspace
                fontSize='large'
                sx={styles.backSpaceIcon}
              />
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent='flex-end'
        >
          <Grid
            item
            xs={9}
            sx={styles.confirmButtonGridItem}
          >
            <Button
              fullWidth
              disabled={isContinueDisabled}
              sx={styles.confirmButton}
              variant='contained'
              onClick={() => {
                if (displayScreen === DisplayScreenOptions.RoomNumber) {
                  return dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryMessage));
                } else if (passCode === '1234' || passCode === '2908') {
                  dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard));
                }

                return socket?.emit('login_pin', passCode);
              }}
            >
              {intl.formatMessage({ id: 'ok' })}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
