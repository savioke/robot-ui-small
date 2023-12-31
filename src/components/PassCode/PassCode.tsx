import React from 'react';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, TextField } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../RobotFace/MessageDisplay/ArrowBackTopBar/ArrowBackTopBar';
import Keypad from 'components/Keypad/Keypad';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './PassCode.styles';

/** redux */
import { setAuthorized, setPasscode } from 'state/ui/ui.slice';
import { getPasscode, getAuthorized, getNotificationMessage } from 'state/ui/ui.selectors';

/** helpers */

export default function PassCode() {
  const dispatch = useDispatch();
  const passCode = useSelector(getPasscode);
  const authorized = useSelector(getAuthorized);
  const notificationMessage = useSelector(getNotificationMessage);

  React.useEffect(() => {
    if (!passCode) {
      dispatch(
        setAuthorized({
          method: '',
          state: null,
        }),
      );
    }
  }, [dispatch, passCode]);

  const handleSetPassCode = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (passCode.length === 12) {
      return passCode;
    }

    dispatch(setPasscode(passCode + event.currentTarget.value));
  };

  const handleBackspace = () => {
    dispatch(setPasscode(passCode.slice(0, -1)));
  };

  const handleClear = () => {
    dispatch(setPasscode(''));
  };

  const getHelperText = (authorized: { method: 'badge' | 'pin' | ''; state: boolean | null }) => {
    if (authorized.method === 'badge' && authorized.state === false) {
      return 'Unauthorized badge';
    } else if (authorized.method === 'pin' && authorized.state === false) {
      return 'Unauthorized PIN';
    }

    return <Box sx={styles.emptyHelperText}></Box>;
  };

  return (
    <Box sx={styles.innerPaper}>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.contentContainer}>
          {notificationMessage ? (
            <Text
              variant='h2'
              component='h1'
              sx={{ fontWeight: 400 }}
            >
              {notificationMessage}
            </Text>
          ) : (
            <Text
              variant='h2'
              component='h1'
              id='couldYouEnterThePasscode?'
              sx={{ fontWeight: 400 }}
            />
          )}
          <Box sx={styles.textFieldContainer}>
            <TextField
              fullWidth
              error={authorized.state === false}
              FormHelperTextProps={{
                sx: {
                  fontSize: '24px',
                },
              }}
              helperText={getHelperText(authorized)}
              variant='standard'
              type='password'
              value={passCode}
              inputProps={{
                style: {
                  textAlign: 'center',
                },
              }}
              sx={styles.textfield}
            />
          </Box>
        </Box>
      </Box>
      <Keypad
        handleSetValues={handleSetPassCode}
        setValues={handleBackspace}
        handleClear={handleClear}
      />
    </Box>
  );
}
