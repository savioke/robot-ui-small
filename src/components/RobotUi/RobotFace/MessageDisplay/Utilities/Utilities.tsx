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
import { styles } from './Utilities.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function Utilities() {
  const intl = useIntl();
  const dispatch = useDispatch();

  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        id='lookingForSomethingElse?'
        sx={styles.title}
      />
      <Box sx={styles.dashboardContainer}>
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard))}
          >
            <Image
              priority
              src='images/Status.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'status' })}
            />
          </Button>
          <Text
            variant='h5'
            id='status'
            sx={styles.boldFont}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Actions))}>
            <Image
              priority
              src='images/Actions.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'actions' })}
            />
          </Button>
          <Text
            variant='h5'
            id='actions'
            sx={styles.boldFont}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}>
            <Image
              priority
              src='images/Help.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'needHelp?' })}
            />
          </Button>
          <Text
            variant='h5'
            id='needHelp?'
            sx={styles.boldFont}
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}>
            <Image
              priority
              src='images/Admin Access.svg'
              height={140}
              width={140}
              alt={intl.formatMessage({ id: 'adminAccess' })}
            />
          </Button>
          <Text
            variant='h5'
            id='adminAccess'
            sx={styles.boldFont}
          />
        </Box>
      </Box>
    </Box>
  );
}
