import React from 'react';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './CancelTaskMessage.styles';

/** redux */
import { getDeliverStatus } from 'state/r2c2/r2c2.selectors';
import { DeliverStatus, DisplayScreenOptions } from 'appConstants';
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export default function CancelTaskMessage() {
  const dispatch = useDispatch();
  const deliverStatus = useSelector(getDeliverStatus);
  const socket = useSocketIo();

  if (deliverStatus >= DeliverStatus.GO_TO_DROPOFF && deliverStatus <= DeliverStatus.TAKE_PACKAGE) {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.textContainer}>
          <Text
            variant='h3'
            component='h1'
          >
            There is currently a package in the robot.
          </Text>
          <Text
            variant='h3'
            component='h1'
          >
            Return the package to the pickup location?
          </Text>
        </Box>
        <Box sx={styles.buttonContainer}>
          <Button
            variant='contained'
            sx={styles.button}
            // TODO: Finalize behavior for sending robot back to pickuplocation
            // onClick={() => {}}
          >
            Return to pickup
          </Button>
          <Button
            variant='contained'
            sx={styles.button}
            // TODO: Finalize behavior for retrieving package. Cancel Task after opening lid?
            onClick={() => {
              socket?.emit('open_lid');
            }}
          >
            Retrieve package
          </Button>
          <Button
            variant='contained'
            sx={[styles.button, styles.greenBackground]}
            // TODO: Finalize behavior for continueing delivery
            onClick={() => {
              dispatch(setDisplayScreen(DisplayScreenOptions.Home));
            }}
          >
            Continue Delivery
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
        >
          Are you sure you want to cancel the task?
        </Text>
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button
          variant='contained'
          color='error'
          sx={styles.button}
          // TODO: Socket emit to cancel the current task
          onClick={() => setDisplayScreen(DisplayScreenOptions.Home)}
        >
          Cancel Task
        </Button>
        <Button
          variant='contained'
          sx={[styles.button, styles.greenBackground]}
          // TODO: Socket emit to resume task?
          onClick={() => setDisplayScreen(DisplayScreenOptions.Home)}
        >
          Continue Task
        </Button>
      </Box>
    </Box>
  );
}
