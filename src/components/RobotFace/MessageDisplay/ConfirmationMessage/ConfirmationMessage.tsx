import React from 'react';
import { useSelector, useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './ConfirmationMessage.styles';

/** redux */
import { getConfirmationMessage } from 'state/ui/ui.selectors';
import { setTransitMessage, setConfirmationMessage, setDisplayScreen } from 'state/ui/ui.slice';
import { getDeliverStatus } from 'state/r2c2/r2c2.selectors';
import { getSocket } from 'state/socket/socket.selectors';

/** helpers */
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';

export default function ConfirmationMessage() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSelector(getSocket);
  const deliverStatus = useSelector(getDeliverStatus);
  const confirmationMessage = useSelector(getConfirmationMessage);

  if (confirmationMessage === 'Mapping in progress') {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.displayConfirmContainer}>
          <Box>
            <Text variant='h1'>{confirmationMessage}</Text>
          </Box>
        </Box>
        <Button
          sx={styles.button}
          size='large'
          variant='contained'
          onClick={() => {
            socket?.emit('mapping_done');
            dispatch(setConfirmationMessage(''));
            return dispatch(setDisplayScreen(DisplayScreenOptions.Home));
          }}
        >
          {intl.formatMessage({ id: 'stopMapping' })}
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.displayConfirmContainer}>
        <Box>
          <Text variant='h1'>{confirmationMessage}</Text>
        </Box>
      </Box>
      <Button
        sx={styles.button}
        size='large'
        variant='contained'
        onClick={() => {
          dispatch(setConfirmationMessage(''));
          if (deliverStatus === DeliverStatus.LOAD_PACKAGE) {
            return socket?.emit('load_package_result', { result: true });
          }

          socket?.emit('take_package_result', { result: true });
          return dispatch(setTransitMessage('Thank you, have a nice day!'));
        }}
      >
        {intl.formatMessage({ id: 'ok' })}
      </Button>
    </Box>
  );
}
