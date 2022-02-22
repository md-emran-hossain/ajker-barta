import React from 'react';
import { Swiper, SwiperSlide  } from "swiper/react";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../../styles/lifestyle.module.css';



import { Navigation,Autoplay } from "swiper";
import Link from 'next/link';
const Lifestyle = ({newses}) => {
    console.log(newses[1].images.img1);
    return (
        <div className="container xl mx-auto">

        <h2 className="text-xl font-medium mt-5 mb-2">
                <span className="text-blue-900">
                    <Link href="/international">Life style</Link>{" "}
                </span>
                <ChevronRightIcon className="text-red-500" />
            </h2>



       <Swiper
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
       
        loopFillGroupWithBlank={true}
       
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
          
          }}
      navigation={true}
      breakpoints={{
        // when window width is >= 640px
        375: {
          width: 375,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
         modules={[Autoplay,Navigation ]}
        className="mySwiper"
      >


          {
newses.slice(1,10).map(item=> 
    
    <SwiperSlide key={item._id}>
            
    <div className={`${styles.backgroundimg}`} style={{ 
  backgroundImage: `url(${item?.images?.img1})` 
}}>
     <h2 className={`${styles.lititl}`}>{item?.subCategory.slice(0,20)} </h2>
  <div className={`${styles.box}`}>
 
    <span className={`${styles.lispanitem}`}></span>
    <span className={`${styles.lispanitem}`}></span>
    <span className={`${styles.lispanitem}`}></span>
    <span className={`${styles.lispanitem}`}></span>
    <div className={`${styles.content}`}>
     
      <h2 className={`${styles.lititle}`}>{item?.heading.slice(0,20)} </h2>
      {/* <p>{item?.description.slice(0,0)}</p> */}
    </div>
    
  </div>
</div>



    </SwiperSlide>
    )

          }
       



        
      </Swiper>
      </div>
    );
};

export default Lifestyle;







