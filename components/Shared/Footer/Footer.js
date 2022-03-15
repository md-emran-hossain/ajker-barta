import React, { useState } from 'react';
import styles from '../../../styles/Footer.module.css'
import { CgFacebook, CgYoutube, CgGoogle, CgInstagram } from 'react-icons/cg'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Newsletter from './Newsletter'
import ScrollToTop from "react-scroll-to-top";
const Footer = ({ newses }) => {
  const router = useRouter()

  return (
    <div className={styles.footer}>
      <div className="container">
        <ScrollToTop top='50' color='#EF4444' style={{ padding: '5px' }} smooth />
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          <div className={styles.infoBox}>
            <Link href='/'>
              <a className='text-white text-3xl font-medium'>Ajker <span className='text-red-500'>Barta</span></a>
            </Link>
            <div className={styles.infoBox}>
              <p className='my-2 text-sm'> <a className='contact-text hover:text-white ' href="tel:+880154-4455533" target="_blank" rel='noreferrer'>Phone: 0154-4455533</a></p>
              <p className='my-2 text-sm'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ajkerbarta007@gmail.com" className="hover:text-white " target="_blank" rel='noreferrer'>Email: ajkerbarta007@gmail.com</a> </p>
              <p className='my-2 text-sm'><a href="https://www.google.com/maps/place/Dhaka/@23.6220844,89.4661743,8z/data=!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181" target="_blank" className="hover:text-white " rel='noreferrer' >ABC Road, Dhaka, Bangladesh</a></p>
            </div>
            <div className='flex items-center gap-2 mt-5'>
              <a className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer' href="https://www.facebook.com/" target="_blank" rel='noreferrer' ><CgFacebook /></a>
              <a className='w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer' href="https://www.youtube.com/" target="_blank" rel='noreferrer' ><CgYoutube /></a>
              <a className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer' href="https://www.google.com/" target="_blank" rel='noreferrer' ><CgGoogle /></a>
              <a className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-xl hover:text-white cursor-pointer' href="https://www.instagram.com/" target="_blank" rel='noreferrer' ><CgInstagram /></a>
            </div>
          </div>
          <div className={styles.infoBox}>
            <h1 className='text-white text-xl font-medium'>Categories</h1>
            <ul>
              <li className='my-1'><Link href='/bangladesh'><a>Bangladesh</a></Link></li>
              <li className='my-1'><Link href='/international'><a>International</a></Link></li>
              <li className='my-1'><Link href='/sports'><a>Sports</a></Link></li>
              <li className='my-1'><Link href='/scienceTechnology'><a>Science & Technology</a></Link></li>
              <li className='my-1'><Link href='/business'><a>Business</a></Link></li>
              <li className='my-1'><Link href='/entertainment'><a>Entertainment</a></Link></li>
              <li className='my-1'><Link href='/lifestyle'><a>LifeStyle</a></Link></li>
            </ul>
          </div>

          <Newsletter />

          <div className={styles.infoBox}>
            <h1 className='text-white text-xl font-medium border-red-500'>Important Links</h1>
            <ul>
              <li className='my-1'><Link href="/about"><a>About us</a></Link></li>
              <li className='my-1'><Link href="/career"><a>Career</a></Link></li>
              <li className='my-1'><Link href="/advertisement"><a>Advertisement</a></Link></li>
            </ul>
          </div>
          <div className={styles.infoBox}>
            <h1 className='text-white text-xl font-medium border-red-500'>Recent Feeds</h1>
            {
              newses?.slice(0, 3).map((news => <div onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} key={news._id} className='flex cursor-pointer items-center gap-2 my-2'>
                <img className='w-24 rounded-md' src={news?.images?.img1} alt="" />
                <div>
                  <p className='text-sm'>{news?.publishedDate?.split(', ')[0]}</p>
                  <h3 className='text-white text-sm font-normal leading-4 hover:text-red-600 transition-colors duration-300 cursor-pointer'>{news?.heading?.slice(0, 50)}</h3>
                </div>
              </div>))
            }
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className="container">
          <div className='sm:flex items-center justify-between'>
            <p className='text-white text-md'>Ajker <span className='text-red-500'>Barta</span> | &copy; Copyright 2022 All Right Is Reserved !!!</p>
            <div>
              <span><Link href='/policy'><a className='cursor-pointer'>Privacy & Policy</a></Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;