import React from 'react';
import { useSelector } from 'typeDux';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Box, IconButton } from '@mui/material';

/** Components */
import HomeIcon from '../SvgIcons/HomeIcon/HomeIcon';
import SettingsIcon from '../SvgIcons/SettingsIcon/SettingsIcon';
import BackArrowIcon from '../SvgIcons/BackArrowIcon/BackArrowIcon';

/** styles */
import { styles } from './Footer.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function Footer() {
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);

  if (
    displayScreen !== DisplayScreenOptions.PassCode &&
    displayScreen !== DisplayScreenOptions.Home &&
    displayScreen !== DisplayScreenOptions.Dashboard &&
    displayScreen !== DisplayScreenOptions.Settings &&
    displayScreen !== DisplayScreenOptions.MingleForm
  ) {
    return null;
  } else if (displayScreen === DisplayScreenOptions.Home) {
    return (
      <Box sx={styles.iconContainer}>
        <IconButton onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.PassCode))}>
          <SettingsIcon variant='white' />
        </IconButton>
      </Box>
    );
  } else if (
    displayScreen === DisplayScreenOptions.Settings ||
    displayScreen === DisplayScreenOptions.MingleForm
  ) {
    return (
      <Box sx={styles.iconContainer}>
        <IconButton onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}>
          <BackArrowIcon />
        </IconButton>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Dashboard) {
    return (
      <Box sx={styles.iconContainer}>
        <IconButton onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Home))}>
          <BackArrowIcon />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box sx={styles.iconContainer}>
      <IconButton onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Home))}>
        <HomeIcon />
      </IconButton>
    </Box>
  );
}
