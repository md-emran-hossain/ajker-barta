import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';

const WorldMedia = ({ opinion }) => {
    const editorial = opinion.filter(news => news.subCategory === 'editorial')
    const router = useRouter()
    return (
        <div>
            <h2 onClick={() => router.push(`/opinion/editorial`)} className='text-xl mb-3 text-red-500 font-serif font-medium cursor-pointer'><span className='text-black'>World Media </span><ChevronRightIcon /></h2>
            <div>
                <div onClick={() => router.push(`/${editorial[0].category}/${editorial[0].subCategory}/${editorial[0]._id}`)} className='pb-3 cursor-pointer'>
                    <img className='rounded-t-md h-52 object-cover w-full' src={editorial[0]?.images.img1} alt="" />
                    <h1 className='text-xl font-serif my-1 hover:text-blue-500 transition-colors duration-300'>{editorial[0]?.heading}</h1>
                    <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500 ">{`${formatDistanceToNow(new Date(editorial[0]?.publishedDate))} ago`}</p>
                </div>
                <div onClick={() => router.push(`/${editorial[1].category}/${editorial[1].subCategory}/${editorial[1]._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{editorial[1].subHeading ? <div> <span className='text-red-500'>{editorial[1].subHeading}</span>/{editorial[1].heading}</div> : <div>{editorial[1].heading}</div>}</h1>
                </div>
                <div onClick={() => router.push(`/${editorial[2].category}/${editorial[2].subCategory}/${editorial[2]._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{editorial[2].subHeading ? <div> <span className='text-red-500'>{editorial[2].subHeading}</span>/{editorial[1].heading}</div> : <div>{editorial[3].heading}</div>}</h1>
                </div>
            </div>
        </div>
    );
};

export default WorldMedia;