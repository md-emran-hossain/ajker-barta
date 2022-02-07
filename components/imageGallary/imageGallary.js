import Image from "next/image";
import { FaRegImages } from "react-icons/fa";
const ImageGallary = ({ data }) => {
  return (
    <div className="mx-32">
      <h2 className="text-lg py-y">Photo Gallary</h2>
      {console.log(data)}
      <div className="grid grid-cols-4 gap-3 ">
        <div className="relative w-full col-span-2 row-span-2 img-overlay">
          <div className="absolute z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-2xl" />
          </div>
          <Image
            src={data[0].items[0].img}
            objectFit='fill'
            height={500}
            width={600}
            alt="img"
          ></Image>
          <h1 className="absolute bottom-3 left-3 text-white text-2xl">{data[0].name}</h1>
        </div>
        <div className="relative w-full col-span-2">
        <div className="absolute z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-2xl" />
          </div>
          <Image
            src={data[1].items[0].img}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
           <h1 className="absolute bottom-3 left-3 text-white text-2xl">{data[1].name}</h1>
        </div>
        <div className="relative w-full ">
        <div className="absolute z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-lg" />
          </div>
          <Image
            src={data[2].items[0].img}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
           <h1 className="absolute bottom-3 left-3 text-white text-xl">{data[2].name}</h1>
        </div>
        <div className="relative w-full">
        <div className="absolute z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-lg" />
          </div>
          <Image
            src={data[3].items[0].img}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
           <h1 className="absolute bottom-3 left-3 text-white text-xl">{data[3].name}</h1>
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;
