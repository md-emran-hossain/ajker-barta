import React from 'react';
import Advertisement from '../../components/Advertisement/Advertisement';
import Header from '../../components/Shared/Header/Header';
import NavigationBar from '../../components/Shared/NavigationBar/NavigationBar';
import Footer from '../../components/Shared/Footer/Footer';

const index = () => {
    return (
        <div>
            <Header />
            <NavigationBar/>
            <Advertisement/>
            <Footer/>
        </div>
    );
};

export default index;