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
// export async function getStaticPaths() {
//     return {
//         paths: [], //indicates that no page needs be created at build time
//         fallback: 'blocking' //indicates the type of fallback
//     }
// }

export default searchNews;
