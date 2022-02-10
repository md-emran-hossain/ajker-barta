import data from "../components/imageGallary/data";
import Bangladesh from "../components/categories/Bangladesh";
import International from "../components/Home/International/International";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import Footer from "../components/Shared/Footer/Footer";
import Exclusive from "../components/Exclusive";
import ScienceTechnology from "../components/ScienceTechnology";
import Business from "../components/Business";

export default function Home() {
      return (
            <div>
                  <Hero />
                  <Bangladesh />
                  <ImageGallary data={data} />
                  <ScienceTechnology />
                  <Exclusive />
                  <Business />
                  {/* <div style={{ height: '1000px' }}> */}
                  <International></International>
                  {/* </div> */}

            </div>
      )
}