import React from 'react';
import Customers from '../../components/Dashboard/Customers/Customers';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';

const users = () => {
    return (
        <>
            <DashboardHome>
                <Customers />
            </DashboardHome>
        </>
    );
};

export default users;