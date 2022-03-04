import axios from 'axios'
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../../../components/Shared/Footer/Footer';
import Header from '../../../components/Shared/Header/Header';
import NavigationBar from '../../../components/Shared/NavigationBar/NavigationBar';
import styles from '../../../styles/CategoryDetails.module.css';
import Image from 'next/image';

const SubCategoryDetails = ({ newses }) => {
  const [visible, setVisible] = useState(10)
  const router = useRouter()
  const subCategory = router.query.subcategory;
  const category = router.query.category;
  const subCategories = newses.filter(news => news.category === category).map(news => news.category && news.subCategory)
  const unique = [...new Set(subCategories)];
  const displayNews = newses.filter(news => news.subCategory === subCategory).reverse()

  const loadmore = () => {
    setVisible(prev => prev + 5)
    if (visible >= displayNews.length - 1) {
      setShow(false)
    }
  }
  return (
    <div>
      <Header />
      <NavigationBar />

      <div className={styles.smallContainer}>
        <div className='flex gap-2 items-center'>
          <h1 className='text-3xl font-bold capitalize'>{category}</h1>
          <p className='capitalize -mb-3'>{subCategory}</p>
        </div>
        <div className='flex flex-wrap gap-4 capitalize my-4'>
          {
            unique.map((sub, i) => <span onClick={() => router.push(`/${category}/${sub}`)} className={sub === subCategory ? 'text-blue-500 cursor-pointer' : 'cursor-pointer'} key={i}>{sub}</span>)
          }
        </div>
        <div className={styles.categoryGrid}>
          {
            displayNews?.slice(0, 5).map(news => <div onClick={() => router.push(`/${category}/${subCategory}/${news?._id}`)} className={`${styles.itemBox} cursor-pointer`} key={news._id}>
              <img src={news?.images?.img1}
                alt="" />
              <h1>{news?.heading}</h1>
              <p>{news.description?.[0].slice(0, 100)}</p>
              <p>{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
            </div>)
          }
        </div>
        <div>
          {
            displayNews?.slice(5,).map(news => <div onClick={() => router.push(`/${category}/${subCategory}/${news?._id}`)} className={`${styles.singleNews} cursor-pointer`} key={news.id}>
              <img src={news?.images?.img1}
                alt="" />
              <div>
                <h1 className='text-xl font-medium hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news?.heading}</h1>
                <p className='text-sm my-2'>{news?.description?.[0]}</p>
                <p className='text-blue-600 text-md'>{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
              </div>
            </div>)
          }
        </div>
        {visible < displayNews.length && (
          <button
            onClick={loadmore}
            className="w-32 block py-2 mx-auto my-5 px-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-bg duration-300"
          >
            Load More
          </button>
        )}
      </div>
      <Footer newses={newses} />
    </div>
  );
};



export default SubCategoryDetails;
export const getStaticProps = async () => {
  const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
  return {
    props: {
      newses: res.data,
    },
    revalidate: 10
  };
};
export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}
