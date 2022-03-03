import Bangladesh from "../components/Home/Bangladesh/Bangladesh";
import International from "../components/Home/International/International";
import Hero from "../components/Hero";
import Coronavirus from "../components/Coronavirus/Coronavirus";
import Exclusive from "../components/Exclusive";
import ScienceTechnology from "../components/ScienceTechnology";
import Business from "../components/Business";
import Header from "../components/Shared/Header/Header";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";
import Footer from "../components/Shared/Footer/Footer";
import Global from "../components/CovidUpdate/Global";
import CovidBtn from "../components/CovidUpdate/CovidBtn";
import axios from 'axios'
import Sports from "../components/Home/Sports/Sports";
import Entertainment from "../components/Home/Entertainment/Entertainment";
import Opinion from "../components/Home/Opinion/Opinion";
import ImageGallery from "../components/Home/imageGallery/imageGallery";
import { useState } from 'react';

// import LanguageControl from "../components/Shared/LanguageControl/LanguageControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Menu } from '@mui/material';



export default function Home({ newses }) {
  const coronanews = newses.filter((news) => news.category === "coronavirus");
  const bdnews = newses.filter((news) => news.category === "bangladesh");
  const international = newses.filter((news) => news.category === "international");
  const entertainment = newses.filter((news) => news.category === "entertainment");
  const science = newses.filter((news) => news.category === "sciencetechnology");
  const business = newses.filter((news) => news.category === "business");
  const sports = newses.filter((news) => news.category === "sports");
  const opinion = newses.filter(news => news.category === 'opinion')


  //language control function

  const [bengali, setBengaliNews] = useState(false);
  const englishNews = () => setBengaliNews(false);
  const bengaliNews = () => setBengaliNews(true);
  console.log("Bengali and english clickable ", bengali)

  // language control popover
  const [language, setLanguage] = useState(null);
  const handleOpenLanguage = (event) => {
    setLanguage(event.currentTarget);
  };
  const handleCloseLanguage = () => {
    setLanguage(null);
  };


  const languagePopOver = (
    <Box sx={{ flexGrow: 0, marginTop: 2 }}>
      {!bengali && <h5 onClick={handleOpenLanguage} className='text-md cursor-pointer w-48 ml-auto'> <span className='text-gray-500'>Edition:</span> English {!language ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />} </h5>}

      {bengali && <h5 onClick={handleOpenLanguage} className='text-md cursor-pointer w-48 ml-auto'> <span className='text-gray-500'>সংস্করণ :</span> বাংলা  {!language ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />} </h5>}
      <Menu
        sx={{ mt: '45px', width: '500px' }}
        id="menu-appbar"
        anchorEl={language}
        anchorOrigin={{
          vertical: 'top', horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top', horizontal: 'right',
        }}
        open={Boolean(language)}
        onClose={handleCloseLanguage} >
        <div onClick={handleCloseLanguage} className="flex flex-col px-3 py-2 w-48">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div onClick={() => englishNews()} className='hover:bg-gray-100 rounded-md px-2 py-0'>
                <FormControlLabel control={<Radio />} label="English" />
              </div>
              <div onClick={() => bengaliNews()} className='hover:bg-gray-100 rounded-md px-2 py-0'>
                <FormControlLabel control={<Radio />} label="Bengali" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </Menu>
    </Box>
  );


  return (
    <div>
      <Header languagePopOver={languagePopOver} />
      <NavigationBar />
      <Hero newses={newses} />
      <Coronavirus coronanews={coronanews} />
      <Global />
      <CovidBtn />
      <Bangladesh bdnews={bdnews} />
      <International international={international} />
      <ScienceTechnology science={science} />
      <Exclusive newses={newses} />
      <Business business={business} />
      <Entertainment entertainment={entertainment} />
      <ImageGallery />
      <Opinion opinion={opinion} />
      <Sports sports={sports} />
      <Footer newses={newses} />
    </div>
  );

}
export const getStaticProps = async () => {
  const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
  return {
    props: {
      newses: res.data,
    },
    revalidate: 10
  };
};

