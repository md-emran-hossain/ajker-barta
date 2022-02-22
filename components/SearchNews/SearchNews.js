import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';


const SearchNews = () => {
    const { user, setLoading, loading } = useAuth();
    const [newsData, setNewsData] = useState([]);
    // console.log(newsData)

    useEffect(() => {
        setLoading(true)
        fetch("/api/news")
            .then(res => res.json())
            .then(data => setNewsData(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [setLoading])

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const matchedNews = newsData?.filter((data) => data.category.toLowerCase().includes(searchText.toLowerCase()));

        console.log(matchedNews);
        e.target.value
    };

    return (
        <div>
            {loading ? <h1 className="text-center pt-18 text-5xl">Loading....</h1> :
                <h2 className="text-4xl text-center font-bold pt-14">this is Search news: {newsData.length} </h2>}

            <div className="mt-5 w-72 mx-auto">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input onBlur={handleSearch} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
            </div>

        </div>
    );
};

export default SearchNews;