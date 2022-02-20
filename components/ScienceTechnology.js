import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ScienceTechnology = ({ science }) => {
  const router = useRouter();
  const newses = science.reverse();
  return (
    <div className="my-8">
      <div className="container">
        <div
          onClick={() => router.push("/sciencetechnology")}
          className="flex mb-4 items-center"
        >
          <h1 className="ml-2 text-xl cursor-pointer font-medium text-blue-900">
            Science & Technology{" "}
          </h1>
          <IoIosArrowForward className="text-red-600 mt-1" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-b pb-3">
          {newses?.slice(0, 4).map((news) => (
            <div key={news._id} className="cursor-pointer border-r pr-3 pb-3 last:border-0" onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)}>
              <img
                className="w-full h-52 object-cover"
                src={news?.images?.img1}
                alt=""
              />
              <h1 className="text-lg leading-6 my-1 font-semibold hover:text-red-600 transition-colors duration-300 cursor-pointer">
                {news?.heading}
              </h1>
              <p className="text-sm">{news.description[0].slice(0, 100)}...</p>
              <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500">{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScienceTechnology;
