import Bangladesh from "../components/categories/Bangladesh";
import International from "../components/Home/International/International";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import Coronavirus from "../components/Coronavirus/Coronavirus";
import Opinion from "../components/Opinion/Opinion";
import Exclusive from "../components/Exclusive";
import ScienceTechnology from "../components/ScienceTechnology";
import Business from "../components/Business";

import Header from "../components/Shared/Header/Header";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";
import Footer from "../components/Shared/Footer/Footer";
import OpinionSubItem from "../components/OpinionSubItem/OpinionSubItem";
import SportAndVoting from "../components/SportAndVoting";
import Comment from "../components/Comment/Comment";

export default function Home() {
      return (
            <div>
                  <Header />
                  <NavigationBar />
                  <Hero />
                  <Coronavirus />
                  <Bangladesh />
                  <International />
                  <ImageGallary />
                  <ScienceTechnology />
                  <Exclusive />
                  <Business />
                  <Opinion />
                  <OpinionSubItem></OpinionSubItem>
                  <SportAndVoting />
                  <Comment></Comment>
                  <Footer />
            </div>
      )
}
