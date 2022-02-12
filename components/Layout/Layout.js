import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Header from '../Shared/Header/Header'
const Layout = ({ children }) => {
    return (
        <div className="container mx-auto">
            <Header />
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;