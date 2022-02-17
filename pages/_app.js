import AuthProvider from '../context/AuthProvider'
import '../styles/globals.css'
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


const clientSideEmotionCache = createEmotionCache();



function MyApp({ Component, pageProps }) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const emotionCache = clientSideEmotionCache


  return (

    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>
            AJKER BARTA
          </title>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </ThemeProvider>
        </LocalizationProvider>

      </CacheProvider>
    </>
  )
};

export default MyApp;
