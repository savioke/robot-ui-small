import React from 'react';
import { useSelector, useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Button, Box } from '@mui/material';

/** Components */
import Actions from './Utilities/Actions/Actions';
import DeliverForm from './DeliverForm/DeliverForm';
import DeliveryDashboard from './DeliveryDashboard/DeliveryDashboard';
import Dashboard from './Dashboard/Dashboard';
import Favorites from './Favorites/Favorites';
import Utilities from './Utilities/Utilities';
import CancelTask from './CancelTask/CancelTask';
import CancelTaskConfirmation from './CancelTaskConfirmation/CancelTaskConfirmation';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './MessageDisplay.styles';

/** redux */
import {
  getDisplayMessage,
  getDisplayScreen,
  getIsConfirmationNeeded,
} from 'state/ui/ui.selectors';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { DisplayScreenOptions } from 'appConstants';

interface MessageDisplayProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export default function MessageDisplay({ formRef }: MessageDisplayProps) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo(dispatch, intl);
  const displayMessage = useSelector(getDisplayMessage);
  const displayScreen = useSelector(getDisplayScreen);
  const isConfirmationNeeded = useSelector(getIsConfirmationNeeded);

  // TODO: Need a hierachy of what screens we want to show. Shows display message and display confirmation but cancelling the task
  // and another initiatives need to task precedence

  if (displayMessage) {
    return (
      <Box sx={styles.displayMessageContainer}>
        <Text variant='h2'>{displayMessage}</Text>
      </Box>
    );
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
              socket?.emit('ui_event', { name: 'user_confirmed', context: {} });
            }}
          >
            {intl.formatMessage({ id: 'done' })}
          </Button>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Dashboard) {
    return <Dashboard />;
  } else if (displayScreen === DisplayScreenOptions.DeliverForm) {
    return <DeliverForm formRef={formRef} />;
  } else if (displayScreen === DisplayScreenOptions.DeliveryDashboard) {
    return <DeliveryDashboard />;
  } else if (displayScreen === DisplayScreenOptions.Favorites) {
    return <Favorites />;
  } else if (displayScreen === DisplayScreenOptions.Utilities) {
    return <Utilities />;
  } else if (displayScreen === DisplayScreenOptions.Actions) {
    return <Actions />;
  } else if (displayScreen === DisplayScreenOptions.CancelTask) {
    return <CancelTask />;
  } else if (displayScreen === DisplayScreenOptions.CancelTaskConfirmation) {
    return <CancelTaskConfirmation />;
  }

  return (
    <Box sx={styles.displayMessageContainer}>
      <Text variant='h2'>Connecting...</Text>
    </Box>
  );
}
