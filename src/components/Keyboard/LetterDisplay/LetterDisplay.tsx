import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Grid, Button } from '@mui/material';
import { Backspace, ArrowUpward, ArrowDownward } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from '../Keyboard.styles';

/** redux */
import { setDisplayScreen, setTransitMessage } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';
import { setDeliverFormValues } from 'state/deliver/deliver.slice';
import { getGoToFormValues } from 'state/goTo/goTo.selectors';
import { getMappingFormValues } from 'state/mapping/mapping.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

interface LetterDisplayProps {
  isContinueDisabled?: boolean;
  setIsNumberDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  setValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleBackspace: () => void;
}

export default function LetterDisplay({
  isContinueDisabled,
  handleBackspace,
  setIsNumberDisplay,
  setValues,
}: LetterDisplayProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo();
  const [isCapitalLetters, setIsCapitalLetters] = useState(true);
  const displayScreen = useSelector(getDisplayScreen);
  const deliverFormValues = useSelector(getDeliverFormValues);
  const goToFormValues = useSelector(getGoToFormValues);
  const mappingFormValues = useSelector(getMappingFormValues);
  const isGoToConfirmDisabled =
    displayScreen === DisplayScreenOptions.GoToSearch && !goToFormValues.config.destination;

  // TODO: Need to fine tune confirm button disabled

  React.useEffect(() => {
    if (deliverFormValues.config.dropoff_message.length === 1) {
      setIsCapitalLetters(false);
    }
  }, [deliverFormValues.config.dropoff_message.length]);

  const handleCapitalLetters = ({
    letter,
    isCapitalLetters,
  }: {
    letter: string;
    isCapitalLetters: boolean;
  }) => {
    if (isCapitalLetters) {
      return letter.toUpperCase();
    }

    return letter.toLowerCase();
  };

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
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'a', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'a' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'b', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'b' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'c', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'c' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'd', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'd' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'e', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'e' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'f', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'f' })}
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
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'g', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'g' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'h', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'h' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'i', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'i' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'j', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'j' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'k', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'k' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'l', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'l' })}
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
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'm', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'm' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'n', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'n' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'o', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'o' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'p', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'p' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'q', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'q' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'r', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'r' })}
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
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 's', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 's' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 't', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 't' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'u', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'u' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'v', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'v' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'w', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'w' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'x', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'x' })}
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
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'y', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'y' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.numberButtons,
                { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
              ]}
              onClick={setValues}
              value={handleCapitalLetters({ letter: 'z', isCapitalLetters })}
            >
              {intl.formatMessage({ id: 'z' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='.'
            >
              {intl.formatMessage({ id: '.' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value=','
            >
              {intl.formatMessage({ id: ',' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='!'
            >
              {intl.formatMessage({ id: '!' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='?'
            >
              {intl.formatMessage({ id: '?' })}
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
            xs={2}
          >
            <Button
              variant='contained'
              sx={[
                styles.capitalizeButton,
                {
                  '&:hover': {
                    backgroundColor: '#BBBBBB',
                  },
                },
              ]}
              onClick={() => setIsCapitalLetters((previousValue) => !previousValue)}
            >
              {isCapitalLetters ? (
                <ArrowDownward fontSize='large' />
              ) : (
                <ArrowUpward fontSize='large' />
              )}
            </Button>
          </Grid>
          <Grid
            item
            xs={8}
          >
            <Button
              variant='contained'
              sx={[
                styles.spaceButton,
                {
                  '&:hover': {
                    backgroundColor: '#BBBBBB',
                  },
                },
              ]}
              onClick={setValues}
              value=' '
            >
              {intl.formatMessage({ id: 'space' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              sx={[
                styles.numberButtons,
                {
                  '&:hover': {
                    backgroundColor: '#BBBBBB',
                  },
                },
              ]}
              onClick={handleBackspace}
            >
              <Backspace
                fontSize='large'
                sx={styles.backspaceIcon}
              />
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
            xs={3}
          >
            <Button
              variant='outlined'
              sx={styles.transformButton}
              onClick={() => setIsNumberDisplay(true)}
            >
              ?123
            </Button>
          </Grid>
          <Grid
            item
            xs={9}
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
                } else if (displayScreen === DisplayScreenOptions.OverrideMap) {
                  socket?.emit('queue_tasks', mappingFormValues);
                  dispatch(setDisplayScreen(DisplayScreenOptions.Mapping));
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
