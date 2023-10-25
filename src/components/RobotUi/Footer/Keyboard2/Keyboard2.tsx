import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Grid, IconButton, Button } from '@mui/material';
import { Backspace, ArrowUpward } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from './Keyboard2.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface KeypadProps {
  passCode: string;
  setPasscode: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keyboard2({ passCode, setPasscode }: KeypadProps) {
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
              value={0}
            >
              +
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
              -
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
              .
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
              ,
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
              !
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
              ?
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
              {'('}
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
              {')'}
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
              :
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
              ;
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
              ~
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
              *
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
              &
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
              @
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
              #
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
              %
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
              =
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
              $
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
              // sx={styles.numberButtons}
              onClick={handleKeyboardValues}
              value=' '
            >
              Space
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
              value={7}
            >
              abc
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
              onClick={() => setPasscode((accessCode) => accessCode.slice(0, -1))}
            >
              Confirm
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
            value={1}
          >
            A
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
            B
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
            C
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
            D
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
            E
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
            F
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
            G
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
            H
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
            I
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
            J
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
            K
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
            L
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
            M
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
            N
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
            O
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
            P
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
            Q
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
            R
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
            S
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
            T
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
            U
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
            V
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
            W
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
            X
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
            Y
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
            Z
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
            .
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
            ,
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
            !
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
            ?
          </Button>
        </Grid>
      </Grid>
      {/* <Grid
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
            value={0}
          >
            +
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
            -
          </Button>
        </Grid>
      </Grid> */}
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
            // sx={styles.numberButtons}
            onClick={handleKeyboardValues}
            value=' '
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
            Space
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
            value={7}
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
            onClick={() => setPasscode((accessCode) => accessCode.slice(0, -1))}
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
