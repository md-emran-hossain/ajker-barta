import React, { useState } from 'react';
import styles from '../../../styles/Footer.module.css'
import { CgFacebook, CgYoutube, CgGoogle, CgInstagram } from 'react-icons/cg'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Newsletter from './Newsletter'
const Footer = ({ newses }) => {
  const router = useRouter()

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          <div className={styles.infoBox}>
            <Link href='/'>
              <a className='text-white text-3xl font-medium'>Ajker <span className='text-red-500'>Barta</span></a>
            </Link>
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
              <li className='my-1'><a>Digital Edition</a></li>
              <li className='my-1'><a>Side Map</a></li>
              <li className='my-1'><Link href="/about"><a>About Us</a></Link></li>
              <li className='my-1'><a>career</a></li>
              <li className='my-1'><a>About Ads</a></li>
              <li className='my-1'><a>Give a Gift</a></li>
              <li className='my-1'><a>Security Info</a></li>
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
            <p className='text-white text-md'>Ajker <span className='text-red-500'>Barta</span> | &copy; Copyright with Love By DevHeros</p>
            <div>
              <span><Link href='/policy'><a className='cursor-pointer'>Policy</a></Link> </span>
              <span><a className='cursor-pointer ml-4'>Claim A Report</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;