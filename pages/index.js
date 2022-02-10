import data from "../components/imageGallary/data";
import Bangladesh from "../components/categories/Bangladesh";
import International from "../components/Home/International/International";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import Exclusive from "../components/Exclusive";
import Business from "../components/Business";
import ScienceTechnology from "../components/ScienceTechnology";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bangladesh />
      <ImageGallary data={data} />

      <Exclusive />
      <Business />
      <ScienceTechnology />
      {/* <div style={{ height: '1000px' }}> */}
      <International></International>
      {/* </div> */}
    </div>
  );
}
