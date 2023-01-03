import { useRouter } from 'next/router';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const OpEd = ({ opinion }) => {
  const oped = opinion?.filter(news => news.subCategory === 'Op-Ed')
  const oped1 = opinion?.filter(news => news.subCategory === 'Op-Ed')[0]
  const router = useRouter()
  return (
    <div className='pt-5'>
      <div className='container'>
        <div className='flex items-center mb-4'>
          <h1 onClick={() => router.push('/opinion')} className='ml-2 text-xl cursor-pointer font-medium text-blue-900'>Opinion </h1><IoIosArrowForward className='text-red-600 mt-1' />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div onClick={() => router.push(`/${oped1?.category}/${oped1?.subCategory}/${oped1._id}`)} style={{ height: "450px" }} className="lg:col-span-5 col-span-12 border-2 border-gray-200 relative flex items-center ml-8 p-12 cursor-pointer text-lg">
            <h1 className='absolute text-xl top-8 bg-blue-900 px-4 -left-6
             py-2 text-white mr-6'>{oped1?.heading}</h1>
            <p className='text-gray-600 mt-4'>{oped1?.description[0]?.slice(0, 400)}</p>
            <h2 className='absolute bottom-5 left-4 text-xl text-white'>{oped1?.reporter}</h2>
          </div>
          <div className="lg:col-span-7 col-span-12">
            {
              oped?.slice(0, 4)?.map(news => <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news._id}`)} className='flex items-center gap-4 mb-4 cursor-pointer' key={news._id}>
                <div>
                  <img
                    className='rounded-full w-24 h-24 '
                    src={news?.images?.img1}
                    alt="" />
                </div>
                <div className='border-b pb-2 last:border-0'>
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