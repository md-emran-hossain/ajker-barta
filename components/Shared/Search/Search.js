import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Router from 'next/router';
import { InputAdornment, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



const Search = ({ searchText, setSearchText }) => {
    const { user, setLoading, loading } = useAuth();
    const [newsData, setNewsData] = React.useState([]);
    const [matchedNews, setMatchedNews] = React.useState([]);

    React.useEffect(() => {
        setLoading(true)
        fetch("/api/news")
            .then(res => res.json())
            .then(data => setNewsData(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [setLoading])


    const handleSearch = () => {
        // fetch search result
        Router.push('/search')

        setMatchedNews(newsData?.filter((data) => data.category.toLowerCase().includes(searchText.toLowerCase())));
        console.log(matchedNews);

        console.log(searchText);
    }

    return (
        <>
            <div className="w-80 mx-auto">
                <TextField onChange={e => setSearchText(e.target.value)}
                    type="text"
                    color='success'
                    placeholder="Search News"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment
                                sx={{ paddingY: '0px' }}
                                position="start">
                                <SearchIcon fontSize='large' onClick={handleSearch} sx={{ color: 'red', cursor: 'pointer' }} />
                            </InputAdornment>
                        )
                    }}
                    variant="outlined" />
            </div>

            <div className=" mx-auto mt-5" style={{ width: '50%' }}>
                {matchedNews.map(news => <div
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
    );
};

export default Search;