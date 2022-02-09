import styles from '../../styles/Layout.module.css'
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;