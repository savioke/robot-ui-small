import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box } from '@mui/material';
import { Wifi } from '@mui/icons-material';

/** Components */
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
        alt={intl.formatMessage({ id: 'leftEye' })}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          width: '15%',
        }}
      >
        <Text>m8888</Text>
        <Image
          priority
          src='images/battery_1_of_4.svg'
          height={48}
          width={48}
          alt={intl.formatMessage({ id: 'leftEye' })}
        />
        {/* TODO: Display battery by percentage reported */}
        {/* <Image
          priority
          src='images/battery_2_of_4.svg'
          height={48}
          width={48}
          alt={intl.formatMessage({ id: 'leftEye' })}
        />
        <Image
          priority
          src='images/battery_3_of_4.svg'
          height={48}
          width={48}
          alt={intl.formatMessage({ id: 'leftEye' })}
        />
        <Image
          priority
          src='images/battery_4_of_4.svg'
          height={48}
          width={48}
          alt={intl.formatMessage({ id: 'leftEye' })}
        /> */}
        <Wifi
          // sx={{ color: 'white' }}
          fontSize='large'
        />
      </Box>
    </Box>
  );
}
