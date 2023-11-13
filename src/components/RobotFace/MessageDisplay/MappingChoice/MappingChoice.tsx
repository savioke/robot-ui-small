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
import { setDisplayScreen } from 'state/ui/ui.slice';
import { DisplayScreenOptions } from 'appConstants';

export default function MappingChoice() {
  const intl = useIntl();
  const dispatch = useDispatch();

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
            dispatch(setDisplayScreen(DisplayScreenOptions.OverrideMap));
          }}
        >
          {intl.formatMessage({ id: 'overrideMap' })}
        </Button>
        <Button
          sx={styles.button}
          size='large'
          variant='contained'
          onClick={() => {
            dispatch(setDisplayScreen(DisplayScreenOptions.CreateMap));
          }}
        >
          {intl.formatMessage({ id: 'createMap' })}
        </Button>
      </Box>
    </Box>
  );
}
