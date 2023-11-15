import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Grid } from '@mui/material';
import { Backspace } from '@mui/icons-material';

/** Components */
import Button from 'sharedComponents/Button/Button';
import KeyboardButton from 'sharedComponents/KeyboardButton/KeyboardButton';

/** styles */
import { styles } from '../Keyboard.styles';

/** redux */
import { setDisplayScreen, setTransitMessage, setConfirmationMessage } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';
import { setDeliverFormValues } from 'state/deliver/deliver.slice';
import { getGoToFormValues } from 'state/goTo/goTo.selectors';
import { getMappingFormValues } from 'state/mapping/mapping.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

interface NumberDisplayProps {
  isContinueDisabled?: boolean;
  setIsNumberDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  setValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleBackspace: () => void;
}

export default function NumberDisplay({
  isContinueDisabled,
  setIsNumberDisplay,
  setValues,
  handleBackspace,
}: NumberDisplayProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo();
  const displayScreen = useSelector(getDisplayScreen);
  const deliverFormValues = useSelector(getDeliverFormValues);
  const goToFormValues = useSelector(getGoToFormValues);
  const mappingFormValues = useSelector(getMappingFormValues);
  const isGoToConfirmDisabled =
    displayScreen === DisplayScreenOptions.GoToSearch && !goToFormValues.config.destination;

  return (
    <Box sx={styles.keyboardContainer}>
      <Grid
        container
        rowSpacing={2}
        sx={styles.gridContainer}
      >
        <Grid
          container
          item
          spacing={1}
          xs={12}
        >
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={1}
            >
              {intl.formatMessage({ id: '1' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={2}
            >
              {intl.formatMessage({ id: '2' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={3}
            >
              {intl.formatMessage({ id: '3' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={4}
            >
              {intl.formatMessage({ id: '4' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={5}
            >
              {intl.formatMessage({ id: '5' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={6}
            >
              {intl.formatMessage({ id: '6' })}
            </KeyboardButton>
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
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={7}
            >
              {intl.formatMessage({ id: '7' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={8}
            >
              {intl.formatMessage({ id: '8' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={9}
            >
              {intl.formatMessage({ id: '9' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={0}
            >
              {intl.formatMessage({ id: '0' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='+'
            >
              {intl.formatMessage({ id: '+' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='-'
            >
              {intl.formatMessage({ id: '-' })}
            </KeyboardButton>
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
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='.'
            >
              {intl.formatMessage({ id: '.' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value=','
            >
              {intl.formatMessage({ id: ',' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='!'
            >
              {intl.formatMessage({ id: '!' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='?'
            >
              {intl.formatMessage({ id: '?' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='('
            >
              {intl.formatMessage({ id: '(' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value=')'
            >
              {intl.formatMessage({ id: ')' })}
            </KeyboardButton>
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
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='\'
            >
              \
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='/'
            >
              /
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value=':'
            >
              {intl.formatMessage({ id: ':' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value=';'
            >
              {intl.formatMessage({ id: ';' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='~'
            >
              {intl.formatMessage({ id: '~' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='*'
            >
              {intl.formatMessage({ id: '*' })}
            </KeyboardButton>
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
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='&'
            >
              {intl.formatMessage({ id: '&' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='@'
            >
              {intl.formatMessage({ id: '@' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='#'
            >
              {intl.formatMessage({ id: '#' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='%'
            >
              {intl.formatMessage({ id: '%' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='='
            >
              {intl.formatMessage({ id: '=' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='$'
            >
              {intl.formatMessage({ id: '$' })}
            </KeyboardButton>
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
            xs={10}
          >
            <KeyboardButton
              variant='contained'
              sx={styles.spaceButton}
              onClick={setValues}
              value=' '
            >
              {intl.formatMessage({ id: 'space' })}
            </KeyboardButton>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <KeyboardButton
              sx={[
                styles.numberButtons,
                {
                  '&:hover': {
                    backgroundColor: '#1272b2',
                  },
                },
              ]}
              onClick={handleBackspace}
            >
              <Backspace
                fontSize='large'
                sx={styles.backspaceIcon}
              />
            </KeyboardButton>
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
            xs={2}
          >
            <Button
              variant='outlined'
              sx={styles.transformButton}
              onClick={() => setIsNumberDisplay(false)}
            >
              {intl.formatMessage({ id: 'abc' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={10}
          >
            <Button
              disabled={isContinueDisabled || isGoToConfirmDisabled}
              variant='contained'
              sx={styles.confirmButton}
              onClick={() => {
                if (displayScreen === DisplayScreenOptions.DeliveryMessage) {
                  dispatch(setDisplayScreen(DisplayScreenOptions.DeliverySummary));
                } else if (displayScreen === DisplayScreenOptions.Search) {
                  dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryMessage));
                } else if (displayScreen === DisplayScreenOptions.GoToSearch) {
                  socket?.emit('queue_tasks', goToFormValues);
                  dispatch(setTransitMessage(goToFormValues.config.transit_message));
                  return dispatch(setDisplayScreen(DisplayScreenOptions.Home));
                } else if (
                  displayScreen === DisplayScreenOptions.OverrideMap ||
                  displayScreen === DisplayScreenOptions.CreateMap
                ) {
                  socket?.emit('queue_tasks', mappingFormValues);
                  return dispatch(setConfirmationMessage('Mapping in progress'));
                }

                if (!deliverFormValues.config.dropoff_message) {
                  dispatch(
                    setDeliverFormValues({
                      dropoff_message: intl.formatMessage({ id: 'yourOrderHasArrived!' }),
                    }),
                  );
                }
              }}
            >
              {intl.formatMessage({ id: 'confirm' })}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
