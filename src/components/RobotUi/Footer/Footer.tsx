import React from 'react';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Fab, Fade } from '@mui/material';
import { Lock } from '@mui/icons-material';

/** Components */

/** styles */
import { styles } from './Footer.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen, getIsScreenTouched } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function Footer() {
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);
  const isScreenTouched = useSelector(getIsScreenTouched);

  // TODO: This will be displaying the small face on certain pages. Leave for now.
  // if (
  //   displayScreen !== DisplayScreenOptions.PassCode &&
  //   displayScreen !== DisplayScreenOptions.Home &&
  //   displayScreen !== DisplayScreenOptions.Dashboard &&
  //   displayScreen !== DisplayScreenOptions.Settings &&
  //   displayScreen !== DisplayScreenOptions.MingleForm
  // ) {
  //   return null;
  // }

  if (!isScreenTouched) {
    return null;
  } else if (displayScreen === DisplayScreenOptions.Home) {
    return (
      <Fade in={isScreenTouched}>
        <Box sx={styles.iconContainer}>
          <Fab
            size='large'
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.PassCode))}
          >
            <Lock fontSize='large' />
          </Fab>
        </Box>
      </Fade>
    );
  }

  return (
    <Box sx={styles.iconContainer}>
      <Fab
        size='large'
        onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Home))}
      >
        <Lock fontSize='large' />
      </Fab>
    </Box>
  );
}
