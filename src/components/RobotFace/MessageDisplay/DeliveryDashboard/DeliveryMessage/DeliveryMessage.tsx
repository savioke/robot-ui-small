import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from 'components/RobotFace/MessageDisplay/ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/Keyboard/Keyboard';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './DeliveryMessage.styles';

/** redux */
import { setDeliverFormValues } from 'state/deliver/deliver.slice';
import { getDeliverFormValues } from 'state/deliver/deliver.selectors';

/** helpers */

export default function DeliveryMessage() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const deliverFormValues = useSelector(getDeliverFormValues);

  const handleDropoffMessage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const dropoffMessage = deliverFormValues.context.dropoff_message;

    dispatch(setDeliverFormValues({ dropoff_message: dropoffMessage + event.currentTarget.value }));
  };

  const handleBackspace = () => {
    dispatch(
      setDeliverFormValues({
        dropoff_location: deliverFormValues.context.dropoff_message.slice(0, -1),
      }),
    );
  };

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.textFieldContainer}>
          <Text
            variant='h4'
            sx={styles.title}
            id='whatIWillSayOnDelivery'
          />
          <TextField
            multiline
            rows={5}
            placeholder={intl.formatMessage({ id: 'yourOrderHasArrived' })}
            value={deliverFormValues.context.dropoff_message}
            InputProps={{
              disableUnderline: true,
              sx: {
                borderRadius: '20px',
                fontSize: '32px',
              },
            }}
            sx={styles.textfield}
          />
        </Box>
      </Box>
      <Keyboard
        setValues={handleDropoffMessage}
        handleBackspace={handleBackspace}
      />
    </Box>
  );
}
