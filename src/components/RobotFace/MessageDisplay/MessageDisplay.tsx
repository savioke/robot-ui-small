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
import CancelTask from './CancelTask/CancelTask';
import CancelTaskConfirmation from './CancelTaskConfirmation/CancelTaskConfirmation';
import MultipleFavoriteSelect from './MultipleFavoriteSelect/MultipleFavoriteSelect';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './MessageDisplay.styles';

/** redux */
import {
  getDisplayMessage,
  getDisplayScreen,
  getIsConfirmationNeeded,
  getDeliverStatus,
} from 'state/ui/ui.selectors';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { DisplayScreenOptions } from 'appConstants';

export default function MessageDisplay() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo(dispatch, intl);
  const displayMessage = useSelector(getDisplayMessage);
  const displayScreen = useSelector(getDisplayScreen);
  const isConfirmationNeeded = useSelector(getIsConfirmationNeeded);
  const deliverStatus = useSelector(getDeliverStatus);

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

  console.log(deliverStatus);

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
  } else if (displayScreen === DisplayScreenOptions.CancelTask) {
    return <CancelTask />;
  } else if (displayScreen === DisplayScreenOptions.CancelTaskConfirmation) {
    return <CancelTaskConfirmation />;
  } else if (isConfirmationNeeded) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
        <Box sx={styles.displayConfirmContainer}>
          <Text
            variant='h2'
            sx={{ marginBottom: 5 }}
          >
            {displayMessage}
          </Text>
          <Button
            sx={{ height: '65px', width: '373px' }}
            size='large'
            variant='contained'
            onClick={() => {
              if (deliverStatus === 'LOAD_PACKAGE') {
                return socket?.emit('load_package_result', { result: true });
              }

              return socket?.emit('take_package_result', { result: true });
            }}
          >
            {intl.formatMessage({ id: 'ok' })}
          </Button>
        </Box>
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
