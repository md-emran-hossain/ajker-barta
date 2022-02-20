import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from '../../../styles/Bangladesh.module.css'
const Bangladesh = ({ bdnews }) => {
  const latest = bdnews.reverse()
  const col1 = latest[0];
  const col2 = latest[1];
  const col3 = latest.slice(2, 7);
  const router = useRouter()
  return (
    <div className="container h-auto mb-4">
      <div className='flex mb-4 items-center'>
        <h1 onClick={() => router.push('bangladesh')} className=' text-xl cursor-pointer font-medium text-blue-900'>Bangladesh </h1><IoIosArrowForward className='text-red-500' />
      </div>
      <div className={styles.bdRow}>
        {
          bdnews?.slice(1, 8).map(news => <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} className={styles.newsBox} key={news._id}>
            <img className="object-cover rounded-sm w-32 h-24" src={news.images.img1} alt="" />
            <div>
              <h1 className="font-semibold text-black leading-5">{news.heading}</h1>
              <h2 className="hidden text-sm">{news.description[0]?.slice(0, 100)}</h2>
              <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit">{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Bangladesh;
