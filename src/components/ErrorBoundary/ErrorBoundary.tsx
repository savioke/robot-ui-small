import React, { Component, ErrorInfo, ReactNode } from 'react';
import Image from 'next/image';

/** Mui Components */
import { Box, Paper, Button } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './ErrorBoundary.styles';

/** redux */

/** helpers */

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box sx={styles.container}>
          <Box sx={styles.messageContainer}>
            <Paper
              elevation={5}
              sx={styles.paper}
            >
              <Box sx={styles.upperContentContainer}>
                <Text
                  component='h1'
                  variant='h2'
                  id='oopsSomethingWentWrong'
                />
                <Box sx={styles.textContainer}>
                  <Box>
                    <Text
                      variant='h4'
                      id='pleaseTryRefreshingThePage'
                    />
                    <Text
                      variant='h4'
                      id='ifTheProblemPersists'
                    />
                  </Box>
                  <Button
                    variant='contained'
                    sx={styles.button}
                    onClick={() => window.location.reload()}
                  >
                    Refresh
                  </Button>
                </Box>
              </Box>
              <Box>
                <Text
                  component='b'
                  variant='h4'
                  id='email'
                />
                <Text variant='h4'>support@relayrobotics.com</Text>
              </Box>
              <Box>
                <Text
                  component='b'
                  variant='h4'
                  id='phone'
                />
                <Text variant='h4'>1-408-809-5600, Dial 1</Text>
              </Box>
            </Paper>
          </Box>
          <Box sx={styles.eyesContainer}>
            {/* TODO: Update eye files to match the correct eye. */}
            <Image
              priority
              src='images/eye_right_v3.svg'
              height={158}
              width={112}
              alt='Left eye'
            />
            <Image
              priority
              src='/images/eye_left_v3.svg'
              height={158}
              width={112}
              alt='Right eye'
            />
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
