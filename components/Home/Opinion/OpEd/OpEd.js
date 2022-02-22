import { useRouter } from 'next/router';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const OpEd = ({ opinion }) => {
  const oped = opinion.filter(news => news.subCategory === 'Op-Ed')
  const oped1 = oped[0]
  const router = useRouter()
  return (
    <div className='pt-5'>
      <div className='container'>
        <div className='flex items-center mb-4'>
          <h1 onClick={() => router.push('/opinion')} className='ml-2 text-xl cursor-pointer font-medium text-blue-900'>Opinion </h1><IoIosArrowForward className='text-red-600 mt-1' />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div onClick={() => router.push(`/${oped1.category}/${oped1.subCategory}/${oped1._id}`)} style={{ height: "450px" }} className="lg:col-span-5 col-span-12 border border-red-100 relative flex items-center ml-8 bg-red-500 p-5 cursor-pointer">
            <h1 className='absolute text-xl top-8 bg-blue-900 px-1 -left-6 py-2 text-white'>{oped1.heading}</h1>
            <p className='text-white'>{oped1.description[0]?.slice(0, 400)}</p>
            <h2 className='absolute bottom-5 left-4 text-xl text-white'>{oped1?.reporter}</h2>
          </div>
          <div className="lg:col-span-7 col-span-12">
            {
              oped?.slice(0, 4).map(news => <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news._id}`)} className='flex items-center gap-4 mb-4 cursor-pointer' key={news._id}>
                <div>
                  <img className='w-24 h-24 rounded-full' src={news.images?.img1} alt="" />
                </div>
                <div className='border-b pb-2'>
                  <h1 className='text-xl mb-1 font-semibold'>{news.subHeading ? <div> <span className='text-red-500'>{news.subHeading}</span>/{news.heading}</div> : <div>{news.heading}</div>}</h1>
                  <p className='font-serif font-medium text-lg border-t-4 w-fit'>{news.reporter}</p>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpEd;