import axios from 'axios';
import React from 'react';
import SearchNews from '../../components/SearchNews/SearchNews';

const searchNews = ({ newses }) => {
    console.log(newses)
    return (
        <div>
            <SearchNews newses={newses} />
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
    return {
        props: {
            newses: res.data,
        },
        revalidate: 10
    };
};

export default searchNews;
