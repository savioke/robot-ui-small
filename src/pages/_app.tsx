import { AppProps } from 'next/app';
import React from 'react';
import { theme } from '../theme';
import { wrapper } from 'store';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import JSConfetti from 'js-confetti';

/** Internationalization */
import { english, spanish, japanese } from 'lang';

/** Mui Components */
import { Box, CssBaseline, ThemeProvider } from '@mui/material';

/** Components */
import Footer from 'components/Footer/Footer';
import TopBar from 'components/TopBar/TopBar';

/** actions */
import { setTheme, setIsScreenTouched } from 'state/ui/ui.slice';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export default function App({ Component, ...rest }: AppProps) {
  const router = useRouter();
  const { store, props } = wrapper.useWrappedStore(rest);
  const stateTheme = store.getState().ui.theme;
  useSocketIo();

  // React.useEffect(() => {
  //   // Create a new instance of JSConfetti
  //   const jsConfetti = new JSConfetti();

  //   // Function to add confetti
  //   const addConfetti = () => {
  //     jsConfetti.addConfetti();
  //   };

  //   // Call the addConfetti function every 2 seconds
  //   const confettiInterval = setInterval(addConfetti, 1500);

  //   // Clean up the interval when the component is unmounted
  //   return () => {
  //     clearInterval(confettiInterval);
  //   };
  // }, []); // Empty dependency array ensures that this effect runs once after initial render

  React.useEffect(() => {
    const languagePreference = localStorage.getItem('languagePreference');

    if (languagePreference) {
      router.push(router.pathname, router.pathname, { locale: languagePreference });
    }

    // Having "router" as a depency causes infinite renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname, store]);

  React.useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) {
      store.dispatch(setTheme(theme));
    } else {
      store.dispatch(setTheme(`url(/images/robot-ui-background.jpg)`));
    }
  }, [store]);

  const messages = React.useMemo(() => {
    switch (router.locale) {
      case 'en':
        return english;
      case 'ja':
        return japanese;
      case 'es':
        return spanish;
      default:
        return english;
    }
  }, [router.locale]);

  return (
    <IntlProvider
      messages={messages}
      locale={router?.locale || ''}
      defaultLocale={router.defaultLocale}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <ErrorBoundary> */}
          <Box
            sx={{
              display: 'flex',
              minHeight: '100vh',
              flexDirection: 'column',
              backgroundImage: `${stateTheme}`,
              backgroundSize: 'cover',
              paddingRight: 2,
              paddingLeft: 1,
            }}
            onClick={() => store.dispatch(setIsScreenTouched(true))}
          >
            <TopBar />
            <Box
              component='main'
              sx={{
                display: 'flex',
                flexGrow: 1,
              }}
            >
              <Component {...props.pageProps} />
            </Box>
            <Footer />
          </Box>
          {/* </ErrorBoundary> */}
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  );
}
