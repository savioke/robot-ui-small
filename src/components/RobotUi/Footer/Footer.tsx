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

  if (
    displayScreen === DisplayScreenOptions.PassCode ||
    displayScreen === DisplayScreenOptions.RoomNumber ||
    displayScreen === DisplayScreenOptions.RoomMessage
  ) {
    return (
      <Box sx={{ position: 'relative', left: 0 }}>
        <Image
          priority
          src='/images/robot-face.png'
          height={75}
          width={100}
          alt={intl.formatMessage({ id: 'miniRobotFace' })}
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Home) {
    return (
      <Fade in={isScreenTouched}>
        <Box sx={styles.iconContainer}>
          <Fab
            sx={{ width: '60px', height: '60px' }}
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.PassCode))}
          >
            <Lock fontSize='large' />
          </Fab>
        </Box>
      </Fade>
    );
  }

  return null;
}
