import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'typeDux';

/** Mui Components */
import { Box, List, ListItem } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './DeliverySummary.styles';

/** redux */
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';

/** helpers */

export default function DeliveryLocationSummary() {
  const router = useRouter();
  const deliverFormValues = useSelector(getDeliverFormValues);

  if (router.asPath === '/#search') {
    return (
      <Box sx={styles.leftSideTextContainer}>
        <Text
          variant='h3'
          id='deliveringTo:'
        />
        {/* Map over all delivery locations selected in the search flow */}
        <List sx={styles.list}>
          <ListItem
            disablePadding
            sx={styles.listItemText}
          >
            Lab A
          </ListItem>
          <ListItem
            disablePadding
            sx={styles.listItemText}
          >
            Lab B
          </ListItem>
          <ListItem
            disablePadding
            sx={styles.listItemText}
          >
            Pharmacy
          </ListItem>
        </List>
        <Box sx={styles.summaryTextContainer}>
          <Box>
            <Text
              variant='h4'
              sx={styles.whatIWillSayText}
              id='whatIWillSayOnDelivery'
            />
            <Box sx={styles.messageTextContainer}>
              <Text sx={styles.messageText}>{deliverFormValues.config.dropoff_message}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.leftSideTextContainer}>
      <Text
        variant='h3'
        sx={styles.deliveryTitle}
        id='roomDeliveryTitleConfirmation'
        values={{
          dropOffLocation: (
            <Box component='strong'>{deliverFormValues.config.dropoff_location}</Box>
          ),
        }}
      />
      <Box sx={styles.summaryTextContainer}>
        <Box>
          <Text
            variant='h4'
            sx={styles.whatIWillSayText}
            id='whatIWillSayOnDelivery'
          />
          <Box sx={styles.messageTextContainer}>
            <Text sx={styles.messageText}>{deliverFormValues.config.dropoff_message}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
