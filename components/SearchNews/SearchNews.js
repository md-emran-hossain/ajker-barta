import { CircularProgress } from '@mui/material';
import React from 'react'
import useAuth from '../../hooks/useAuth';
import Search from '../Shared/Search/Search';
// import Header from '../Shared/Header/Header';
// import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const SearchNews = () => {
    // const { loading } = useAuth();
    const [displayData, setDisplayData] = React.useState([]);

    const filterResult = data => {
        setDisplayData(data)
    }
    console.log(displayData)
    return (
        <>

            <h2 className="text-4xl text-center font-bold pt-3">Search Result By News </h2>
            <div className="mt-5 mx-auto">
                <Search displayData={displayData} setDisplayData={setDisplayData} />
            </div>

            <div className=" mx-auto mt-5" style={{ width: '50%' }}>
                {displayData.map(news => <div
                    key={news._id}
                    className='grid grid-cols-12 gap-2 mb-3 border-b-2 pb-2'
                >
                    <div className='col-span-7' >
                        <h2 className='md:text-2xl font-semibold'>{news?.heading}</h2>
                        <p>{news.publishedDate}</p>
                    </div>

                    <div className='col-span-5' >
                        <img src={news?.images?.img1} alt="" />
                    </div>
                </div>)
                }
            </div>

        </>
    ), filterResult;
};

export default SearchNews;