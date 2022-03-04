import React from 'react';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from '../../components/Dashboard/MakeAdmin/MakeAdmin';

const makeAdmin = () => {
    return (
        <div className=''>
            <DashboardHome>
                <MakeAdmin />
            </DashboardHome>

        </div>
    );
};

export default makeAdmin;