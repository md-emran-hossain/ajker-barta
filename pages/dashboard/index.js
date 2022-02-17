import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import useAuth from '../../hooks/useAuth';

const Index = () => {
    const { user, loading, setLoading } = useAuth()
    const router = useRouter()
    setLoading(true)
    React.useEffect(() => {
        // if (!user.email) {
        //     return router.push('/login')
        // }
    }, [user.email, router])
    setLoading(false)

    return (
        <div>
            {loading ? <h1 className='mt-12 w-24 mx-auto'><CircularProgress /></h1> :
                <DashboardHome />}
        </div>
    );
};

export default Index;