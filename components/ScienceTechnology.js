import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'

const ScienceTechnology = () => {
  const [newses, setNewses] = useState([])
  useEffect(() => {
    fetch('./news.json')
      .then(res => res.json())
      .then(data => setNewses(data))
  }, [])
  return (
    <div className='mb-12'>
      <div className="container">
        <h1 className='flex items-center justify-start gap-2 ml-2 text-xl mb-1 cursor-pointer font-medium text-blue-900'>Science & Technology <BsArrowRight className='text-red-600' /></h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {
            newses?.slice(0, 4).map(news => <div key={news.id} className=' p-2 shadow-sm hover:shadow-md'>
              <img className='w-full h-52 object-cover' src={news.img} alt="" />
              <h1 className='text-lg leading-6 my-1 font-semibold hover:text-red-600 transition-colors duration-300 cursor-pointer' >{news.title}</h1>
              <p className='text-sm'>{news.description?.slice(0, 120)}...</p>
              <p className='text-md italic text-blue-600'>{news.date}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default ScienceTechnology;