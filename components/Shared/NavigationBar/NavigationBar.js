import React from 'react';
import styles from '../../../styles/NavigationBar.module.css';
import useMediaQuery from '../useMediaQuery/useMediaQuery';






const NavigationBar = () => {
    const isMobile = useMediaQuery('(max-width: 765px)');


    return (
        <div className="sticky top-0 z-30 w-full md:grid place-content-center px-2 py-4 bg-white sm:px-4 shadow-xl">

            {/* Side menu bar */}
            {
                isMobile &&
                <nav className={styles.nav} role="navigation">
                    <div className={styles.clickNav}>
                        <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>


                        <ul className={styles.navData} role="list" style={{ height: '100vh', paddingTop: '150px' }}>
                            <li><h2 className='text-center text-2xl font-bold text-red-600'>AJKER BARTA</h2></li>
                            <li><a className={styles.link} href="" data-title="Home" aria-label="Home">Bangladesh</a></li>
                            <li><a className={styles.link} href="" data-title="About" aria-label="About">International</a></li>
                            <li><a className={styles.link} href="" data-title="My Expertise" aria-label="My Expertise">Sports</a></li>
                            <li><a className={styles.link} href="" data-title="My Technical articles" aria-label="My Technical articles">Opinion</a></li>
                            <li><a className={styles.link} href="" data-title="My twitter moments" aria-label="My twitter moments">Business</a></li>
                            <li className="separator"></li>
                            <li><a className={styles.link} href="" data-title="Force Framework" aria-label="Force Framework">Youth</a></li>
                            <li><a className={styles.link} href="" data-title="Don't Waste Good Time" aria-label="Don't Waste Good Time">Entertainment</a></li>
                            <li><a className={styles.link} href="" data-title="QuotesByDogra" aria-label="QuotesByDogra">Lifestyle</a></li>
                            <li><a className={styles.link} href="" data-title="Force Framework" aria-label="Force Framework">Custom Search Engine</a></li>
                            <li><a className={styles.link} href="" data-title="DograsWeblog Free Themes" aria-label="DograsWeblog Free Themes">DEV HEROS</a></li>
                            <li className="separator"></li>
                            <li>
                                <p><strong> © AJKER BARTA</strong></p>
                            </li>
                        </ul>
                    </div>
                </nav>
            }


            {!isMobile &&
                <div className="flex items-center space-x-1">
                    <ul className=" space-x-2 md:inline-flex">
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>Bangladesh</a></li>
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>International</a></li>
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>Sports</a></li>
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>Opinion</a></li>
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>Business</a></li>
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>Youth</a></li>
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>Entertainment</a></li>
                        <li><a href="#" className={`${styles.link} "pr-1 font-semibold text-gray-600 rounded"`}>Lifestyle</a></li>
                    </ul>
                </div>}
        </div>

    );
};

export default NavigationBar;