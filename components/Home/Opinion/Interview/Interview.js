import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';

const Interview = ({ opinion }) => {
    const interview = opinion.filter(news => news.subCategory === 'interview')
    const router = useRouter()
    return (
        <div>
            <h2 onClick={() => router.push(`/opinion/interview`)} className='text-xl mb-3 text-red-500 font-serif font-medium cursor-pointer'><span className='text-black'>Interview </span><ChevronRightIcon /></h2>
            <div className='border-r pr-2'>
                <div onClick={() => router.push(`/${interview[0].category}/${interview[0].subCategory}/${interview[0]._id}`)} className='pb-3 cursor-pointer'>
                    <img className='rounded-t-md h-52 object-cover w-full' src={interview[0]?.images.img1} alt="" />
                    <h1 className='text-xl font-serif my-1 hover:text-blue-500 transition-colors duration-300'>{interview[0]?.heading}</h1>
                    <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500 ">{`${formatDistanceToNow(new Date(interview[0]?.publishedDate))} ago`}</p>
                </div>
                <div onClick={() => router.push(`/${interview[1].category}/${interview[1].subCategory}/${interview[1]._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{interview[1]?.subHeading ? <div> <span className='text-red-500'>{interview[1]?.subHeading}</span>/{interview[1]?.heading}</div> : <div>{interview[1]?.heading}</div>}</h1>
                </div>
                <div onClick={() => router.push(`/${interview[2].category}/${interview[2].subCategory}/${interview[2]?._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{interview[2]?.subHeading ? <div> <span className='text-red-500'>{interview[2]?.subHeading}</span>/{interview[1]?.heading}</div> : <div>{interview[3]?.heading}</div>}</h1>
                </div>
            </div>
        </div>
    );
};

export default Interview;