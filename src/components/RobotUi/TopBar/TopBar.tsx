import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Divider } from '@mui/material';
import { Wifi } from '@mui/icons-material';

/** Components */
import BatteryIcon from './BatteryIcon/BatteryIcon';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './TopBar.styles';

/** redux */

/** helpers */

export default function TopBar() {
  const intl = useIntl();

  return (
    <Box sx={styles.container}>
      <Image
        priority
        src='images/exit.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'returnHome' })}
      />
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
  );
}
