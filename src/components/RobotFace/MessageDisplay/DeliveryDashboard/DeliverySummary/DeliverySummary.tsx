import React from 'react';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Button, Grid } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './DeliverySummary.styles';

/** redux */

/** helpers */

export default function DeliverySummary() {
  const intl = useIntl();

  return (
    <Grid container>
      <Grid
        item
        xs={8}
        sx={styles.gridItem}
      >
        <Box sx={styles.leftSideContent}>
          <ArrowBackTopBar />
          <Box sx={styles.leftSideTextContainer}>
            <Text
              variant='h3'
              sx={styles.deliveryTitle}
              id='deliveryTitleConfirmation'
              values={{
                dropOffLocation: <Box component='strong'>Room 101</Box>,
              }}
            />
            <Box sx={styles.summaryTextContainer}>
              <Box>
                <Text
                  variant='h4'
                  sx={styles.whatIWillSayText}
                  id='whatIWillSayOnDelivery'
                />
                <Box sx={styles.messageTextContainer}>
                  <Text sx={styles.messageText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
      >
        <Box sx={styles.rightSideContent}>
          <Box sx={styles.confirmTextContainer}>
            <Text
              variant='h4'
              id='everythingIsLoaded'
            />
            <Text
              variant='h4'
              id='illBeOnMyWay'
            />
          </Box>
          <Button
            sx={styles.button}
            variant='contained'
            // TODO: Create task with all values
          >
            {intl.formatMessage({ id: 'go' })}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}