import { CircularProgress, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import { Budget } from '../../components/Dashboard/DashboardHomeContent/Budget';
import { Sales } from '../../components/Dashboard/DashboardHomeContent/Sales';
import { TasksProgress } from '../../components/Dashboard/DashboardHomeContent/TasksProgress';
import { TotalCustomers } from '../../components/Dashboard/DashboardHomeContent/TotalCustomers';
import { TotalProfit } from '../../components/Dashboard/DashboardHomeContent/TotalProfit';
import { TrafficByDevice } from '../../components/Dashboard/DashboardHomeContent/TrafficByDevice';
import useAuth from '../../hooks/useAuth';

const Index = () => {
    const { user, loading } = useAuth()
    const router = useRouter()
    React.useEffect(() => {
        if (loading) {
            return <div>Nothing</div>
        }
        if (!user.email) {
            return router.push('/login')
        }
    }, [user.email, router, loading])
    return (
        <div>

            <DashboardHome>
                <Container maxWidth={"lg"}>
                    <div className='grid grid-cols-12 gap-2 md:px-5 lg:px-5 px-2'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'><Budget /></div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'><TotalCustomers /></div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'> <TasksProgress /></div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'><TotalProfit sx={{ height: '100%' }} /> </div>
                        <div className='col-span-12 md:col-span-12 lg:col-span-8'><Sales /></div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-4'><TrafficByDevice sx={{ height: '100%' }} /> </div>
                    </div>
                </Container>
            </DashboardHome>
        </div>
    );
};

export default Index;