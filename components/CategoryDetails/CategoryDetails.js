import React from 'react';
import styles from '../../styles/CategoryDetails.module.css'

const CategoryDetails = ({ newses }) => {
  return (
    <div>
      <div className={styles.smallContainer}>
        <div className={styles.categoryGrid}>
          {
            newses?.slice(0, 5).map(news => <div className={styles.itemBox} key={news.id}>
              <img src={news.img} alt="" />
              <h1>{news.title}</h1>
              <p>{news.description?.slice(0, 120)}...</p>
              <p>{news.date}</p>
            </div>)
          }
        </div>
        <div>
          {
            newses?.slice(5,).map(news => <div className={styles.singleNews} key={news.id}>
              <img src={news.img} alt="" />
              <div>
                <h1 className='text-xl font-medium hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news.title}</h1>
                <p className='text-sm my-2'>{news.description?.slice(0, 120)}...</p>
                <p className='text-blue-600 text-md'>{news.date}</p>
              </div>
            </div>)
          }
        </div>
        <button className='w-32 block py-2 mx-auto mb-5 px-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-bg duration-300'>Load More</button>
      </div>
    </div>
  );
};

export default CategoryDetails;