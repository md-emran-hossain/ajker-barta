import React from 'react';
import Footer from '../components/Shared/Footer/Footer';
import Header from "../components/Shared/Header/Header";
import AboutUs from "../components/AboutUs/AboutUs";
import NavigationBar from '../components/Shared/NavigationBar/NavigationBar';
const about = () => {

    return (
        <div>
         <Header />
         <NavigationBar />
         <AboutUs></AboutUs>
        <Footer />
        </div>
    );
};

export default about;