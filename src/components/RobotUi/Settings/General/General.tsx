import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'typeDux';
import { useRouter } from 'next/router';

/** Mui Components */
import { Box, TextField, MenuItem } from '@mui/material';

/** Components */

/** styles */
import { styles } from './General.styles';

/** redux */
import { getTheme } from 'state/ui/ui.selectors';
import { setTheme } from 'state/ui/ui.slice';

/** helpers */
import { Themes, Language } from 'appConstants';

export default function General() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useSelector(getTheme);
  const [language, setLanguage] = React.useState<string | null>('en');

  React.useEffect(() => {
    const languagePreference = localStorage.getItem('languagePreference');

    if (languagePreference) {
      setLanguage(languagePreference);
    }
  }, []);

  return (
    <Box sx={styles.form}>
      <TextField
        select
        fullWidth
        variant='standard'
        margin='normal'
        label={intl.formatMessage({ id: 'language' })}
        value={language}
        onChange={(event) => {
          setLanguage(event.target.value);
          localStorage.setItem('languagePreference', event.target.value);
          router.push(router.pathname, router.pathname, { locale: event.target.value });
        }}
      >
        {Object.entries(Language).map(([key, value]) => {
          return (
            <MenuItem
              key={key}
              value={value}
            >
              {key}
            </MenuItem>
          );
        })}
      </TextField>
      <TextField
        select
        fullWidth
        variant='standard'
        label={intl.formatMessage({ id: 'theme' })}
        margin='normal'
        value={theme}
        onChange={(event) => {
          dispatch(setTheme(event.target.value));
          localStorage.setItem('theme', event.target.value);
          router.push(router.pathname);
        }}
      >
        {Object.entries(Themes).map(([key, value]) => {
          return (
            <MenuItem
              key={key}
              value={value}
            >
              {key}
            </MenuItem>
          );
        })}
      </TextField>
    </Box>
  );
}
