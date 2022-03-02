import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';

const Analysis = ({ opinion }) => {
    const analysis = opinion.filter(news => news.subCategory === 'analysis')
    const router = useRouter()
    return (
        <div>
            <h2 onClick={() => router.push(`/opinion/analysis`)} className='text-xl mb-3 text-red-500 font-serif font-medium cursor-pointer'><span className='text-black'>Analysis </span><ChevronRightIcon /></h2>
            <div className='border-r pr-2'>
                <div onClick={() => router.push(`/${analysis[0].category}/${analysis[0].subCategory}/${analysis[0]._id}`)} className='pb-3 cursor-pointer'>
                    <img className='rounded-t-md h-52 object-cover w-full' src={analysis[0]?.images.img1} alt="" />
                    <h1 className='text-xl font-serif my-1 hover:text-blue-500 transition-colors duration-300'>{analysis[0]?.heading}</h1>
                    <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500 ">{`${formatDistanceToNow(new Date(analysis[0]?.publishedDate))} ago`}</p>
                </div>
                <div onClick={() => router.push(`/${analysis[1].category}/${analysis[1].subCategory}/${analysis[1]._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{analysis[1].subHeading ? <div> <span className='text-red-500'>{analysis[1].subHeading}</span>/{analysis[1].heading}</div> : <div>{analysis[1].heading}</div>}</h1>
                </div>
                <div onClick={() => router.push(`/${analysis[2].category}/${analysis[2].subCategory}/${analysis[2]._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{analysis[2]?.subHeading ? <div> <span className='text-red-500'>{analysis[2]?.subHeading}</span>/{analysis[1]?.heading}</div> : <div>{analysis[3]?.heading}</div>}</h1>
                </div>
            </div>
        </div>
    );
};

export default Analysis;