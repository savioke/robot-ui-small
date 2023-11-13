import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './MappingChoice.styles';

/** redux */

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export default function MappingChoice() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.displayConfirmContainer}>
        <Box>
          <Text variant='h4'>Would you like to override a map, or create a new one?</Text>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, width: '100%' }}>
        <Button
          sx={styles.button}
          size='large'
          variant='contained'
          onClick={() => {
            // socket?.emit('take_package_result', { result: true });
            // return dispatch(setTransitMessage('Thank you, have a nice day!'));
          }}
        >
          Override Map
          {/* {intl.formatMessage({ id: 'stopMapping' })} */}
        </Button>
        <Button
          sx={styles.button}
          size='large'
          variant='contained'
          onClick={() => {
            // socket?.emit('take_package_result', { result: true });
            // return dispatch(setTransitMessage('Thank you, have a nice day!'));
          }}
        >
          Create map
          {/* {intl.formatMessage({ id: 'stopMapping' })} */}
        </Button>
      </Box>
    </Box>
  );
}
