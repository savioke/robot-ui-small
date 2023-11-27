import Head from 'next/head';
import React from 'react';
import { useIntl } from 'react-intl';

/** Mui Components */

/** Components */

/** styles */

/** redux */

/** helpers */

export default function CommonHead() {
  const intl = useIntl();

  return (
    <Head>
      <title>{intl.formatMessage({ id: 'relayRobotics' })}</title>
      <meta
        name='description'
        content={intl.formatMessage({ id: 'relayRobotics' })}
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
      />
      <meta
        name='robots'
        content='noindex'
      />
      <link
        rel='icon'
        href='/images/favicon.ico'
      />
    </Head>
  );
}
