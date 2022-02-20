import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Footer.module.css'
import { CgFacebook, CgYoutube, CgGoogle, CgInstagram } from 'react-icons/cg'

const Footer = ({ newses }) => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          <div className={styles.infoBox}>
            <h2 className='text-white text-3xl font-medium'>Ajker <span className='text-red-500'>Barta</span></h2>
            <div className={styles.infoBox}>
              <p className='my-2 text-sm'>ABC Road, Rangpur, Bangladesh</p>
              <p className='my-2 text-sm'>Phone: 0154-4455533</p>
              <p className='my-2 text-sm'>Email: ajkerbarta007@gmail.com</p>
            </div>
            <div className='flex items-center gap-2 mt-5'>
              <a className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer'><CgFacebook /></a>
              <a className='w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer'><CgYoutube /></a>
              <a className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer'><CgGoogle /></a>
              <a className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer'><CgInstagram /></a>
            </div>
          </div>
          <div className={styles.infoBox}>
            <h1 className='text-white text-xl font-medium'>Categories</h1>
            <ul>
              <li className='my-1'><a>Bangladesh</a></li>
              <li className='my-1'><a>International</a></li>
              <li className='my-1'><a>Sports</a></li>
              <li className='my-1'><a>Science & Technology</a></li>
              <li className='my-1'><a>Business</a></li>
              <li className='my-1'><a>Entertainment</a></li>
              <li className='my-1'><a>LifeStyle</a></li>
            </ul>
          </div>
          <div className={styles.infoBox}>
            <h1 className='text-white text-xl font-medium border-red-500'>Newsletter</h1>
            <form>
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <button className='py-2.5 px-6 text-lg bg-red-500 text-white rounded-md w-full mt-2' type='submit'>Subscribe</button>
            </form>
          </div>
          <div className={styles.infoBox}>
            <h1 className='text-white text-xl font-medium border-red-500'>Important Links</h1>
            <ul>
              <li className='my-1'><a>Digital Edition</a></li>
              <li className='my-1'><a>Side Map</a></li>
              <li className='my-1'><a>About Us</a></li>
              <li className='my-1'><a>career</a></li>
              <li className='my-1'><a>About Ads</a></li>
              <li className='my-1'><a>Give a Gift</a></li>
              <li className='my-1'><a>Security Info</a></li>
            </ul>
          </div>
          <div className={styles.infoBox}>
            <h1 className='text-white text-xl font-medium border-red-500'>Recent Feeds</h1>
            {
              newses?.slice(0, 3).map((news => <div className='flex items-center gap-2 my-2' key={news._id}>
                <img className='w-24 rounded-md' src={news.images.img1} alt="" />
                <div>
                  <p className='text-sm'>{news.publishedDate?.split(', ')[0]}</p>
                  <h3 className='text-white text-sm font-normal leading-4 hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news.heading?.slice(0, 50)}</h3>
                </div>
              </div>))
            }
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className="container">
          <div className='sm:flex items-center justify-between'>
            <p className='text-white text-md'>Ajker <span className='text-red-500'>Barta</span> | &copy; Copyright with Love By DevHeros</p>
            <div>
              <span><a className='cursor-pointer'>Privacy & Policy</a></span>
              <span><a className='cursor-pointer ml-4'>Claim A Report</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;