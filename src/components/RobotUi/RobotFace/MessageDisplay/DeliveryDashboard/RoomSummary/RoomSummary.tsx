import React from 'react';

/** Mui Components */
import { Box, Button, Paper, Grid } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './RoomSummary.styles';

/** redux */

/** helpers */

export default function RoomSummary() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.messageContainer}>
        <Paper
          elevation={5}
          sx={styles.paper}
        >
          <Grid container>
            <Grid
              item
              xs={8}
              sx={styles.gridItem}
            >
              <Box sx={styles.leftSideContent}>
                <ArrowBackTopBar />
                <Box sx={styles.leftSideTextContainer}>
                  <Text variant='h3'>
                    Delivery to <strong>Room 101</strong>
                  </Text>
                  <Box sx={styles.summaryTextContainer}>
                    <Box sx={{}}>
                      <Text variant='h4'>What I will say on delivery!</Text>
                      <Box sx={styles.messageTextContainer}>
                        <Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt
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
                  <Text variant='h4'>Everything is loaded?</Text>
                  <Text variant='h4'>I'll be on my way!</Text>
                </Box>
                <Button
                  sx={styles.button}
                  variant='contained'
                  // TODO: Create task with all values
                >
                  Go!
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
