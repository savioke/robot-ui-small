import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Avatar, Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './Favorites.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function Favorites() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const avatarColors = [
    '#004B66',
    '#0AA15B',
    '#7B5097',
    '#E7AB44',
    '#0A89A1',
    '#D34E87',
    '#B476DC',
    '#9F6A0D',
    '#186212',
    '#4B0AA1',
  ];

  // TODO: Will pull in Favorite names
  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        id='hiHowCanIHelp'
        sx={{ marginLeft: 7, marginBottom: '24px' }}
      />
      <Box sx={styles.dashboardContainer}>
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard))}
          >
            <Avatar
              variant='square'
              sx={{
                minWidth: '132px',
                minHeight: '132px',
                borderRadius: '30px',
                fontSize: '70px',
                backgroundColor: avatarColors[0],
              }}
            >
              F1
            </Avatar>
          </Button>
          <Text
            variant='h5'
            sx={{ fontWeight: 600 }}
          >
            Favorite 1
          </Text>
        </Box>
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard))}
          >
            <Avatar
              variant='square'
              sx={{
                minWidth: '132px',
                minHeight: '132px',
                borderRadius: '30px',
                fontSize: '70px',
                backgroundColor: avatarColors[1],
              }}
            >
              F2
            </Avatar>
          </Button>
          <Text
            variant='h5'
            sx={{ fontWeight: 600 }}
          >
            Favorite 2
          </Text>
        </Box>
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard))}
          >
            <Avatar
              variant='square'
              sx={{
                minWidth: '132px',
                minHeight: '132px',
                borderRadius: '30px',
                fontSize: '70px',
                backgroundColor: avatarColors[2],
              }}
            >
              F3
            </Avatar>
          </Button>
          <Text
            variant='h5'
            sx={{ fontWeight: 600 }}
          >
            Favorite 3
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
