import Hero from "../components/Hero";
import ImageGallary from "../components/imageGallary/imageGallary";
import data from "../components/imageGallary/data";
import Bangladesh from "../components/categories/Bangladesh";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <Bangladesh />
      <ImageGallary data={data} />
      
    </div>
  )
}