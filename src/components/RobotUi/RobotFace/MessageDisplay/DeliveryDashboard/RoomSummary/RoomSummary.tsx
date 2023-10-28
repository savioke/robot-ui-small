import React from 'react';

/** Mui Components */
import { Box, Button, Paper } from '@mui/material';

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
          <Box sx={styles.innerPaper}>
            <Box sx={styles.roomNumberContainer}>
              <ArrowBackTopBar />
              <Box sx={styles.textFieldContainer}>
                {/* TODO: Display the room Number */}

                <Text variant='h4'>
                  Delivering to <strong>Room (101)</strong>
                </Text>
                <Text variant='h4'>What I will say on delivery!</Text>
                {/* TODO: Display the summar text */}
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
              {/* TODO: Pin confirm button in the bottom left of the display */}
              <Button variant='contained'>Confirm</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
