import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react';

const Corona = ({ news }) => {

  const router = useRouter()
  // const { heading, description, images, publishedDate  } = news
  return (
    <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} className="rounded imageEffect overflow-hidden shadow-md cursor-pointer">
      <div className="w-full overflow-hidden">
        <img className="w-full" src={news?.images?.img1} alt="Mountain" />
      </div>
      <div className="px-3 py-3">
        <div className="font-bold text-lg mb-1 leading-6 hover:text-red-600 transition-colors duration-300">{news?.heading}</div>
        <p className="text-gray-700 text-sm">
          {news?.description[0]?.slice(0, 100)}
        </p>
        <div className="mt-4">
          {news?.publishDate && <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800 mr-2 mb-2">{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</span>}
        </div>
      </div>
    </div>
  );
};

export default Corona;