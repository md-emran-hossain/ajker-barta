import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Router from 'next/router';
import { TextField } from '@mui/material';



const Search = ({ displayData, setDisplayData }) => {
    // const [newsData, setNewsData] = useState([]);
    // const [searchText, setSearchText] = useState("");

    // useEffect(() => {
    //     fetch("/api/news")
    //         .then(res => res.json())
    //         .then(data => setNewsData(data))
    //         .catch(err => console.log(err))
    // }, [])


    // const handleSearch = () => {
    //     console.log(newsData)
    //     const searchResult = newsData.filter(data => (data.category.toLowerCase() || data.heading.toLowerCase()).includes(searchText.toLowerCase()));
    //     console.log(searchResult);
    //     Router.push('/search')
    // }

    return (
        <>
            {/* <div className="w-52 md:w-80 mx-auto relative">
                <TextField onChange={e => setSearchText(e.target.value)}
                    sx={{ width: '100%' }}
                    type="text"
                    color='success'
                    placeholder="Search News"
                    variant="outlined" />
                <SearchIcon onClick={handleSearch} sx={{ color: 'red', cursor: 'pointer', position: 'absolute', right: '10px', top: '5px', fontSize: '50px' }} />
            </div> */}

        </>
    );
};

// export async function getServerSideProps() {
//     const res = await fetch('/api/news')
//     const newsData = await res.json()

//     return {
//         props: {
//             newsData,
//         },
//     }
// }

export default Search;