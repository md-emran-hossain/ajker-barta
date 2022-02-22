import React, { useState, useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '../../../styles/ImageGallery.module.css'
import { FcGallery } from 'react-icons/fc'

const ImageGallery = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])

  return (
    <div className="container overflow-hidden ">
      <h2 className='text-xl text-blue-900 font-semibold mb-3 mt-5'><span className='text-gray-700'> Todays Gallery </span><ChevronRightIcon className='text-red-500' /></h2>
      <div className={styles.galleryRow}>
        {
          images?.slice(0, 4).map(news => <div className={styles.gallery} key={news._id}>
            <img className='w-full h-full object-cover' src={news?.img} alt="" />
            <div>
              <h1 className='text-lg leading-5 font-semibold absolute bottom-4 left-3 text-white'>{news?.title}</h1>
              <FcGallery className='absolute top-2 left-2 text-5xl' />
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ImageGallery;