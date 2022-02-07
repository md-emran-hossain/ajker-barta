import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from '../styles/Hero.module.css'
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const Hero = () => {
  const [newses, setNewses] = useState([])
  useEffect(() => {
    fetch('./news.json')
      .then(res => res.json())
      .then(data => setNewses(data))
  }, [])
  return (
    <div className='py-12' id='hero'>
      <div className='container'>
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
              newses.slice(0, 3).map(news => <SwiperSlide className='h-full' key={news.id}>
                <div className='relative w-full h-full'>
                  <img className='w-full h-full' src={news.img} alt='' />
                  <div className='absolute bottom-4 left-4 z-10'>
                    <p className='text-white text-sm italic'>{news.category} / {news.date}</p>
                    <h1 className='text-white text-xl md:text-3xl cursor-pointer hover:text-red-600 leading-5 md:leading-8 sm:my-1 md:my-2 font-semibold transition-colors duration-300'>{news.title}</h1>
                    <p className='text-white text-sm md:text-md'>{news?.description.slice(0, 150)}...</p>
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
            modules={[Pagination, Autoplay]}
            className={styles.secondSlide}
          >
            {
              newses.map(news => <SwiperSlide key={news.id}>
                <div className='flex justify-center gap-3 h-full'>
                  <div className='w-2/5 h-full'>
                    <img className='w-full h-full object-cover' src={news.img} alt='' />
                  </div>
                  <div className='w-3/5'>
                    <p className='text-sm italic'><span className='text-blue-500'>{news.category}</span> / {news.date}</p>
                    <h1 className='md:text-lg text-md leading-5 md:leading-4 xl:leading-6 cursor-pointer hover:text-red-600 font-medium transition-colors duration-300'>{news.title}</h1>
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