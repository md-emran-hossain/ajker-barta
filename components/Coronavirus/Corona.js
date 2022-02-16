import React from 'react';

const Corona = (props) => {
   
    const {heading,description,images,publishedDate}=props.news
    return (
        <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={images.img1} alt="Mountain"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{heading}</div>
          <p className="text-gray-700 text-base">
          {description[0].slice(0,100)}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{publishedDate}</span>
        </div>
      </div>
    );
};

export default Corona;