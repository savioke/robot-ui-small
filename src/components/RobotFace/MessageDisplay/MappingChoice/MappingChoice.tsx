import React from 'react';
import { useDispatch } from 'typeDux';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
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
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        sx={styles.title}
      >
        Override a map, or create a new one?
      </Text>
      <Box sx={styles.buttonContainer}>
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
