import React, { useState, useEffect } from 'react';
import styles from './International.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IoIosArrowForward } from 'react-icons/io';


const International = (intDatas) => {
    console.log(intDatas);
    const [newsData, setNewsData] = useState([]);
    // const [firstData, setFirstData] = useState({})

    useEffect(() => {
        fetch("./newsData.JSON")
            .then(res => res.json())
            .then(data => {
                setNewsData(data);
            })
    }, [])

    console.log(newsData);

    const singleData = newsData.slice(0, 1);
    const multiData = newsData.slice(1, 4);
    return (
        <div className='container mx-auto lg:pb-5 lg:border-b  border-gray-200'>
            <div className="flex items-center justify-start ">
      <h1 className='py-2 text-xl cursor-pointer font-medium text-blue-900'>International </h1><IoIosArrowForward className='text-red-600 mt-1' />
      </div>
            <div className="grid grid-cols-12">
                <div className='col-span-12 lg:col-span-6 mb-3 lg:mb-0' >
                    <div>
                        {
                            singleData.map(single => <div
                                key={single.title}
                                className=" lg:border-none border lg:border lg:border-r border-gray-200 lg:mr-3 lg:pr-3" >
                                <div className=''>
                                    <img src={single.image} alt="" className="" />
                                </div>
                                <div className="p-3">
                                    <h2 className="text-2xl font-bold">{single.title}</h2>
                                    <p className="">{single.description}</p>
                                    <p><small className='text-gray-500'>Jan 29, 2018</small></p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <div className="">
                        {multiData.map(multi => (<div
                            key={multi.title}
                            className='col-span-12 lg:col-span-4 mb-2'>
                            <div className='grid grid-cols-12 border border-gray-200 rounded-md'>
                                <div className="col-span-8 p-2">
                                    <h2 className="text-1xl  font-bold">Amazing First Title News Card {multi.title}</h2>
                                    <p>{multi.description.slice(0, 120)}</p>
                                    <p><small className='text-gray-500'>Jan 29, 2018</small></p>
                                </div>
                                <div className="col-span-4">
                                    <img src={multi.image} alt="" />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default International;