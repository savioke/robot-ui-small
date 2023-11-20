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
import { getDeliverStatus } from 'state/r2c2/r2c2.selectors';

/** helpers */
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';

export default function Footer() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);
  const isScreenTouched = useSelector(getIsScreenTouched);
  const deliverStatus = useSelector(getDeliverStatus);

  if (
    displayScreen === DisplayScreenOptions.PassCode ||
    displayScreen === DisplayScreenOptions.RoomNumber ||
    displayScreen === DisplayScreenOptions.DeliveryMessage ||
    displayScreen === DisplayScreenOptions.DeliverySummary ||
    displayScreen === DisplayScreenOptions.Search ||
    displayScreen === DisplayScreenOptions.GoToSearch ||
    displayScreen === DisplayScreenOptions.Status ||
    displayScreen === DisplayScreenOptions.CreateMap ||
    displayScreen === DisplayScreenOptions.OverrideMap
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
  } else if (displayScreen === DisplayScreenOptions.Home && deliverStatus === DeliverStatus.NONE) {
    return (
      <Fade
        in={isScreenTouched}
        onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.PassCode))}
      >
        <Box sx={styles.lockImageContainer}>
          <Image
            priority
            src='/images/lock.png'
            height={75}
            width={75}
            alt={intl.formatMessage({ id: 'miniRobotFace' })}
          />
        </Box>
      </Fade>
    );
  }

  return null;
}
