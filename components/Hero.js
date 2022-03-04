import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { formatDistanceToNow } from 'date-fns'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from '../styles/Hero.module.css'
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { useRouter } from 'next/router';

const Hero = ({ newses }) => {
  const latest = newses.reverse()
  // console.log(newses)
  const router = useRouter()
  return (
    <div className='pb-6 border-b border-gray-100' id='hero'>
      <div className='mx-auto' style={{ width: '98%' }}>
        <div className={styles.slidRow}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            loop={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className={styles.firstSlider}
          >
            {
              latest.slice(0, 3).map(news => <SwiperSlide className='h-full' key={news._id}>
                <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} className='relative w-full h-full cursor-pointer'>
                  <img className='w-full h-full' src={news?.images?.img1} alt='' />
                  <div className='absolute bottom-4 left-4 z-10'>
                    <p className='text-white text-sm capitalize'>{news?.category} / {`${formatDistanceToNow(new Date(news?.publishedDate))} ago`}</p>
                    <h1 className='text-white text-xl md:text-3xl cursor-pointer hover:text-red-600 leading-5 md:leading-8 sm:my-1 md:my-2 font-semibold transition-colors duration-300'>{news?.heading}</h1>
                    <h1 className='text-white text-xl md:text-3xl cursor-pointer hover:text-red-600 leading-5 md:leading-8 sm:my-1 md:my-2 font-semibold transition-colors duration-300'>{news.heading}</h1>
                    <p className='text-white text-sm md:text-md'>{news?.description[0]}...</p>
                  </div>
                  <div className={styles.overlay}></div>
                </div>
              </SwiperSlide>)
            }

          </Swiper>
          <Swiper
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            freeMode={true}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            pagination={{
              clickable: true
            }}
            speed={1000}
            modules={[Autoplay]}
            className={styles.secondSlide}
          >
            {
              latest.slice(3, 8).map(news => <SwiperSlide key={news?._id}>
                <div onClick={() => router.push(`/${news?.category}/${news?.subCategory}/${news?._id}`)} className='flex justify-center gap-3 h-full cursor-pointer'>
                  <div className='w-2/5 h-full'>
                    <img className='w-full h-full object-cover' src={news?.images?.img1} alt='' />
                  </div>
                  <div className='w-3/5'>
                    <p className='text-sm capitalize'><span className='text-blue-500'>{news?.category}</span> / {`${formatDistanceToNow(new Date(news?.publishedDate))} ago`}</p>
                    <h1 className='md:text-lg text-md leading-5 md:leading-4 xl:leading-6 cursor-pointer hover:text-red-600 font-medium transition-colors duration-300'>{news?.heading}</h1>
                  </div>
                </div>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;