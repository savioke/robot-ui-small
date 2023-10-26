import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';
import Image from 'next/image';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './Actions.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function Actions() {
  const intl = useIntl();
  const dispatch = useDispatch();

  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        id='whatCanIDoForYou?'
        sx={{ marginLeft: 7, marginBottom: '24px' }}
      />
      <Box sx={styles.dashboardContainer}>
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard))}
          >
            <Image
              priority
              src='images/open-lid.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'openLid' })}
            />
          </Button>
          <Text
            variant='h5'
            id='openLid'
            sx={{ fontWeight: 600 }}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}>
            <Image
              priority
              src='images/close-lid.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'closeLid' })}
            />
          </Button>
          <Text
            variant='h5'
            id='closeLid'
            sx={{ fontWeight: 600 }}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}>
            <Image
              priority
              src='images/go-to-location.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'goToLocation' })}
            />
          </Button>
          <Text
            variant='h5'
            id='goToLocation'
            sx={{ fontWeight: 600 }}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}>
            <Image
              priority
              src='images/return-to-dock.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'returnToDock' })}
            />
          </Button>
          <Text
            variant='h5'
            id='returnToDock'
            sx={{ fontWeight: 600 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
