import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import styles from '../styles/exclusive.module.css'
const Exclusive = ({newses}) => {
  const latest = newses.reverse()
  const router = useRouter()
  let count = 1
  return (
    <div className='pb-12'>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            <button className='py-1 slim-border rounded-sm mb-3 px-4 bg-white border-blue-400 mr-2'>Letest</button>
            <button className='py-1 slim-border rounded-sm mb-3 px-4 bg-white border-blue-400 mr-2'>Trending</button>
            <div className='grid sm:grid-cols-2 gap-3'>
              {
                latest?.slice(0, 8).map(news => <div onClick={() => router.push(`/news/${news._id}`)} className=' relative p-6 shadow-md rounded-r-lg border-r-4 border-red-600 cursor-pointer' key={news._id}>
                  <h1 className='z-10 leading-7 text-lg font-medium text-gray-800 hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news?.heading}</h1>
                  <p style={{ transform: "translate(-50%, -50%)", }} className='absolute top-1/2 left-3/4 text-8xl -z-10 font-bold text-blue-100'>{count++}</p>
                </div>)
              }
            </div>
          </div>
          <div>
            <h1 className={styles.exclusive}>Exclusive</h1>
            <div className='grid sm:grid-cols-2 gap-3'>
              {
                latest?.slice(8, 12).map(news => <div className='cursor-pointer' onClick={() => router.push(`/news/${news._id}`)} key={news?._id}>
                  <img className='w-full h-32 object-cover' src={news?.images.img1} alt="" />
                  <h1 className='text-lg my-1 font-medium leading-5 hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news?.heading}</h1>
                  <p className='text-sm leading-4'>{news?.description[0]?.slice(0, 100)}</p>
                  <p className=' text-blue-600 mt-1'>{`${formatDistanceToNow(new Date(news.publishedDate))} ago` }</p>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;