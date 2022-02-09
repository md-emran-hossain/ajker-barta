import React, { useState, useEffect } from 'react';
import styles from './International.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const International = (intDatas) => {
    console.log(intDatas);
    const [newsData, setNewsData] = useState([]);
    // const [firstData, setFirstData] = useState({})

    useEffect(() => {
        fetch("./newsData.JSON")
            .then(res => res.json())
            .then(data => {
                setNewsData(data);
                // console.log(data);
            })
    }, [])

    console.log(newsData);

    const singleData = newsData.slice(0, 1);
    const multiData = newsData.slice(1, 4);
    return (
        <div className='container mx-auto '>
            <h2 className='text-2xl pt-24 lg:pt-0 pb-5 text-red-500 font-bold'>International <ChevronRightIcon /></h2>
            <div className="grid grid-cols-12 max-h-fit">
                <div className='col-span-12 lg:col-span-6 ' >
                    <div>
                        {
                            singleData.map(single => <div
                                key={single.title}
                                className="news-card" >
                                <a href="#" className="news-card__card-link"></a>
                                <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image" />
                                <div className="news-card__text-wrapper">
                                    <h2 className="news-card__title">{single.title}</h2>
                                    <div className="news-card__post-date">Jan 29, 2018</div>
                                    <div className="news-card__details-wrapper">
                                        <p className="news-card__excerpt">{single.description}</p>
                                        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
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
                            <div className='grid grid-cols-12 border border-gray-200 '>
                                <div className="col-span-8 p-2">
                                    <h2 className="text-1xl  font-bold">Amazing First Title News Card {multi.title}</h2>
                                    <p>{multi.description.slice(0, 120)}</p>
                                    <p><small className='text-gray-500'>Jan 29, 2018</small></p>
                                </div>
                                <div className="col-span-4">
                                    <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg" alt="" />
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