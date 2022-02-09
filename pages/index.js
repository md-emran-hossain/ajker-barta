import International from "../components/Home/International/International";
import Header from "../components/Shared/Header/Header";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import data from "../components/imageGallary/data";
import Footer from "../components/Shared/Footer/Footer";
import Exclusive from "../components/Exclusive";
import Business from "../components/Business";
import ScienceTechnology from "../components/ScienceTechnology";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <NavigationBar />
      <Hero />
      <ImageGallary data={data} />
      <Exclusive />
      <Business />
      <ScienceTechnology />
      {/* <div style={{ height: '1000px' }}> */}
      <International></International>
      {/* </div> */}
      <Footer></Footer>
    </div>
  )
}