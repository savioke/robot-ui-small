import React from 'react';
import { useSelector } from 'typeDux';

/** Mui Components */
import { Box, Paper } from '@mui/material';

/** Components */
import PassCode from 'components/PassCode/PassCode';
import RobotFace from 'components/RobotFace/RobotFace';
import RoomNumber from 'components/RobotFace/MessageDisplay/DeliveryDashboard/RoomNumber/RoomNumber';
import DeliveryMessage from 'components/RobotFace/MessageDisplay/DeliveryDashboard/DeliveryMessage/DeliveryMessage';
import DeliverySummary from 'components/RobotFace/MessageDisplay/DeliveryDashboard/DeliverySummary/DeliverySummary';
import Search from 'components/RobotFace/MessageDisplay/DeliveryDashboard/Search/Search';
import Status from 'components/RobotFace/MessageDisplay/Utilities/Status/Status';
import GoToSearch from 'components/RobotFace/MessageDisplay/GoToSearch/GoToSearch';

/** styles */
import { styles } from './RobotUi.styles';

/** redux */
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

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
  } else if (displayScreen === DisplayScreenOptions.DeliveryMessage) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <DeliveryMessage />
          </Paper>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.DeliverySummary) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <DeliverySummary />
          </Paper>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Search) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <Search />
          </Paper>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.GoToSearch) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <GoToSearch />
          </Paper>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Status) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.messageContainer}>
          <Paper
            elevation={5}
            sx={styles.paper}
          >
            <Status />
          </Paper>
        </Box>
      </Box>
    );
  }

  return <RobotFace />;
}
