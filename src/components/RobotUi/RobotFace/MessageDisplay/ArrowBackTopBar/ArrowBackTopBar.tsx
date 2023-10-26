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
          id='delivery'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='roomNumber'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='message'
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
  } else if (displayScreen === DisplayScreenOptions.Utilities) {
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
          id='utilities'
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Favorites) {
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
          id='favorites'
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Actions) {
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
          id='utilities'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='actions'
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
        variant='h6'
        component='h1'
        id='delivery'
      />
    </Box>
  );
}
