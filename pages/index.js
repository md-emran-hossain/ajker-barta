import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";
import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import data from "../components/imageGallary/data";
export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <ImageGallary data={data} />
    </div>
  )
}