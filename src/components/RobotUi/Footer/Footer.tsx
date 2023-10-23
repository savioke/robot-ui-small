import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import Image from 'next/image';
import { useIntl } from 'react-intl';

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
  const intl = useIntl();
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

  if (
    !isScreenTouched ||
    (displayScreen !== DisplayScreenOptions.PassCode && displayScreen !== DisplayScreenOptions.Home)
  ) {
    return null;
  } else if (displayScreen === DisplayScreenOptions.PassCode) {
    return (
      <Box sx={styles.iconContainer}>
        <Image
          priority
          src='images/mini-robot-face.svg'
          height={70}
          width={70}
          alt={intl.formatMessage({ id: 'miniRobotFace' })}
        />
      </Box>
    );
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
