import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import data from "../components/imageGallary/data";
import Footer from "../components/Shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <ImageGallary data={data} />
      
    </div>
  )
}