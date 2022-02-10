import styles from '../../styles/Layout.module.css'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;