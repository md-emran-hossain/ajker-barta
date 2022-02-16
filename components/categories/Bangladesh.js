import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const Bangladesh = ({bdnews}) => {

  const col1 = bdnews[0];
  const col2 = bdnews[1];
  const col3 = bdnews.slice(2, 7);
  const router = useRouter()
  return (
    <div className="container h-auto mb-4">
      <div className='flex mb-4 items-center'>
          <h1 onClick={() => router.push('/bangladesh')} className=' text-xl cursor-pointer font-medium text-blue-900'>Bangladesh </h1><IoIosArrowForward className='text-red-600 mt-2' />
        </div>
      <div
        className={`grid gap-3 md:grid-cols-3 sm:grid-cols-1`}
      >
        <div className="flex justify-between auto-cols-fr" key={col2?._id}>
          <div className="mr-1 w-7/12 cursor-pointer">
            <Link href={`/news/${col2?._id}`}>
              <div>
                <h1 className="font-bold">{col2?.heading}</h1>
                <p>{col2?.publishedDate}</p>
              </div>
            </Link>
          </div>
          <Link href={`/news/:${col2?._id}`}>
            <img
              className="w-5/12 object-fill cursor-pointer"
              src={col2?.images.img1}
              alt={col2?.heading}
            />
          </Link>
        </div>
        <div className="row-span-3 cursor-pointer">
          <Link href={`/news/${col1?._id}`}>
            <div>
              <img className=" object-fill" src={col1?.images?.img1} alt={col1?.heading} />

              <div className="mr-1 ">
                <h1 className="font-bold">{col1?.heading}</h1>
                <p>{col1?.publishedDate}</p>
                <p>{col1?.description[0].slice(0,100)}</p>
              </div>
            </div>
          </Link>
        </div>
        {col3.map((item) => {
          return (
            <div className="flex justify-between auto-cols-fr" key={item._id}>

              <div onClick={() => router.push(`/news/${item._id}`)} className="mr-1 w-7/12 cursor-pointer">
                <h1 className="font-bold">{item?.heading}</h1>
                <p>{item?.publishedDate}</p>
              </div>

              <img
                className="w-5/12 object-fill cursor-pointer"
                src={item?.images?.img1}
                alt={item.title}
                onClick={() => router.push(`/news/${item._id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bangladesh;
