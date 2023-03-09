import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { NextPage } from 'next';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/utils/emotionCache';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../utils/theme';
import { StylesProvider } from '@mui/styles';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

const clientSideEmotionCache = createEmotionCache();

type Props = AppProps & {
  Component: Page;
  emotionCache: any;
};

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return getLayout(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>,
  );
};
export default App;
