import React from 'react';
import { useSelector } from 'typeDux';
import JSConfetti from 'js-confetti';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */
import Actions from './Utilities/Actions/Actions';
import ConfirmationMessage from './ConfirmationMessage/ConfirmationMessage';
import DeliveryDashboard from './DeliveryDashboard/DeliveryDashboard';
import Dashboard from './Dashboard/Dashboard';
import Favorites from './Favorites/Favorites';
import Utilities from './Utilities/Utilities';
import CancelTaskConfirmation from './CancelTaskConfirmation/CancelTaskConfirmation';
import Help from './Utilities/Help/Help';
import MappingChoice from './MappingChoice/MappingChoice';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './MessageDisplay.styles';

/** redux */
import {
  getDisplayMessage,
  getDisplayScreen,
  getTransitMessage,
  getConfirmationMessage,
  getNotificationMessage,
} from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function MessageDisplay() {
  const displayMessage = useSelector(getDisplayMessage);
  const transitMessage = useSelector(getTransitMessage);
  const confirmationMessage = useSelector(getConfirmationMessage);
  const notificationMessage = useSelector(getNotificationMessage);
  const displayScreen = useSelector(getDisplayScreen);

  React.useEffect(() => {
    if (displayMessage.toLowerCase()?.includes('birthday')) {
      const jsConfetti = new JSConfetti();
      const addConfetti = () => {
        jsConfetti.addConfetti();
      };

      const confettiInterval = setInterval(addConfetti, 1500);

      return () => {
        clearInterval(confettiInterval);
      };
    }
  }, [displayMessage]);

  if (displayScreen === DisplayScreenOptions.Dashboard) {
    return <Dashboard />;
  } else if (displayScreen === DisplayScreenOptions.DeliveryDashboard) {
    return <DeliveryDashboard />;
  } else if (displayScreen === DisplayScreenOptions.Favorites) {
    return <Favorites />;
  } else if (displayScreen === DisplayScreenOptions.Utilities) {
    return <Utilities />;
  } else if (displayScreen === DisplayScreenOptions.Actions) {
    return <Actions />;
  } else if (displayScreen === DisplayScreenOptions.Help) {
    return <Help />;
  } else if (displayScreen === DisplayScreenOptions.CancelTaskConfirmation) {
    return <CancelTaskConfirmation />;
  } else if (displayScreen === DisplayScreenOptions.MappingChoice) {
    return <MappingChoice />;
  } else if (confirmationMessage) {
    return <ConfirmationMessage />;
  } else if (notificationMessage) {
    return (
      <Box sx={styles.displayMessageContainer}>
        <Text variant='h2'>{notificationMessage}</Text>
      </Box>
    );
  } else if (transitMessage) {
    return (
      <Box sx={styles.displayMessageContainer}>
        <Text variant='h2'>{transitMessage}</Text>
      </Box>
    );
  } else if (displayMessage) {
    return (
      <Box sx={styles.displayMessageContainer}>
        <Text variant='h2'>{displayMessage}</Text>
      </Box>
    );
  }

  return (
    <Box sx={styles.displayMessageContainer}>
      <Text variant='h2'>Connecting...</Text>
    </Box>
  );
}
