import React, { useEffect } from 'react'
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome'
import ManageNews from '../../components/Dashboard/ManageNews/ManageNews'
import axios from 'axios';
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router';

export default function ManageNewsRoute({ englishNews,
    bengaliNews }) {
    const { admin, user, loading } = useAuth()
    const router = useRouter()

    // useEffect(() => {
    //     if (loading) {
    //         return <div>Nothing</div>
    //     }
    //     if (!admin || !user.email) {
    //         router.push({
    //             pathname: '/login',
    //             query: { from: router.pathname }
    //         })
    //     }
    // }, [loading, user.email, router, admin])
    return (
        <div>
            <DashboardHome>
                <ManageNews bengaliNews={bengaliNews} englishNews={englishNews} />
            </DashboardHome>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
    const bengali = await axios.get(`https://ajker-barta.vercel.app/api/bnnews`);
    return {
        props: {
            englishNews: res.data,
            bengaliNews: bengali.data,
        },
        revalidate: 10
    };
};
