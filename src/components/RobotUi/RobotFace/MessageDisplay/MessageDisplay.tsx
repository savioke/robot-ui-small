import React from 'react';
import { useSelector, useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Button, Box } from '@mui/material';

/** Components */
import DeliverForm from './DeliverForm/DeliverForm';
import DeliveryDashboard from './DeliveryDashboard/DeliveryDashboard';
import Dashboard from './Dashboard/Dashboard';
import Favorites from './Favorites/Favorites';
import Text from 'components/Text/Text';

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

  if (displayScreen === DisplayScreenOptions.Dashboard) {
    return <Dashboard />;
  } else if (displayScreen === DisplayScreenOptions.DeliverForm) {
    return <DeliverForm formRef={formRef} />;
  } else if (displayScreen === DisplayScreenOptions.DeliveryDashboard) {
    return <DeliveryDashboard />;
  } else if (displayScreen === DisplayScreenOptions.Favorites) {
    return <Favorites />;
  } else if (isConfirmationNeeded) {
    return (
      <>
        <Text
          sx={styles.centeredText}
          variant='h2'
        >
          {displayMessage}
        </Text>
        <Button
          sx={{ marginTop: 1 }}
          size='large'
          variant='contained'
          onClick={() => {
            socket?.emit('ui_event', { name: 'user_confirmed', context: {} });
          }}
        >
          {intl.formatMessage({ id: 'done' })}
        </Button>
      </>
    );
  } else if (displayMessage) {
    return (
      <Text
        sx={styles.centeredText}
        variant='h2'
      >
        {displayMessage}
      </Text>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text
        sx={styles.centeredText}
        variant='h2'
      >
        Connecting...
      </Text>
    </Box>
  );
}
