import AuthProvider from '../context/AuthProvider'
import '../styles/globals.css'
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useProgressStore from '../store/useProgressStore';
import Progress from '../components/progress/Progress';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  const emotionCache = clientSideEmotionCache
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
  const isAnimating = useProgressStore((state) => state.isAnimating)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router, setIsAnimating])

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
            <Progress isAnimating={isAnimating} />
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </CacheProvider>
    </div >
  )
};

export default MyApp;
