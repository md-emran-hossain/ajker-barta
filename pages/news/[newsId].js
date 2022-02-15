import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaShare,
  FaRegBookmark,
  FaPrint,
} from "react-icons/fa";
const Newsdetails = () => {
  const [news, setNews] = useState({});
  const [remaining, setRemaining] = useState([]);
  const router = useRouter();
  const newsId = router.query.newsId;
  useEffect(() => {
    fetch("/Bangladesh.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.find((item) => item.id === newsId));
        setRemaining(data.filter((item) => item.id !== newsId));
      });
  }, [newsId]);
  const iconClass = "p-2 flex-initial bg-gray-200 rounded-full cursor-pointer";
  const Actions = () => {
    return (
      <div className="flex items-start gap-3">
        <span className={iconClass}>
          <FaFacebookF />
        </span>
        <span className={iconClass}>
          <FaTwitter />
        </span>
        <span className={iconClass}>
          <FaShare />
        </span>
        <span className={iconClass}>
          <FaRegBookmark />
        </span>
        <span onClick={() => window.print()} className={iconClass}>
          <FaPrint />
        </span>
      </div>
    );
  };
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1">
      <div className="col-span-2 mt-20">
        <h3 className="cursor-pointer underline mb-2 text-2xl text-blue-500 py-3">
          {news?.category}
        </h3>
        <h1 className="text-4xl mb-3 font-semibold">{news?.title}</h1>
        <div className="flex items-end justify-between mb-2">
          <div>
            <p className="font-bold">Ajker barta desk</p>
            <p>Publish Date: {news?.date}</p>
          </div>
          <Actions />
        </div>
        <hr />
        <img src={news?.img} className=" py-3 w-full" alt={news?.title} />

        <p className="py-3 text-lg">{news?.description}</p>

        <div className="border-y border-gray-300 flex items-center justify-between">
          <h2 className="text-xl font-semibold py-3">Comments</h2>
          <Actions />
        </div>
        <div className="flex justify-between items-center border-y border-gray-300">
          <h2 className="text-xl py-3">No Comments yet</h2>

          <div>
          <span>Sort by: </span>
          <select name="Sort by" id="Sort by">
            <option value="">Newest</option>
            <option value="">Oldest</option>
          </select>
          </div>
        </div>
        <div>
          <span>
            
          </span>
        </div>
      </div>
      <div className="col-span-1">
        <p className="mx-10 my-5 py-3 mb-3 underline text-xl">
          You may also read
        </p>

        {remaining.map((item) => {
          return (
            <div key={item.id}>
              <div className="mx-10 my-5 pb-4 border-b border-gray-300">
                <h2 className="text-xl font-semibold">{item?.title}</h2>
                <div className="flex">
                  <p>{item?.description.slice(0, 70)}</p>
                  <img className="w-5/12" src={item.img} alt={item.title} />
                </div>
                <p>{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newsdetails;
