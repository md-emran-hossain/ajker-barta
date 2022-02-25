import React from 'react';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import Settings from '../../components/Dashboard/Settings/Settings';

const settings = () => {
    return (
        <div>
            <DashboardHome>
                <Settings />
            </DashboardHome>
        </div>
    );
};

export default settings;