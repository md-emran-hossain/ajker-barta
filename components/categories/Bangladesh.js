import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../../styles/Bangladesh.module.css";
const Bangladesh = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/Bangladesh.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  const col1 = news[0];
  const col2 = news[1];
  const col3 = news.slice(2, 7);

  return (
    <div className="h-auto mb-4">
      <div className="flex items-center justify-start ">
      <h1 className='py-2 text-xl cursor-pointer font-medium text-blue-900'>Bangladesh </h1><IoIosArrowForward className='text-red-600 mt-1' />
      </div>
      <div
        className={`grid gap-3 md:grid-cols-3 sm:grid-cols-1`}
      >
        <div className="flex justify-between auto-cols-fr" key={col2?.id}>
          <div className="mr-1 w-7/12">
            <h1 className="font-bold">{col2?.title}</h1>
            <p>{col2?.date}</p>
          </div>

          <img className="w-5/12 object-fill" src={col2?.img} alt={col2?.title} />
        </div>
        <div className="row-span-3">
          <img className=" object-fill" src={col1?.img} alt={col1?.title} />

          <div className="mr-1 ">
            <h1 className="font-bold">{col1?.title}</h1>
            <p>{col1?.date}</p>
            <p>{col1?.description}</p>
          </div>
        </div>
        {col3.map((item) => {
          return (
            <div className="flex justify-between auto-cols-fr" key={item.id}>
              <div className="mr-1 w-7/12">
                <h1 className="font-bold">{item.title}</h1>
                <p>{item.date}</p>
              </div>

              <img
                className="w-5/12 object-fill"
                src={item.img}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bangladesh;
{
  /* {
                    news.map(item => {
                       
                    }
                    )
                } */
}
