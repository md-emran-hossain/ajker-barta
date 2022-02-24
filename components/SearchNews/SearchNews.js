import { CircularProgress } from '@mui/material';
import React from 'react'
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import Search from '../Shared/Search/Search';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const SearchNews = () => {
    const { loading } = useAuth();

    const [searchText, setSearchText] = React.useState("");


    return (
        <>
            {/* <Header />
            <NavigationBar /> */}
            {loading && <h1 className="text-center  text-5xl"><CircularProgress fontSize="large " /> </h1>}

            <h2 className="text-4xl text-center font-bold pt-3">Search Result By News </h2>
            <div className="mt-5 mx-auto">
                <Search searchText={searchText} setSearchText={setSearchText} />
            </div>

        </>
    );
};

export default SearchNews;