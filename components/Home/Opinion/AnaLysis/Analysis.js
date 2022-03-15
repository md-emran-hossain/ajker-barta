import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';

const Analysis = ({ opinion }) => {
    const analysis1 = opinion?.filter(news => news.subCategory === 'analysis')[0]
    const analysis2 = opinion?.filter(news => news.subCategory === 'analysis')[0]
    const analysis3 = opinion?.filter(news => news.subCategory === 'analysis')[0]
    const router = useRouter()
    return (
        <div>
            <h2 onClick={() => router.push(`/opinion/analysis`)} className='text-xl mb-3 text-red-500 font-serif font-medium cursor-pointer'><span className='text-black'>Analysis </span><ChevronRightIcon /></h2>
            <div className='border-r pr-2'>
                <div onClick={() => router.push(`/${analysis1.category}/${analysis1.subCategory}/${analysis1._id}`)} className='pb-3 cursor-pointer'>
                    <img className='rounded-t-md h-52 object-cover w-full' src={analysis1?.images?.img1} alt="" />
                    <h1 className='text-xl font-serif my-1 hover:text-blue-500 transition-colors duration-300'>{analysis1?.heading}</h1>
                    {analysis1?.publishedDate && <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500 ">{`${formatDistanceToNow(new Date(analysis1?.publishedDate))} ago`}</p>}
                </div>
                <div onClick={() => router.push(`/${analysis2?.category}/${analysis2?.subCategory}/${analysis2?._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{analysis2?.subHeading ? <div> <span className='text-red-500'>{analysis2?.subHeading}</span>/{analysis2?.heading}</div> : <div>{analysis2?.heading}</div>}</h1>
                </div>
                <div onClick={() => router.push(`/${analysis3.category}/${analysis3.subCategory}/${analysis3._id}`)} className='border-t py-2 cursor-pointer'>
                    <h1 className='text-xl font-serif hover:text-blue-500 transition-colors duration-300'>{analysis3?.subHeading ? <div> <span className='text-red-500'>{analysis3?.subHeading}</span>/{analysis3?.heading}</div> : <div>{analysis3?.heading}</div>}</h1>
                </div>
            </div>
        </div>
    );
};

export default Analysis;