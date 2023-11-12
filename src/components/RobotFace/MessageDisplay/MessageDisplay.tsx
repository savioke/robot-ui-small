import React from 'react';
import { useSelector, useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';
import JSConfetti from 'js-confetti';

/** Mui Components */
import { Button, Box } from '@mui/material';

/** Components */
import Actions from './Utilities/Actions/Actions';
import DeliveryDashboard from './DeliveryDashboard/DeliveryDashboard';
import Dashboard from './Dashboard/Dashboard';
import Favorites from './Favorites/Favorites';
import Utilities from './Utilities/Utilities';
import CancelTaskConfirmation from './CancelTaskConfirmation/CancelTaskConfirmation';
import MultipleFavoriteSelect from './MultipleFavoriteSelect/MultipleFavoriteSelect';
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
import { getTaskConfig, getDeliverStatus } from 'state/r2c2/r2c2.selectors';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';
import { setConfirmationMessage, setTransitMessage } from 'state/ui/ui.slice';
import Help from './Utilities/Help/Help';

export default function MessageDisplay() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo(dispatch, intl);
  const displayMessage = useSelector(getDisplayMessage);
  const transitMessage = useSelector(getTransitMessage);
  const confirmationMessage = useSelector(getConfirmationMessage);
  const notificationMessage = useSelector(getNotificationMessage);
  const displayScreen = useSelector(getDisplayScreen);
  const deliverStatus = useSelector(getDeliverStatus);
  const taskConfig = useSelector(getTaskConfig);

  // TODO: Need a hierachy of what screens we want to show. Shows display message and display confirmation but cancelling the task
  // and another initiatives need to task precedence

  React.useEffect(() => {
    if (displayMessage.toLowerCase().includes('birthday')) {
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
  } else if (displayScreen === DisplayScreenOptions.MultipleSelectFavorites) {
    return <MultipleFavoriteSelect />;
  } else if (displayScreen === DisplayScreenOptions.Utilities) {
    return <Utilities />;
  } else if (displayScreen === DisplayScreenOptions.Actions) {
    return <Actions />;
  } else if (displayScreen === DisplayScreenOptions.Help) {
    return <Help />;
  } else if (displayScreen === DisplayScreenOptions.CancelTaskConfirmation) {
    return <CancelTaskConfirmation />;
  } else if (confirmationMessage) {
    // TODO: Fix this button and message to prevent content shifting. Might be able to reduce if IF and combine with displayMessag below
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Box sx={styles.displayConfirmContainer}>
          <Box>
            <Text variant='h2'>{confirmationMessage}</Text>
          </Box>
        </Box>
        <Button
          sx={{
            height: '65px',
            width: '373px',
            backgroundColor: '#0AA15B',
            '&:hover': { backgroundColor: '#0AA15B' },
          }}
          size='large'
          variant='contained'
          onClick={() => {
            dispatch(setConfirmationMessage(''));
            if (deliverStatus === DeliverStatus.LOAD_PACKAGE) {
              socket?.emit('load_package_result', { result: true });
              return dispatch(setTransitMessage(`Delivering to ${taskConfig?.dropoff_location}`));
            }

            socket?.emit('take_package_result', { result: true });
            return dispatch(setTransitMessage('Thank you, have a nice day!'));
          }}
        >
          {intl.formatMessage({ id: 'ok' })}
        </Button>
      </Box>
    );
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
