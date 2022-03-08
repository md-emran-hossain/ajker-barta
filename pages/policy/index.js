import React from 'react';
import TermsAndConditions from '../../components/Policy/TermsAndConditions';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';
import NavigationBar from '../../components/Shared/NavigationBar/NavigationBar';

const Policy = () => {
    return (
        <>
            <Header></Header>
            <NavigationBar/>
            <TermsAndConditions />
            <Footer />           
        </>
    );
};

export default Policy;