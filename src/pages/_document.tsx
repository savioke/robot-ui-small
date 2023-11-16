import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { AppType } from 'next/dist/shared/lib/utils';
import createEmotionServer from '@emotion/server/create-instance';
import { EmotionCache } from '@emotion/cache';
import React from 'react';
import { createEmotionCache, theme } from '../theme';

interface RelayDocumentProps extends DocumentInitialProps {
  emotionStyleTags: React.ReactNode[];
}

export default function RelayRobotDocument({ emotionStyleTags }: RelayDocumentProps) {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='theme-color'
          content={theme('#1272b2').palette.primary.main}
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

RelayRobotDocument.getInitialProps = async (ctx: DocumentContext): Promise<RelayDocumentProps> => {
  const originalRenderPage = ctx.renderPage;

  // // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: AppType | React.ComponentType<{ emotionCache: EmotionCache }>) =>
        function EnhanceApp(props) {
          return (
            <App
              emotionCache={cache}
              {...props}
            />
          );
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
