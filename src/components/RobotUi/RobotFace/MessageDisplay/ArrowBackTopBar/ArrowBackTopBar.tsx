import React from 'react';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

/** Components */
import Text from 'components/Text/Text';

/** styles */
import { styles } from './ArrowBackTopBar.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function ArrowBackTopBar() {
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);

  if (displayScreen === DisplayScreenOptions.RoomNumber) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <IconButton
          sx={styles.iconButton}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <ArrowBack fontSize='large' />
        </IconButton>
        <Text
          variant='h5'
          component='h1'
          id='delivery'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='roomNumber'
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.RoomMessage) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <IconButton
          sx={styles.iconButton}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber))}
        >
          <ArrowBack fontSize='large' />
        </IconButton>
        <Text
          variant='h5'
          component='h1'
          id='roomMessage'
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.PassCode) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <IconButton
          sx={styles.iconButton}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <ArrowBack fontSize='large' />
        </IconButton>
        <Text
          variant='h5'
          component='h1'
          id='enterPasscode'
        />
      </Box>
    );
  }

  return (
    <Box sx={styles.arrowBackContainer}>
      <IconButton
        sx={styles.iconButton}
        onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
      >
        <ArrowBack fontSize='large' />
      </IconButton>
      <Text
        variant='h5'
        component='h1'
        id='delivery'
      />
    </Box>
  );
}
