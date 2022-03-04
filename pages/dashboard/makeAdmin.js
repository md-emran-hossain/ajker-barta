import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from '../../components/Dashboard/MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';

const MakeAdminRoute = () => {
    const { admin, user, loading } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (loading) {
            return <div>Nothing</div>
        }
        if (!user.email || !admin) {
            router.push({
                pathname: '/login',
                query: { from: router.pathname }
            })
        }
    }, [loading, user.email, router, admin])
    return (
        <div className=''>
            <DashboardHome>
                <MakeAdmin />
            </DashboardHome>

        </div>
    );
};

export default MakeAdminRoute;