import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io'

const Business = ({business}) => {
 
  const router = useRouter()
  const newses = business.reverse()
  return (
    <div className='mb-6'>
      <div className="container">
        <div className='flex items-center'>
          <h1 onClick={() => router.push('/business')} className='ml-2 text-xl cursor-pointer font-medium text-blue-900'>Business </h1><IoIosArrowForward className='text-red-600 mt-1' />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {
            newses?.slice(0, 4).map(news => <div onClick={() => router.push(`/news/${news?._id}`)} key={news._id} className=' p-2 shadow-sm hover:shadow-md cursor-pointer'>
              <img className='w-full h-52 object-cover' src={news?.images?.img1} alt="" />
              <h1 className='text-lg leading-6 my-1 font-semibold hover:text-red-600 transition-colors duration-300 cursor-pointer' >{news?.heading}</h1>
              <p className='text-sm'>{news?.description[0].slice(0, 100)}...</p>
              <p className='text-md italic text-blue-600'>{news.publishedDate}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Business;