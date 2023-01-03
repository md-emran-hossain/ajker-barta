import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '../../../styles/ImageGallery.module.css';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from "next/router";

const Entertainment = ({ entertainment }) => {
    const router = useRouter()

    return (
        <div data-testid='entertainmentId' className="container overflow-hidden ">
            <h2 className='text-xl text-blue-900 font-semibold mb-3 mt-14'><span className='text-gray-700'>Entertainment </span><ChevronRightIcon className='text-red-500' /></h2>
            <div className={styles.galleryRow}>
                {
                    entertainment?.slice(0, 4).map(news => <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} className={styles.gallery} key={news._id}>
                        <img className='w-full h-full object-cover' src={news?.images?.img1} alt="" />
                        <div className={styles.description}>
                            <h1 className='text-lg leading-5 font-semibold'>{news?.heading}</h1>
                            <p className=' opacity-0 transition-opacity duration-300 text-sm font-medium my-1'>{news?.description[0]}</p>
                            <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full opacity-0 bg-gray-100 w-fit text-blue-500">{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Entertainment;
