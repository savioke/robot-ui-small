import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Mapping.styles';

/** redux */

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export default function Mapping() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.displayConfirmContainer}>
        <Box>
          <Text variant='h2'>Mapping in progress</Text>
        </Box>
      </Box>
      <Button
        sx={styles.button}
        size='large'
        variant='contained'
        onClick={() => {
          socket?.emit('take_package_result', { result: true });
          // return dispatch(setTransitMessage('Thank you, have a nice day!'));
        }}
      >
        {intl.formatMessage({ id: 'stopMapping' })}
      </Button>
    </Box>
  );
}
