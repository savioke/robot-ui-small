import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';
import Image from 'next/image';

/** Mui Components */
import { Box, Button, IconButton, Paper } from '@mui/material';
import { Settings } from '@mui/icons-material';

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
        variant='h2'
        component='h1'
        id='hiHowCanIHelp'
      />
      <Box sx={styles.dashboardContainer}>
        <Box sx={styles.paperContainer}>
          <Paper
            elevation={4}
            sx={styles.paper}
          >
            <Button onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliverForm))}>
              <Image
                priority
                src='images/delivery.svg'
                height={150}
                width={144}
                alt={intl.formatMessage({ id: 'delivery' })}
              />
            </Button>
          </Paper>
          <Text
            variant='h5'
            id='delivery'
          />
        </Box>
        <Box sx={styles.paperContainer}>
          <Paper
            elevation={4}
            sx={styles.paper}
          >
            <IconButton onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Settings))}>
              <Settings sx={styles.settingsIcon} />
            </IconButton>
          </Paper>
          <Text
            variant='h5'
            id='utility'
          />
        </Box>
      </Box>
    </Box>
  );
}
