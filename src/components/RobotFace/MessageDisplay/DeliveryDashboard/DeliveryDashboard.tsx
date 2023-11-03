import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './DeliveryDashboard.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function DeliveryDashboard() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        id='hiHowCanIHelp'
        sx={styles.title}
      />
      <Box sx={styles.dashboardContainer}>
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => {
              router.push(`${router.pathname}#room`);
              dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber));
            }}
          >
            <Image
              priority
              src='images/room.svg'
              height={150}
              width={144}
              alt={intl.formatMessage({ id: 'enterRoomNumber' })}
            />
          </Button>
          <Box sx={[styles.descriptionContainer, styles.descriptionHeight]}>
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
          {/* TODO: Begin search by work deparment flow */}
          <Button
            onClick={() => {
              router.push(`${router.pathname}#department`);
              // dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber));
            }}
          >
            <Image
              priority
              src='images/department-or-area.svg'
              height={150}
              width={144}
              alt={intl.formatMessage({ id: 'delivery' })}
            />
          </Button>
          <Box sx={[styles.descriptionContainer, styles.descriptionHeight]}>
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
          <Button
            onClick={() => {
              router.push(`${router.pathname}#search`);
              dispatch(setDisplayScreen(DisplayScreenOptions.Search));
            }}
          >
            <Image
              priority
              src='images/search-icon.svg'
              height={150}
              width={144}
              alt={intl.formatMessage({ id: 'search' })}
            />
          </Button>
          <Box sx={styles.descriptionHeight}>
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
