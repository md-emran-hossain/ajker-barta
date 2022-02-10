import data from "../components/imageGallary/data";
import Bangladesh from "../components/categories/Bangladesh";
import International from "../components/Home/International/International";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import Coronavirus from "../components/Coronavirus/Coronavirus";
import Opinion from "../components/Opinion/Opinion";
import Exclusive from "../components/Exclusive";
import ScienceTechnology from "../components/ScienceTechnology";
import Business from "../components/Business";
import Sports from "../components/Home/Sports/Sports";

export default function Home() {
      return (
            <div>
                  <Hero />
                  <Bangladesh />
                  <Coronavirus />
                  <ImageGallary data={data} />
                  <ScienceTechnology />
                  <Exclusive />
                  <Business />
                  <Opinion />
                  {/* <div style={{ height: '1000px' }}> */}
                  <International></International>
                  {/* </div> */}
                  <Sports />

            </div>
      )
}
