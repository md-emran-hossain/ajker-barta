import React, { useState, useEffect } from 'react';
import styles from './Sports.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Sports = (intDatas) => {
    console.log(intDatas);
    const [sportsData, setSportsData] = useState([]);

    useEffect(() => {
        fetch("./newsData.JSON")
            .then(res => res.json())
            .then(data => {
                setSportsData(data);
            })
    }, [])

    // console.log(sportsData);

    const singleData = sportsData.slice(0, 1);
    const multiData = sportsData.slice(1, 4);
    return (
        <div className='container mx-auto lg:pb-5 lg:border-b  border-gray-200'>
            <h2 className='text-2xl pt-24 lg:pt-5 pb-5 text-red-500 font-bold'>Sports <ChevronRightIcon /></h2>
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

export default Sports;