import International from "../components/Home/International/International";
import Header from "../components/Shared/Header/Header";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import Footer from "../components/Shared/Footer/Footer";
import Exclusive from "../components/Exclusive";
import data from "../components/imageGallary/data";
import Bangladesh from "../components/categories/Bangladesh";

export default function Home() {
      return (
            <div>
                  <Header></Header>
                  <NavigationBar />

                  <Hero />
                  <Bangladesh />
                  <ImageGallary data={data} />
                  <Exclusive />
                  {/* <div style={{ height: '1000px' }}> */}
                  <International></International>
                  {/* </div> */}
                  <Footer></Footer>

            </div>
      )
}