import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Paper, TextField, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

/** Components */
import Text from 'components/Text/Text';
import Keypad from '../Keypad/Keypad';

/** styles */
import { styles } from './PassCode.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function PassCode() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [passCode, setPassCode] = React.useState('');

  return (
    <Box sx={styles.container}>
      <Box sx={styles.messageContainer}>
        <Paper
          elevation={5}
          sx={styles.paper}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <IconButton
                  sx={{ color: '#000000' }}
                  onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Home))}
                >
                  <ArrowBack fontSize='large' />
                </IconButton>
                <Text
                  sx={{ fontSize: '55px' }}
                  variant='h4'
                  id='enterPasscode'
                />
              </Box>
              <Box sx={{ display: 'flex', flex: 1, alignItems: 'flex-start' }}>
                <TextField
                  fullWidth
                  variant='standard'
                  type='password'
                  value={passCode}
                  inputProps={{ style: { textAlign: 'center' } }}
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    '& .MuiInput-root': { fontSize: '200px' },
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: 0.8 }}>
              <Keypad
                passCode={passCode}
                setPasscode={setPassCode}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );

  // return (
  //   <Box sx={styles.container}>
  //     <Box sx={styles.innerContainer}>
  //       <Box sx={styles.inputContainer}>
  //         <Text sx={{ marginBottom: 4 }} variant="h4">
  //           {intl.formatMessage({ id: "enterYourPasscode" })}
  //         </Text>
  //         <OtpInput
  //           inputType="number"
  //           value={passCode}
  //           onChange={setPassCode}
  //           numInputs={4}
  //           containerStyle={styles.otpContainer}
  //           renderInput={(props, index) => {
  //             // Spread out style object to prevent duplicate style attributes
  //             // eslint-disable-next-line no-unused-vars
  //             const { style, maxLength, ...inputProps } = props;

  //             return (
  //               <input
  //                 maxLength={1}
  //                 style={{
  //                   width: 24,
  //                   height: 24,
  //                   borderRadius: "100%",
  //                   color: "white",
  //                   background: passCode[index] ? "white" : "transparent",
  //                   borderColor: "white",
  //                   borderStyle: "solid",
  //                   textAlign: "center",
  //                 }}
  //                 {...inputProps}
  //               />
  //             );
  //           }}
  //         />
  //       </Box>
  //       <Keypad keypadValues={passCode} setKeypadValues={setPassCode} />
  //     </Box>
  //   </Box>
  // );
}
