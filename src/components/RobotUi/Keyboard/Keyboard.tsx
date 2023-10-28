import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Grid, Button } from '@mui/material';
import { Backspace, ArrowUpward, ArrowDownward } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from './Keyboard.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface KeypadProps {
  setPasscode: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keyboard({ setPasscode }: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);
  const [isNumberDisplay, setIsNumberDisplay] = useState(false);
  const [isCapitalLetters, setIsCapitalLetters] = useState(false);

  const handleKeyboardValues = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPasscode((previousValue) => {
      return previousValue + event.currentTarget.value;
    });
  };

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
              sx={styles.spaceButton}
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
            sx={styles.fabContainer}
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
            sx={styles.fabContainer}
          >
            <Button
              variant='contained'
              sx={styles.confirmButton}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'a', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'b', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'c', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'd', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'e', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'g', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'h', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'i', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'j', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'k', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'm', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'n', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'o', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'p', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'q', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 's', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 't', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'u', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'v', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'w', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'y', isCapitalLetters })}
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
            sx={[
              styles.numberButtons,
              { textTransform: isCapitalLetters ? 'uppercase' : 'lowercase' },
            ]}
            onClick={handleKeyboardValues}
            value={handleCapitalLetters({ letter: 'z', isCapitalLetters })}
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
            sx={styles.capitalizeButton}
            onClick={() => setIsCapitalLetters((previousValue) => !previousValue)}
          >
            {isCapitalLetters ? <ArrowDownward /> : <ArrowUpward />}
          </Button>
        </Grid>
        <Grid
          item
          xs={8}
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.spaceButton}
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
          sx={styles.fabContainer}
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
          sx={styles.fabContainer}
        >
          <Button
            variant='contained'
            sx={styles.confirmButton}
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
