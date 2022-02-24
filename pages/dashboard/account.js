import React from 'react';
import Account from '../../components/Dashboard/Account/Accoutn';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
const account = () => {
    return (
        <div className=''>
            <DashboardHome>
                <Account />
            </DashboardHome>

        </div>
    );
};

export default account;