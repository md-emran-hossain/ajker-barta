import React, { useEffect, useState } from 'react';
import styles from '../../styles/Bangladesh.module.css'
const Bangladesh = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('/Bangladesh.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    return (
        <div className='h-auto mb-4'>
           
            <h2>Bangladesh</h2>
            <div className={`grid first:row-span-3  gap-2 md:grid-cols-3 sm:grid-cols-1 ${styles.bangladesh}`}>
                {
                    news.map(item => {
                        return (<div className='flex first:row-span-3 first:flex-col-reverse justify-between auto-cols-fr' key={item.id}>
                            <div className='mr-1 w-50 first:w-full'>
                                <h1 className='font-bold'>{item.title}</h1>
                                <p>{item.date}</p>
                            </div>
                            <div className=''>
                            <img className='w-44 h-20 first:w-full first:items-start' src={item.img} alt={item.title} />
                            </div>
                        </div>)
                    }
                    )
                }
            </div>
        </div>
    );
};

export default Bangladesh;