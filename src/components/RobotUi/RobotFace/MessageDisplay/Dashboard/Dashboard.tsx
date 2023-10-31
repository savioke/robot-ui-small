import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';
import Image from 'next/image';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import Text from 'components/Text/Text';

/** styles */
import { styles } from './Dashboard.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function Dashboard() {
  const intl = useIntl();
  const dispatch = useDispatch();

  return (
    <Box sx={styles.rootContainer}>
      <Text
        variant='h3'
        component='h1'
        id='hiHowCanIHelp'
        sx={{ marginTop: '70px', marginLeft: '56px', marginBottom: 1 }}
      />
      <Box sx={styles.dashboardContainer}>
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard))}
          >
            <Image
              priority
              src='images/delivery-icon.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'delivery' })}
            />
          </Button>
          <Text
            variant='h5'
            id='delivery'
            sx={{ color: '#00A0DB', fontWeight: 600 }}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Favorites))}>
            <Image
              priority
              src='images/favorites-icon.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'favorites' })}
            />
          </Button>
          <Text
            variant='h5'
            id='favorites'
            sx={{ color: '#C23F42', fontWeight: 600 }}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}>
            <Image
              priority
              src='images/utilities-icon.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'utilities' })}
            />
          </Button>
          <Text
            variant='h5'
            id='utilities'
            sx={{ color: '#707070', fontWeight: 600 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
