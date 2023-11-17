import { AppProps } from 'next/app';
import React from 'react';
import { theme } from '../theme';
import { wrapper } from 'store';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import '../styles/globals.css';

/** Internationalization */
import { english, spanish, japanese } from 'lang';

/** Mui Components */
import { Box, CssBaseline, ThemeProvider } from '@mui/material';

/** Components */
import CommonHead from 'components/CommonHead/CommonHead';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ScreenContainer from 'components/ScreenContainer/ScreenContainer';
import Footer from 'components/Footer/Footer';

/** actions */
import { setTheme } from 'state/ui/ui.slice';

/** helpers */

export default function App({ Component, ...rest }: AppProps) {
  const router = useRouter();
  const { store, props } = wrapper.useWrappedStore(rest);
  const stateTheme = store.getState().ui.theme;
  const [primaryColor, setPrimaryColor] = React.useState('');

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
      store.dispatch(setTheme(`linear-gradient(#ffffff, #00558c, #03173e)`));
    }

    // else {
    //   store.dispatch(setTheme(`url(/images/robot-ui-background.jpg)`));
    // }
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
        <ThemeProvider theme={theme(primaryColor)}>
          <CssBaseline />
          <CommonHead />
          <ErrorBoundary>
            <ScreenContainer
              stateTheme={stateTheme}
              setPrimaryColor={setPrimaryColor}
            >
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
            </ScreenContainer>
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  );
}
