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
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export default function DeliverySummary() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo();
  const deliverFormValues = useSelector(getDeliverFormValues);

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
            onClick={async (event) => {
              event.preventDefault();

              await socket?.emit('queue_tasks', [deliverFormValues]);
              dispatch(setDisplayScreen(DisplayScreenOptions.Home));
            }}
          >
            {intl.formatMessage({ id: 'go' })}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
