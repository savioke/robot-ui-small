import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Button, Grid } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import DeliveryLocationSummary from './DeliveryLocationSummary/DeliveryLocationSummary';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './DeliverySummary.styles';

/** redux */
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';
import { getSocket } from 'state/socket/socket.selectors';

/** helpers */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { DisplayScreenOptions } from 'appConstants';

export default function DeliverySummary() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSelector(getSocket);
  const deliverFormValues = useSelector(getDeliverFormValues);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    socket?.on('queue_tasks_error', (error) => {
      setErrorMessage(error);
    });
  }, [socket]);

  if (errorMessage) {
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          sx={styles.errorMessageContainer}
        >
          <Text sx={styles.errorMessage}>{errorMessage}</Text>
          <Button
            sx={styles.button}
            variant='contained'
            onClick={(event) => {
              event.preventDefault();
              dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard));
            }}
          >
            {intl.formatMessage({ id: 'backToDashboard' })}
          </Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid
        item
        xs={8}
        sx={styles.gridItem}
      >
        <Box sx={styles.leftSideContent}>
          <ArrowBackTopBar />
          <DeliveryLocationSummary />
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
      >
        <Box sx={styles.rightSideContent}>
          <Box sx={styles.confirmTextContainer}>
            <Text
              variant='h4'
              id='everythingIsLoaded'
            />
            <Text
              variant='h4'
              id='illBeOnMyWay'
            />
          </Box>
          <Button
            sx={styles.button}
            variant='contained'
            onClick={(event) => {
              event.preventDefault();
              socket?.emit('queue_tasks', [deliverFormValues]);
            }}
          >
            {intl.formatMessage({ id: 'go' })}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
