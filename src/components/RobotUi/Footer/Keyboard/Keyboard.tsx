import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Grid, Button } from '@mui/material';
import { Backspace, ArrowUpward } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from './Keyboard.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface KeypadProps {
  passCode: string;
  setPasscode: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keyboard({ passCode, setPasscode }: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);
  const [isNumberDisplay, setIsNumberDisplay] = useState(true);

  const handleKeyboardValues = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPasscode((previousValue) => {
      return previousValue + event.currentTarget.value;
    });
  };

  if (isNumberDisplay) {
    return (
      <Grid
        container
        rowSpacing={3}
        sx={styles.gridContainer}
      >
        <Grid
          container
          item
          xs={12}
        >
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={1}
            >
              {intl.formatMessage({ id: '1' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={2}
            >
              {intl.formatMessage({ id: '2' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={3}
            >
              {intl.formatMessage({ id: '3' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={4}
            >
              {intl.formatMessage({ id: '4' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={5}
            >
              {intl.formatMessage({ id: '5' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
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
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={7}
            >
              {intl.formatMessage({ id: '7' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={8}
            >
              {intl.formatMessage({ id: '8' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={9}
            >
              {intl.formatMessage({ id: '9' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value={0}
            >
              {intl.formatMessage({ id: '0' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='+'
            >
              {intl.formatMessage({ id: '+' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
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
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='.'
            >
              {intl.formatMessage({ id: '.' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value=','
            >
              {intl.formatMessage({ id: ',' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='!'
            >
              {intl.formatMessage({ id: '!' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='?'
            >
              {intl.formatMessage({ id: '?' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='('
            >
              {intl.formatMessage({ id: '(' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
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
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='\'
            >
              \
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='/'
            >
              /
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value=':'
            >
              {intl.formatMessage({ id: ':' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value=';'
            >
              {intl.formatMessage({ id: ';' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='~'
            >
              {intl.formatMessage({ id: '~' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
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
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='&'
            >
              {intl.formatMessage({ id: '&' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='@'
            >
              {intl.formatMessage({ id: '@' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='#'
            >
              {intl.formatMessage({ id: '#' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='%'
            >
              {intl.formatMessage({ id: '%' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value='='
            >
              {intl.formatMessage({ id: '=' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.numberButtons}
              onClick={handleKeyboardValues}
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
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={{ width: '100%', height: '55px', backgroundColor: '#414141', fontSize: '24px' }}
              onClick={handleKeyboardValues}
              value=' '
            >
              {intl.formatMessage({ id: 'space' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={styles.fabContainer}
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
              onClick={() => setPasscode((accessCode) => accessCode.slice(0, -1))}
            >
              <Backspace
                fontSize='large'
                sx={{ color: 'white' }}
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
            sx={styles.fabContainer}
          >
            <Button
              variant='outlined'
              sx={{
                width: '100%',
                height: '55px',
                color: '#414141',
                borderColor: '#414141',
                fontSize: '24px',
                '&:hover': {
                  borderColor: '#414141',
                },
              }}
              onClick={() => setIsNumberDisplay(false)}
            >
              {intl.formatMessage({ id: 'abc' })}
            </Button>
          </Grid>
          <Grid
            item
            xs={10}
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={{ width: '100%', height: '55px', fontSize: '24px' }}
              onClick={() => {
                if (displayScreen === DisplayScreenOptions.RoomMessage) {
                  dispatch(setDisplayScreen(DisplayScreenOptions.RoomSummary));
                }
              }}
            >
              {intl.formatMessage({ id: 'confirm' })}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      rowSpacing={3}
      sx={styles.gridContainer}
    >
      <Grid
        container
        item
        xs={12}
      >
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='a'
          >
            {intl.formatMessage({ id: 'a' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='b'
          >
            {intl.formatMessage({ id: 'b' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='c'
          >
            {intl.formatMessage({ id: 'c' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='d'
          >
            {intl.formatMessage({ id: 'd' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='e'
          >
            {intl.formatMessage({ id: 'e' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='f'
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='g'
          >
            {intl.formatMessage({ id: 'g' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='h'
          >
            {intl.formatMessage({ id: 'h' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='i'
          >
            {intl.formatMessage({ id: 'i' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='j'
          >
            {intl.formatMessage({ id: 'j' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='k'
          >
            {intl.formatMessage({ id: 'k' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='l'
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='m'
          >
            {intl.formatMessage({ id: 'm' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='n'
          >
            {intl.formatMessage({ id: 'n' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='o'
          >
            {intl.formatMessage({ id: 'o' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='p'
          >
            {intl.formatMessage({ id: 'p' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='q'
          >
            {intl.formatMessage({ id: 'q' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='r'
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='s'
          >
            {intl.formatMessage({ id: 's' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='t'
          >
            {intl.formatMessage({ id: 't' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='u'
          >
            {intl.formatMessage({ id: 'u' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='v'
          >
            {intl.formatMessage({ id: 'v' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='w'
          >
            {intl.formatMessage({ id: 'w' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='x'
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='y'
          >
            {intl.formatMessage({ id: 'y' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='z'
          >
            {intl.formatMessage({ id: 'z' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='.'
          >
            {intl.formatMessage({ id: '.' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value=','
          >
            {intl.formatMessage({ id: ',' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value='!'
          >
            {intl.formatMessage({ id: '!' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.numberButtons}
            onClick={handleKeyboardValues}
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={{ width: '100%', height: '55px', backgroundColor: '#414141', fontSize: '24px' }}
            // TODO: Handle capitalizing letters
            onClick={handleKeyboardValues}
          >
            <ArrowUpward />
          </Button>
        </Grid>
        <Grid
          item
          xs={8}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={{ width: '100%', height: '55px', backgroundColor: '#414141', fontSize: '24px' }}
            onClick={handleKeyboardValues}
            value=' '
          >
            {intl.formatMessage({ id: 'space' })}
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={styles.fabContainer}
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
            onClick={() => setPasscode((accessCode) => accessCode.slice(0, -1))}
          >
            <Backspace
              fontSize='large'
              sx={{ color: 'white' }}
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
          sx={styles.fabContainer}
        >
          <Button
            variant='outlined'
            sx={{
              width: '100%',
              height: '55px',
              color: '#414141',
              borderColor: '#414141',
              fontSize: '24px',
              '&:hover': {
                borderColor: '#414141',
              },
            }}
            onClick={() => setIsNumberDisplay(true)}
          >
            ?123
          </Button>
        </Grid>
        <Grid
          item
          xs={9}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={{ width: '100%', height: '55px', fontSize: '24px' }}
            onClick={() => {
              if (displayScreen === DisplayScreenOptions.RoomMessage) {
                dispatch(setDisplayScreen(DisplayScreenOptions.RoomSummary));
              }
            }}
          >
            {intl.formatMessage({ id: 'confirm' })}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
