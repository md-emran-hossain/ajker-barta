import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';

const Interview = ({ opinion }) => {
    const interview1 = opinion?.filter(news => news.subCategory === 'interview')[0]
    const interview2 = opinion?.filter(news => news.subCategory === 'interview')[1]
    const interview3 = opinion?.filter(news => news.subCategory === 'interview')[2]
    const router = useRouter()
    return (
        <div>
            <h2 onClick={() => router.push(`/opinion/interview`)} className='text-xl mb-3 text-red-500 font-serif font-medium cursor-pointer'><span className='text-black'>Interview </span><ChevronRightIcon /></h2>
            <div className='border-r pr-2'>
                <div onClick={() => router.push(`/${interview1.category}/${interview1.subCategory}/${interview1._id}`)} className='pb-3 cursor-pointer'>
                    <img className='rounded-t-md h-52 object-cover w-full' src={interview1?.images?.img1} alt="" />
                    <h1 className='text-xl font-serif my-1 hover:text-blue-500 transition-colors duration-300'>{interview1?.heading}</h1>
                    {interview1?.publishedDate && <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500 ">{`${formatDistanceToNow(new Date(interview1?.publishedDate))} ago`}</p>}
                </div>
                <div onClick={() => router.push(`/${interview2?.category}/${interview2?.subCategory}/${interview2?._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{interview2?.subHeading ? <div> <span className='text-red-500'>{interview2?.subHeading}</span>/{interview2?.heading}</div> : <div>{interview2?.heading}</div>}</h1>
                </div>
                <div onClick={() => router.push(`/${interview3?.category}/${interview3?.subCategory}/${interview3?._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{interview3?.subHeading ? <div> <span className='text-red-500'>{interview3?.subHeading}</span>/{interview3?.heading}</div> : <div>{interview3?.heading}</div>}</h1>
                </div>
            </div>
        </div>
    );
};

export default Interview;