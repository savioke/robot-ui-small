import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Divider, Fab, Fade } from '@mui/material';
import { Wifi, Clear } from '@mui/icons-material';

/** Components */
import BatteryIcon from './BatteryIcon/BatteryIcon';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './TopBar.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen, getIsScreenTouched } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function TopBar() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);
  const isScreenTouched = useSelector(getIsScreenTouched);

  if (!isScreenTouched) {
    return <Box sx={styles.container} />;
  }

  return (
    <Fade in={isScreenTouched}>
      <Box sx={styles.container}>
        {displayScreen !== DisplayScreenOptions.Home ? (
          <Fab
            size='small'
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Home))}
          >
            <Clear fontSize='large' />
          </Fab>
        ) : (
          // TODO: Used to keep styling consistent on home page for sticking icons to the right.
          <Box></Box>
        )}
        {/* TODO: Should we use FAB instead of this image? */}
        {/* <Image
        priority
        src='images/exit.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'returnHome' })}
      /> */}
        <Box sx={styles.metricContainer}>
          <Box sx={styles.rightContainer}>
            {/* TODO: Conditional display if not connected */}
            <Wifi fontSize='large' />
            <Text id='connected' />
          </Box>
          <Divider
            flexItem
            sx={styles.divider}
            orientation='vertical'
            variant='middle'
          />
          <BatteryIcon />
        </Box>
      </Box>
    </Fade>
  );
}
