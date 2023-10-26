import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';
import Image from 'next/image';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './DeliveryDashboard.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function DeliveryDashboard() {
  const intl = useIntl();
  const dispatch = useDispatch();

  // TODO: Add in favorites
  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        id='hiHowCanIHelp'
        sx={{ marginLeft: 7 }}
      />
      <Box sx={styles.dashboardContainer}>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber))}>
            <Image
              priority
              src='images/room.svg'
              height={150}
              width={144}
              alt={intl.formatMessage({ id: 'enterRoomNumber' })}
            />
          </Button>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '64.03px',
            }}
          >
            <Text variant='h5'>Enter</Text>
            <Text
              component='strong'
              variant='h5'
            >
              Room Number
            </Text>
          </Box>
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber))}>
            <Image
              priority
              src='images/department-or-area.svg'
              height={150}
              width={144}
              alt={intl.formatMessage({ id: 'delivery' })}
            />
          </Button>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '64.03px',
            }}
          >
            <Text variant='h5'>Find By</Text>
            <Text
              component='strong'
              variant='h5'
            >
              Department/Area
            </Text>
          </Box>
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber))}>
            <Image
              priority
              src='images/search2.svg'
              height={150}
              width={144}
              alt={intl.formatMessage({ id: 'search' })}
            />
          </Button>
          <Box sx={{ height: '64.03px' }}>
            <Text
              variant='h5'
              component='strong'
            >
              Search
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
