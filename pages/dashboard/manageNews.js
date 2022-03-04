import React from 'react';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import Newses from '../../components/Dashboard/Newses/Newses';

const manageNews = () => {
    return (
        <>
            <DashboardHome>
                <Newses />
            </DashboardHome>
        </>
    );
};

export default manageNews;