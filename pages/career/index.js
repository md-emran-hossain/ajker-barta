import React from 'react'
import Footer from '../../components/Shared/Footer/Footer';
import NavigationBar from '../../components/Shared/NavigationBar/NavigationBar';
import Career from '../../components/Career/Career';
import Header from '../../components/Shared/Header/Header';


export default function index() {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Career />
            <Footer />
        </div>
    )
}
