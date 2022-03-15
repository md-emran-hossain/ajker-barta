import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';

const WorldMedia = ({ opinion }) => {
    const editorial1 = opinion?.filter(news => news.subCategory === 'editorial')[0]
    const editorial2 = opinion?.filter(news => news.subCategory === 'editorial')[0]
    const editorial3 = opinion?.filter(news => news.subCategory === 'editorial')[0]
    const router = useRouter()
    return (
        <div>
            <h2 onClick={() => router.push(`/opinion/editorial`)} className='text-xl mb-3 text-red-500 font-serif font-medium cursor-pointer'><span className='text-black'>World Media </span><ChevronRightIcon /></h2>
            <div>
                <div onClick={() => router.push(`/${editorial1.category}/${editorial1.subCategory}/${editorial1._id}`)} className='pb-3 cursor-pointer'>
                    <img className='rounded-t-md h-52 object-cover w-full' src={editorial1?.images?.img1} alt="" />
                    <h1 className='text-xl font-serif my-1 hover:text-blue-500 transition-colors duration-300'>{editorial1?.heading}</h1>
                    {editorial1?.publishedDate && <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500 ">{`${formatDistanceToNow(new Date(editorial1?.publishedDate))} ago`}</p>}
                </div>
                <div onClick={() => router.push(`/${editorial2?.category}/${editorial2?.subCategory}/${editorial2?._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{editorial2?.subHeading ? <div> <span className='text-red-500'>{editorial2?.subHeading}</span>/{editorial2?.heading}</div> : <div>{editorial2?.heading}</div>}</h1>
                </div>
                <div onClick={() => router.push(`/${editorial3.category}/${editorial3.subCategory}/${editorial3._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{editorial3?.subHeading ? <div> <span className='text-red-500'>{editorial3?.subHeading}</span>/{editorial3?.heading}</div> : <div>{editorial3?.heading}</div>}</h1>
                </div>
            </div>
        </div>
    );
};

export default WorldMedia;