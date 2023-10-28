import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import Image from 'next/image';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, IconButton, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

/** Components */
import Text from 'components/Text/Text';

/** styles */
import { styles } from './ArrowBackTopBar.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function ArrowBackTopBar() {
  const dispatch = useDispatch();
  const displayScreen = useSelector(getDisplayScreen);
  const intl = useIntl();

  if (displayScreen === DisplayScreenOptions.RoomNumber) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={{ padding: 0 }}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={60}
            width={60}
            alt={intl.formatMessage({ id: 'miniRobotFace' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='delivery'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='roomNumber'
          sx={{ fontWeight: 600 }}
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.RoomMessage) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={{ padding: 0 }}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={60}
            width={60}
            alt={intl.formatMessage({ id: 'miniRobotFace' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='delivery'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='roomNumber'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='message'
          sx={{ fontWeight: 600 }}
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Utilities) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={{ padding: 0 }}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={60}
            width={60}
            alt={intl.formatMessage({ id: 'miniRobotFace' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='utilities'
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Favorites) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={{ padding: 0 }}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={60}
            width={60}
            alt={intl.formatMessage({ id: 'miniRobotFace' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='favorites'
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Actions) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={{ padding: 0 }}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={60}
            width={60}
            alt={intl.formatMessage({ id: 'miniRobotFace' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='utilities'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='actions'
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.PassCode) {
    return <Box sx={styles.arrowBackContainer}></Box>;
  }

  return (
    <Box sx={styles.arrowBackContainer}>
      <Button
        sx={{ padding: 0 }}
        onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
      >
        <Image
          priority
          src='/images/back_arrow.svg'
          height={60}
          width={60}
          alt={intl.formatMessage({ id: 'miniRobotFace' })}
        />
      </Button>
      <Text
        variant='h6'
        component='h1'
        id='delivery'
      />
    </Box>
  );
}
