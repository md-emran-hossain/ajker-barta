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
import Voting from "../components/Voting/Voting";
import useAuth from "../hooks/useAuth";


export default function Home({ englishNews, bengaliNews }) {
  const { toggleLanguage } = useAuth();

  let newses = null;
  if (toggleLanguage) {
    const bangla = bengaliNews
    newses = bangla;
  }
  else {
    const english = englishNews
    newses = english;
  }

  const coronanews = newses?.filter((news) => news.category === "coronavirus");
  const bdnews = newses?.filter((news) => news.category === "bangladesh");
  const international = newses?.filter((news) => news.category === "international");
  const entertainment = newses?.filter((news) => news.category === "entertainment");
  const science = newses?.filter((news) => news.category === "sciencetechnology");
  const business = newses?.filter((news) => news.category === "business");
  const sports = newses?.filter((news) => news.category === "sports");
  const opinion = newses?.filter(news => news.category === 'opinion')

  return (
    <div>
      <Header newses={newses} />
      <NavigationBar />
      <Hero newses={newses} />
      <Voting />
      <Coronavirus coronanews={coronanews} />
      <Global />
      <CovidBtn />
      <Bangladesh bdnews={bdnews} />
      <International international={international} />
      <ScienceTechnology science={science} />
      <Exclusive newses={newses} />
      <Entertainment entertainment={entertainment} />
      <Business business={business} />
      <ImageGallery />
      <Opinion opinion={opinion} />
      <Sports sports={sports} />
      <Footer newses={newses} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
  const bengali = await axios.get(`https://ajker-barta.vercel.app/api/bnnews`);
  return {
    props: {
      englishNews: res.data,
      bengaliNews: bengali.data,
    },
    revalidate: 10
  };
};