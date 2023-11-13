import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Keyboard from 'components/Keyboard/Keyboard';

/** styles */
import { styles } from './CreateMap.styles';

/** redux */
import { setMappingFormValues } from 'state/mapping/mapping.slice';
import { getMappingFormValues } from 'state/mapping/mapping.selectors';

/** helpers */

export default function CreateMap() {
  const intl = useIntl();
  const dispatch = useDispatch();
  let inputRef = React.useRef<HTMLInputElement>(null);
  const mappingFormValues = useSelector(getMappingFormValues);

  const handleInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(
      setMappingFormValues({
        name: mappingFormValues.config.name + event.currentTarget.value,
      }),
    );
  };

  const handleBackspace = () => {
    dispatch(
      setMappingFormValues({
        name: mappingFormValues.config.name.slice(0, -1),
      }),
    );
  };

  React.useEffect(() => {
    dispatch(setMappingFormValues({ override_existing: false }));
  }, [dispatch]);

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.textFieldContainer}>
          <TextField
            required
            ref={inputRef}
            label={intl.formatMessage({ id: 'mapName' })}
            inputRef={(input) => {
              inputRef = input;
            }}
            value={mappingFormValues.config.name || ''}
          />
        </Box>
      </Box>
      {/* @ts-ignore */}
      <Keyboard
        setValues={handleInput}
        handleBackspace={handleBackspace}
      />
    </Box>
  );
}
