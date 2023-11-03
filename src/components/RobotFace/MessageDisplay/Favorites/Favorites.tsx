import React from 'react';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Avatar, Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Favorites.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions, AvatarBackgroundColors } from 'appConstants';

export default function Favorites() {
  const dispatch = useDispatch();

  // TODO: Will pull in Favorite names
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
          {/* TODO: Initiate Favorite Delivery */}
          <Button>
            <Avatar
              variant='square'
              sx={[styles.avatar, { backgroundColor: AvatarBackgroundColors[0] }]}
            >
              F1
            </Avatar>
          </Button>
          <Text
            variant='h5'
            sx={styles.boldFont}
          >
            Favorite 1
          </Text>
        </Box>
        <Box sx={styles.paperContainer}>
          {/* TODO: Initiate Favorite Delivery */}
          <Button>
            <Avatar
              variant='square'
              sx={[styles.avatar, { backgroundColor: AvatarBackgroundColors[1] }]}
            >
              F2
            </Avatar>
          </Button>
          <Text
            variant='h5'
            sx={styles.boldFont}
          >
            Favorite 2
          </Text>
        </Box>
        <Box sx={styles.paperContainer}>
          {/* TODO: Initiate Favorite Delivery */}
          <Button>
            <Avatar
              variant='square'
              sx={[styles.avatar, { backgroundColor: AvatarBackgroundColors[2] }]}
            >
              F3
            </Avatar>
          </Button>
          <Text
            variant='h5'
            sx={styles.boldFont}
          >
            Favorite 3
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
