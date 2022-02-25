import { Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Header from '../Shared/Header/Header';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
const SearchNews = () => {

    const [newsData, setNewsData] = React.useState([]);
    const [searchText, setSearchText] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/news")
            .then(res => res.json())
            .then(data => setNewsData(data))
            .catch(err => console.log(err))
    }, [])


    const handleSearch = () => {
        setSearchResult(newsData.filter(data => (data.category.toLowerCase() || data.heading.toLowerCase()).includes(searchText.toLowerCase())));
        console.log(searchResult);
    }
    return (
        <>
            <Header />
            <NavigationBar />
            <Container maxWidth="lg">
                <h2 className="text-4xl text-center font-bold pt-3 mb-5">Search Result By News </h2>
                <div className=" mx-auto relative">
                    <TextField onChange={e => setSearchText(e.target.value)}
                        sx={{ width: '100%' }}
                        type="text"
                        color='success'
                        placeholder="Search News"
                        variant="outlined" />
                    <SearchIcon onClick={handleSearch} sx={{ color: 'red', cursor: 'pointer', position: 'absolute', right: '10px', top: '5px', fontSize: '50px' }} />
                </div>

                <div className=" mx-auto mt-8" style={{ width: '50%' }}>
                    {searchResult?.map(news => <div
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
            </Container>

        </>
    );
};

export default SearchNews;