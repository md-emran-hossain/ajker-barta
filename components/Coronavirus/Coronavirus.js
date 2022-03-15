import { useRouter } from "next/router";
import Corona from "./Corona";
import { IoIosArrowForward } from "react-icons/io";

const Coronavirus = ({ coronanews }) => {
  const router = useRouter();

  const latestNews = coronanews?.reverse().slice(0, 4);
  return (
    <div data-testid='coronaVirusId' className="container">
      <div
        onClick={() => router.push("/coronavirus")}
        className="my-4 font-semibold text-xl cursor-pointer flex items-center gap-2"
      >
        Covid-19 <span className="text-red-500">Worldwide</span>
        <IoIosArrowForward className='text-red-600 mt-1' />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {latestNews?.map((news) => (
          <Corona key={news._id} news={news}></Corona>
        ))}
      </div>
    </div>
  );
};

export default Coronavirus;
