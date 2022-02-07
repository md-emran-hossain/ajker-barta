import ImageGallary from "../components/imageGallary/imageGallary";
import data from "../components/imageGallary/data";
export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-yellow-500">
        {" "}
        Hello Team mates, Start work from here{" "}
      </h1>
      <ImageGallary data={data} />
    </div>
  );
}
