import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Hero.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';


const Entertainment = () => {
    const [enData, setEnData] = useState([]);

    useEffect(() => {
        const url = `./newsData.JSON`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setEnData(data);
            })
    }, [])


    return (
        <div className="container overflow-hidden ">
            <h2 className='text-xl text-blue-900 font-semibold mb-3'><span className='text-gray-700'>Entertainment </span><ChevronRightIcon className='text-red-500' /></h2>


            <div className="grid grid-cols-12 lg:gap-3 gap-2">

                <div className='col-span-12 lg:col-span-6'>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full' src={enData[0]?.image} alt='' />
                        <div className='absolute bottom-4 left-4 z-10'>
                            <h2 className='text-white text-2xl cursor-pointer hover:text-red-400 transition-colors duration-300'>{enData[0]?.title}</h2>
                        </div>
                        <div className={styles.overlay}></div>
                    </div>
                </div>


                <div className='col-span-12 lg:col-span-6'>

                    <div className="col-span-12">
                        <div className='relative w-full max-h-72'>
                            <img className=' object-fill h-72 w-full' src={enData[1]?.image} alt='' />
                            <div className='absolute bottom-4 left-4 z-10'>
                                <h2 className='text-white text-1xl cursor-pointer hover:text-red-400 transition-colors duration-300'>{enData[1]?.title}</h2>
                            </div>
                            <div className={styles.overlay}></div>
                        </div>
                    </div>


                    <div className='grid grid-cols-2 gap-3 mt-3'>
                        <div className="">
                            <div className='relative w-full max-h-72'>
                                <img className='object-fill h-72 w-full' src={enData[2]?.image} alt='' />
                                <div className='absolute bottom-4 left-4 z-10'>
                                    <h3 className='text-white text-1xl cursor-pointer hover:text-red-400 transition-colors duration-300'>{enData[2]?.title}</h3>
                                </div>
                                <div className={styles.overlay}></div>
                            </div>
                        </div>


                        <div className="">
                            <div className='relative w-full max-h-72'>
                                <img className='object-fill h-72 w-full' src={enData[3]?.image} alt='' />
                                <div className='absolute bottom-4 left-4 z-10'>
                                    <h3 className='text-white text-1xl  cursor-pointer hover:text-red-400 transition-colors duration-300'>{enData[3]?.title}</h3>
                                </div>
                                <div className={styles.overlay}></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Entertainment;
