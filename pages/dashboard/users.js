import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Customers from '../../components/Dashboard/Customers/Customers';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import useAuth from '../../hooks/useAuth';

const Users = () => {
    const { admin, user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (loading) {
            return <div>Nothing</div>
        }
        if (!admin || !user.email) {
            router.push({
                pathname: '/login',
                query: { from: router.pathname }
            })
        }
    }, [loading, user.email, router, admin])
    return (
        <>
            <DashboardHome>
                <Customers />
            </DashboardHome>
        </>
    );
};

export default Users;