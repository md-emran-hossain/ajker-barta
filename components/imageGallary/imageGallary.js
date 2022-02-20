import Image from "next/image";
import { FaRegImages } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../../styles/Hero.module.css";
import data from './data'
const ImageGallary = () => {
  return (
    <div className="container overflow-hidden mb-24">
      <div className='flex mb-3 mt-5 items-center'>
        <h1 className='text-xl cursor-pointer font-medium text-gray-700'>Image Gallery </h1><IoIosArrowForward className='text-red-600 mt-2' />
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-1 md:gap-3 sm:gap-2">
        <div className="md:relative  sm:static w-full sm:h-60 md:col-span-2 sm:col-span-1 md:row-span-2 sm:row-span-1 h-full">
          <div className="absolute z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-2xl" />
          </div>
          <Image
            src={data[0].items[0].img}
            objectFit="fill"
            alt="img"
            height={720}
            width={700}
          ></Image>
          <h1 className="absolute  md:-bottom-60  left-3  text-white text-2xl">
            {data[0].name}
          </h1>
        </div>

        <div className="relative w-full md:col-span-2 sm:col-span-1 h-60">
          <div className="md:absolute sm:static z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-2xl" />
          </div>
          <Image
            src={data[1].items[0].img}
            alt="img"
            layout="fill"
            objectFit="cover"
          />

          <h1 className="md:absolute z-10 sm:static bottom-3 left-3 text-white text-2xl">
            {data[1].name}
          </h1>
          <div className={styles.overlay}></div>
        </div>
        <div className="relative w-full h-60">
          <div className="absolute z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-lg" />
          </div>
          <Image
            src={data[2].items[0].img}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
          <h1 className="md:absolute z-10 sm:static bottom-3 left-3 text-white text-xl">
            {data[2].name}
          </h1>
          <div className={styles.overlay}></div>
        </div>
        <div className="relative w-full h-60">
          <div className="absolute z-30 bg-slate-200 rounded-full m-2 p-2">
            <FaRegImages className="text-lg" />
          </div>
          <Image
            src={data[3].items[0].img}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
          <h1 className="md:absolute z-30 sm:static bottom-3 left-3 text-white text-xl">
            {data[3].name}
          </h1>
          <div className={styles.overlay}></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;
