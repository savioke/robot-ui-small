import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import Image from 'next/image';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Fade } from '@mui/material';

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
    displayScreen === DisplayScreenOptions.RoomMessage ||
    displayScreen === DisplayScreenOptions.RoomSummary
  ) {
    return (
      <Image
        priority
        src='/images/robot-face.png'
        height={75}
        width={100}
        alt={intl.formatMessage({ id: 'miniRobotFace' })}
      />
    );
  } else if (displayScreen === DisplayScreenOptions.Home) {
    return (
      <Fade
        in={isScreenTouched}
        onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.PassCode))}
      >
        <Box sx={styles.lockImageContainer}>
          <Image
            priority
            src='/images/lock.png'
            height={60}
            width={60}
            alt={intl.formatMessage({ id: 'miniRobotFace' })}
          />
        </Box>
      </Fade>
    );
  }

  return null;
}
