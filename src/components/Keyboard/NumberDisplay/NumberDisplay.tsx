import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Grid, Button } from '@mui/material';
import { Backspace } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from '../Keyboard.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';
import { setDeliverFormValues } from 'state/deliver/deliver.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

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
  const displayScreen = useSelector(getDisplayScreen);
  const deliverFormValues = useSelector(getDeliverFormValues);

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
              sx={styles.numberButtons}
              onClick={setValues}
              value={1}
            >
              {intl.formatMessage({ id: '1' })}
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
              value={2}
            >
              {intl.formatMessage({ id: '2' })}
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
              value={3}
            >
              {intl.formatMessage({ id: '3' })}
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
              value={4}
            >
              {intl.formatMessage({ id: '4' })}
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
              value={5}
            >
              {intl.formatMessage({ id: '5' })}
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
            xs={2}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value={7}
            >
              {intl.formatMessage({ id: '7' })}
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
              value={8}
            >
              {intl.formatMessage({ id: '8' })}
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
              value={9}
            >
              {intl.formatMessage({ id: '9' })}
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
              value={0}
            >
              {intl.formatMessage({ id: '0' })}
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
              value='+'
            >
              {intl.formatMessage({ id: '+' })}
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
              value='-'
            >
              {intl.formatMessage({ id: '-' })}
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
          <Grid
            item
            xs={2}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={setValues}
              value='('
            >
              {intl.formatMessage({ id: '(' })}
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
              value=')'
            >
              {intl.formatMessage({ id: ')' })}
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
              sx={styles.numberButtons}
              onClick={setValues}
              value='\'
            >
              \
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
              value='/'
            >
              /
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
              value=':'
            >
              {intl.formatMessage({ id: ':' })}
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
              value=';'
            >
              {intl.formatMessage({ id: ';' })}
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
              value='~'
            >
              {intl.formatMessage({ id: '~' })}
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
              value='*'
            >
              {intl.formatMessage({ id: '*' })}
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
              sx={styles.numberButtons}
              onClick={setValues}
              value='&'
            >
              {intl.formatMessage({ id: '&' })}
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
              value='@'
            >
              {intl.formatMessage({ id: '@' })}
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
              value='#'
            >
              {intl.formatMessage({ id: '#' })}
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
              value='%'
            >
              {intl.formatMessage({ id: '%' })}
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
              value='='
            >
              {intl.formatMessage({ id: '=' })}
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
              value='$'
            >
              {intl.formatMessage({ id: '$' })}
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
            xs={10}
          >
            <Button
              variant='contained'
              sx={styles.spaceButton}
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
              disabled={isContinueDisabled}
              variant='contained'
              sx={styles.confirmButton}
              onClick={() => {
                if (displayScreen === DisplayScreenOptions.DeliveryMessage) {
                  dispatch(setDisplayScreen(DisplayScreenOptions.DeliverySummary));
                } else if (displayScreen === DisplayScreenOptions.Search) {
                  dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryMessage));
                }

                if (!deliverFormValues.context.dropoff_message) {
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
