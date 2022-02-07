import React from 'react';
import styles from '../../../styles/NavigationBar.module.css';
import useMediaQuery from '../useMediaQuery/useMediaQuery';

const NavigationBar = () => {
    const isMobile = useMediaQuery('(max-width: 500px)');
    return (
        <div>
            {/* Side menu bar */}
            {
                isMobile &&
                <nav className={styles.nav} role="navigation">
                    <div className={styles.clickNav}>
                        <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>

                        <ul className={styles.navData} role="list">
                            <li><a className={styles.link} href="http://dograsweblog.com/" data-title="Home" aria-label="Home">Home</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/nishant-dogra/" data-title="About" aria-label="About">About author</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/expertise/" data-title="My Expertise" aria-label="My Expertise">Expertise</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/articles/" data-title="My Technical articles" aria-label="My Technical articles">Tech Articles</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/moments/" data-title="My twitter moments" aria-label="My twitter moments">Moments</a></li>
                            <li className="separator"></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/force-framework/?utm_medium=DograsWeblog" data-title="Force Framework" aria-label="Force Framework">Force Framework</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/drive/good-time-game/?utm_medium=DograsWeblog" data-title="Don't Waste Good Time" aria-label="Don't Waste Good Time">Dont Waste Good Time</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/drive/quotes-by-dogra/?utm_medium=DograsWeblog" data-title="QuotesByDogra" aria-label="QuotesByDogra">#QuotesByDogra</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/engine/?utm_medium=DograsWeblog" data-title="Force Framework" aria-label="Force Framework">Custom Search Engine</a></li>
                            <li><a className={styles.link} href="http://dograsweblog.com/drive/?utm_medium=DograsWeblog" data-title="DograsWeblog Free Themes" aria-label="DograsWeblog Free Themes">DW Themes</a></li>
                            <li className="separator"></li>
                            <li>
                                <p><strong> © DOGRAS WEBLOG</strong></p>
                            </li>
                        </ul>
                    </div>
                </nav>
            }
        </div>
    );
};

export default NavigationBar;