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


const Home = ({ newses, polls, bengaliNews }) => {
  const { toggleLanguage } = useAuth();


  if (toggleLanguage === true) {
    const coronanews = bengaliNews.filter((news) => news.category === "coronavirus");
    const bdnews = bengaliNews.filter((news) => news.category === "bangladesh");
    const international = bengaliNews.filter((news) => news.category === "international");
    const entertainment = bengaliNews.filter((news) => news.category === "entertainment");
    const science = bengaliNews.filter((news) => news.category === "sciencetechnology");
    const business = bengaliNews.filter((news) => news.category === "business");
    const sports = bengaliNews.filter((news) => news.category === "sports");
    const opinion = bengaliNews.filter(news => news.category === 'opinion')
    return (
      <div>
        <Header newses={newses} />
        <NavigationBar />
        <Hero bengaliNews={bengaliNews} />
        <Voting polls={polls} />
        <Coronavirus coronanews={coronanews} />
        <Global />
        <CovidBtn />
        <Bangladesh bdnews={bdnews} />
        <International international={international} />
        <ScienceTechnology science={science} />
        <Exclusive bengaliNews={bengaliNews} />
        <Business business={business} />
        <Entertainment entertainment={entertainment} />
        <ImageGallery />
        <Opinion opinion={opinion} />
        <Sports sports={sports} />
        <Footer bengaliNews={bengaliNews} />
      </div>
    );
  }
  else {
    const coronanews = newses.filter((news) => news.category === "coronavirus");
    const bdnews = newses.filter((news) => news.category === "bangladesh");
    const international = newses.filter((news) => news.category === "international");
    const entertainment = newses.filter((news) => news.category === "entertainment");
    const science = newses.filter((news) => news.category === "sciencetechnology");
    const business = newses.filter((news) => news.category === "business");
    const sports = newses.filter((news) => news.category === "sports");
    const opinion = newses.filter(news => news.category === 'opinion')
    return (
      <div>
        <Header newses={newses} />
        <NavigationBar />
        <Hero newses={newses} />
        <Voting polls={polls} />
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
}
export default Home;

export const getStaticProps = async () => {
  const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
  const pollRes = await axios.get(`http://localhost:3000/api/poll`);
  const bengali = await axios.get(`http://localhost:3000/api/bnnews`);
  return {
    props: {
      newses: res.data,
      polls: pollRes.data,
      bengaliNews: bengali.data,
    },
    revalidate: 10
  };
};

