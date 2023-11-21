import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Grid } from '@mui/material';
import { Backspace, Clear } from '@mui/icons-material';

/** Components */
import Button from 'sharedComponents/Button/Button';
import KeypadButton from 'sharedComponents/KeypadButton/KeypadButton';

/** styles */
import { styles } from './Keypad.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen, getPasscode, getNotificationMessage } from 'state/ui/ui.selectors';
import { getSocket } from 'state/socket/socket.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface KeypadProps {
  isContinueDisabled?: boolean;
  setValues: React.Dispatch<React.SetStateAction<string>>;
  handleClear: () => void;
  // eslint-disable-next-line no-unused-vars
  handleSetValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Keypad({
  isContinueDisabled,
  setValues,
  handleSetValues,
  handleClear,
}: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSelector(getSocket);
  const displayScreen = useSelector(getDisplayScreen);
  const passCode = useSelector(getPasscode);
  const notificationMessage = useSelector(getNotificationMessage);

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
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={1}
            >
              {intl.formatMessage({ id: '1' })}
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={2}
            >
              {intl.formatMessage({ id: '2' })}
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={3}
            >
              {intl.formatMessage({ id: '3' })}
            </KeypadButton>
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
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={4}
            >
              {intl.formatMessage({ id: '4' })}
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={5}
            >
              {intl.formatMessage({ id: '5' })}
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={6}
            >
              {intl.formatMessage({ id: '6' })}
            </KeypadButton>
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
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={7}
            >
              {intl.formatMessage({ id: '7' })}
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={8}
            >
              {intl.formatMessage({ id: '8' })}
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={9}
            >
              {intl.formatMessage({ id: '9' })}
            </KeypadButton>
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
            <KeypadButton
              variant='contained'
              onClick={handleClear}
            >
              <Clear
                fontSize='large'
                sx={styles.backSpaceIcon}
              />
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={handleSetValues}
              value={0}
            >
              {intl.formatMessage({ id: '0' })}
            </KeypadButton>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <KeypadButton
              variant='contained'
              onClick={() => setValues((previousValues) => previousValues.slice(0, -1))}
            >
              <Backspace
                fontSize='large'
                sx={styles.backSpaceIcon}
              />
            </KeypadButton>
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
                  // TODO: If notification message means its Authorize Pickup or Dropoff - need to clean this logic up.
                } else if (notificationMessage) {
                  return socket?.emit('authorize', passCode);
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
