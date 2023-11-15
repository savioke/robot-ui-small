import React from 'react';
import { useSelector } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';
import Button from 'sharedComponents/Button/Button';

/** styles */
import { styles } from './CancelTaskMessage.styles';

/** redux */
import { getDeliverStatus } from 'state/r2c2/r2c2.selectors';
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export default function CancelTaskMessage() {
  const intl = useIntl();
  const socket = useSocketIo();
  const deliverStatus = useSelector(getDeliverStatus);

  if (deliverStatus >= DeliverStatus.GO_TO_DROPOFF && deliverStatus <= DeliverStatus.TAKE_PACKAGE) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.textContainer}>
          <Text
            variant='h3'
            component='h1'
            id='thereIsAPackageInRobot'
          />
        </Box>
        <Box sx={styles.buttonContainer}>
          <Button
            variant='contained'
            onClick={() => {
              socket?.emit('deliver_interrupt_result', { result: 'take_package' });
            }}
          >
            {intl.formatMessage({ id: 'retrievePackage' })}
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              socket?.emit('deliver_interrupt_result', { result: 'resume' });
            }}
          >
            {intl.formatMessage({ id: 'continueDelivery' })}
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.textContainer}>
        <Text
          variant='h3'
          component='h1'
          id='areYouSureYouWantToCancelTask"'
        />
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button
          variant='contained'
          color='error'
          onClick={() => {
            socket?.emit('deliver_interrupt_result', { result: 'cancel_task' });
            return setDisplayScreen(DisplayScreenOptions.Home);
          }}
        >
          {intl.formatMessage({ id: 'cancelTask' })}
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            socket?.emit('deliver_interrupt_result', { result: 'resume' });
          }}
        >
          {intl.formatMessage({ id: 'continueDelivery' })}
        </Button>
      </Box>
    </Box>
  );
}
