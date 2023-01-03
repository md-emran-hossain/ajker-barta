import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import styles from '../styles/exclusive.module.css'
const Exclusive = ({ newses, bengaliNews }) => {
  let optionNews = newses || bengaliNews;
  const latest = optionNews?.reverse();
  const router = useRouter();
  const [isLatest, setIsLatest] = useState(true);
  const [latestNews, setLatestNews] = useState([]);
  let count = 1

  useEffect(() => {
    if (isLatest) {
      setLatestNews(latest?.slice(0, 8));
    } else {
      setLatestNews(latest?.slice(8, 16));
    }
  }, [isLatest, latest])
  
  return (
    <div data-testid='exclusiveId' className='pb-5 mt-14'>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <button onClick={() => setIsLatest(true)} className={isLatest ? 'py-1 slim-border rounded-sm mb-3 px-6 border-blue-400 mr-2 bg-blue-500 text-white' : 'py-1 slim-border rounded-sm mb-3 px-6 bg-white border-gray-400 mr-2'}>Letest</button>
            <button onClick={() => setIsLatest(false)} className={!isLatest ? 'py-1 slim-border rounded-sm mb-3 px-6 border-blue-400 mr-2 bg-blue-500 text-white' : 'py-1 slim-border rounded-sm mb-3 px-6 bg-white border-gray-400 mr-2'}>Trending</button>
            <div className='grid sm:grid-cols-2 gap-6'>
              {
                latestNews.map(news => 
                <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)}
                  className=' relative p-6 shadow-md rounded-lg border border-r-2 border-r-red-300 cursor-pointer' key={news._id}>
                  <h1 className='leading-7 relative z-10 text-lg font-medium text-gray-800 hover:text-red-600 transition-colors duration-300 cursor-pointer'>{(news?.heading).slice(0, 48)}{(news?.heading).slice(49) && '...'}</h1>
                  <p style={{ transform: "translate(-50%, -50%)", }} className='absolute top-1/2 left-3/4 text-8xl font-bold text-blue-100 '>{count++}</p>
                </div>
                )
              }
            </div>
          </div>
          <div>
            <h1 className={styles.exclusive}>Satireday</h1>
            <div className='sm:flex border-b'>
              {
                latest?.slice(16, 18).map((news, i) => <div className={ `cursor-pointer imageEffect p-3 ${i === 0 ? 'border-r' : '' }` } onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} key={news?._id}>
                  <div className='overflow-hidden'>
                    <img className='w-full h-32 object-fill' src={news?.images.img1} alt="" />
                  </div>
                  <h1 className='text-lg my-1 font-medium leading-5 hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news?.heading}</h1>
                  <p className='text-sm leading-4'>{news?.description[0]?.slice(0, 100)}</p>
                  <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit">{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
                </div>)
              }
            </div>
            <div className='sm:flex'>
              {
                latest?.slice(18, 20).map((news, i) => <div className={ `cursor-pointer imageEffect p-3 ${i === 0 ? 'border-r' : '' }` } onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} key={news?._id}>
                  <div className='overflow-hidden'>
                    <img className='w-full h-32 object-fill' src={news?.images.img1} alt="" />
                  </div>
                  <h1 className='text-lg my-1 font-medium leading-5 hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news?.heading}</h1>
                  <p className='text-sm leading-4 break-words'>{news?.description[0]?.slice(0, 100)}</p>
                  <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit">{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
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