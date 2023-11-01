import React from 'react';
import { useSelector } from 'typeDux';

/** Mui Components */
import { Box, Paper } from '@mui/material';

/** Components */
import PassCode from './PassCode/PassCode';
import RobotFace from './RobotFace/RobotFace';

/** styles */
import { styles } from './RobotUi.styles';

/** redux */
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';
import RoomNumber from './RobotFace/MessageDisplay/DeliveryDashboard/RoomNumber/RoomNumber';
import RoomMessage from './RobotFace/MessageDisplay/DeliveryDashboard/RoomMessage/RoomMessage';
import RoomSummary from './RobotFace/MessageDisplay/DeliveryDashboard/RoomSummary/RoomSummary';

export default function RobotUi() {
  const displayScreen = useSelector(getDisplayScreen);

  if (displayScreen === DisplayScreenOptions.PassCode) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <PassCode />
          </Paper>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.RoomNumber) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <RoomNumber />
          </Paper>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.RoomMessage) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <RoomMessage />
          </Paper>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.RoomSummary) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <RoomSummary />
          </Paper>
        </Box>
      </Box>
    );
  }

  return <RobotFace />;
}
