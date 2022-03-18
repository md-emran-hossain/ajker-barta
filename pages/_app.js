import AuthProvider from '../context/AuthProvider'
import '../styles/globals.css'
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  const emotionCache = clientSideEmotionCache

  return (
    <div >
      <CacheProvider value={emotionCache}>
        <Head>
          <title> AJKER BARTA</title>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </CacheProvider>
    </div >
  )
};

export default MyApp;
