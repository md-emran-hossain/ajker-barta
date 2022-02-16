import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import img from 'https://i.postimg.cc/2jbfZ5hW/coronavirus.png'
import styles from '../../styles/Covid.module.css'

const CovidHeader = () => {
  const [timeSeries, setTimeSeries] = useState('')
  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(res => res.json())
      .then(data => setTimeSeries(data?.Date))
  }, [])
  return (
    <div className={styles.header}>
      <div className="container">
        <div className='sm:flex items-center justify-between'>
          <div className={styles.logo}>
            <img src='https://i.postimg.cc/2jbfZ5hW/coronavirus.png' alt="" />
            <h1>Covid Update</h1>
          </div>
          <p>{`${timeSeries?.split('T')[0]} at ${timeSeries?.split('T')[1]}`}</p>
          <Link href='/'><a>Back To Home</a></Link>
        </div>
      </div>
    </div >
  );
};

export default CovidHeader;