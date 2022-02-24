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
import { useState } from 'react';
import { MdOutlineEditNote, MdFacebook } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import NoteBar from '../components/Shared/NoteBar/NoteBar';

const clientSideEmotionCache = createEmotionCache();


function MyApp({ Component, pageProps }) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const emotionCache = clientSideEmotionCache
  const [selectedText, setSelectedText] = useState('')
  const [showTextOption, setShowTextOption] = useState(false)
  const [xValue, setxVlue] = useState(0)
  const [yValue, setyVlue] = useState(0)
  const [isShowNoteBar, setIsShowNoteBar] = useState(false)
  const [isHighLight, setIsHighLight] = useState(false)

  //handle selection
  const handleSelection = (e) => {
    setTimeout(() => {
      const text = window.getSelection().toString().trim();
      if (text.length) {
        setSelectedText(text)
        setShowTextOption(true)
        const x = e.pageX;
        const y = e.pageY;
        setxVlue(x)
        setyVlue(y)
      } else {
        setShowTextOption(false)
      }
    }, 0)
  };
  const addToNote = (e) => {
    e.preventDefault()
    setIsShowNoteBar(true)
    setIsHighLight(!isHighLight)
  }

  //twitter share
  const shareOnTwitter = () => {
    const twitterShareUrl = "https://twitter.com/intent/tweet";
    const text = `${encodeURIComponent(selectedText)}`;
    const currentUrl = encodeURIComponent(window.location.href);
    const hashtags = "HotNews, Recent, Letest";
    const via = "Ajker Barta";
    window.open(`${twitterShareUrl}?text="${text}"&url=${currentUrl}&hashtags=${hashtags}&via=${via}`);
  }

  //facebook share
  const faceBookShare = () => {
    window.open(`https://www.facebook.com/sharer.php?`)
  }

  return (

    <div onMouseUp={handleSelection} >
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
              <NoteBar isShowNoteBar={isShowNoteBar} setIsShowNoteBar={setIsShowNoteBar} selectedText={selectedText} />
            </AuthProvider>
          </ThemeProvider>
        </LocalizationProvider>

      </CacheProvider>
      <div style={{ left: (xValue - 70) + 'px', top: (yValue - 60) + 'px', }} className={showTextOption ? 'afterSelectBtn showOption' : 'afterSelectBtn'}>
        <button onClick={addToNote} ><MdOutlineEditNote /></button>
        <button onClick={shareOnTwitter}><AiOutlineTwitter /></button>
        <button onClick={faceBookShare}><MdFacebook /></button>
      </div>
    </div >
  )
};

export default MyApp;
