import React from 'react';
import Careeritem from '../components/Career/Careeritem';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';
import NavigationBar from '../components/Shared/NavigationBar/NavigationBar';

const Career = () => {
    return (
        <>
         <Header />
         <NavigationBar />
            <Careeritem></Careeritem>
            <Footer />
        </>
    );
};

export default Career;