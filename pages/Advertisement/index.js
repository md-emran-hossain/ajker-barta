import React from 'react';
import Advertisement from '../../components/Advertisement/Advertisement';
import Header from '../../components/Shared/Header/Header';
import NavigationBar from '../../components/Shared/NavigationBar/NavigationBar';
const index = () => {
    return (
        <div>
            <Header />
            <NavigationBar/>
            <Advertisement/>
        </div>
    );
};

export default index;