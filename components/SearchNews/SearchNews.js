import { Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Header from '../Shared/Header/Header';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { useRouter } from 'next/router';

const SearchNews = ({ newses }) => {
    const [searchText, setSearchText] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([]);

    const handleSearch = () => {
        setSearchResult(newses.filter(news => (news.category.toLowerCase() || news.heading.toLowerCase()).includes(searchText.toLowerCase())));
        console.log(searchResult);
    }
    const router = useRouter();

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

                {
                    !searchResult.length ? <h1 className='text-red-500 text-center font-semibold text-2xl'>No Result Found Please Search Again By Category and Headline</h1>
                        :

                        <div className=" mx-auto mt-8 w-6/12">
                            {searchResult?.map(news => <div
                                key={news._id}
                                className='flex my-6 border-b-2 pb-2 cursor-pointer'
                                onClick={() => router.push(`/${news.category}/${news.subCategory}/${news._id}`)}>
                                <div className='' >
                                    <h2 className='md:text-2xl text-xl font-semibold hover:text-red-500'>{news?.heading}</h2>
                                    <p>{news.publishedDate}</p>
                                </div>
                                <img className='w-4/12 ml-auto' src={news?.images?.img1} alt="" />
                            </div>)
                            }
                        </div>

                }
            </Container>

        </>
    );
};

export default SearchNews;