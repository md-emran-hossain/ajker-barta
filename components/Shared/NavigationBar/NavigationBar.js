import React from 'react';
import styles from '../../../styles/NavigationBar.module.css';
import useMediaQuery from '../useMediaQuery/useMediaQuery';


const NavigationBar = () => {
    const isMobile = useMediaQuery('(max-width: 765px)');
    const [isSticky, setSticky] = React.useState(false);


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (

        <div className={isSticky ? "navbar hidden sticky top-0 z-30 w-full md:grid place-content-center px-2 py-4 bg-gray-100 sm:px-4 drop-shadow border-y border-gray-300 mb-16" : "navbar hidden sticky top-0 z-30 w-full md:grid place-content-center px-2 py-8 sm:px-4 border border-gray-300 mb-16"}>
            {!isMobile &&

                <div className=" flex items-center space-x-1 " >
                    {(isSticky && !isMobile) && <h2 className='text-2xl font-bold text-gray-500 text-start '>AJKER BARTA</h2>}
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
                </div>
            }
        </div>

    );
};

export default NavigationBar;