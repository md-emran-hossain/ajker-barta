import Link from 'next/link';
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
        <div className={isSticky ? "navbar navbar-bg-color hidden sticky top-0 z-30 w-full md:grid place-content-center px-2 py-4 bg-gray-100 sm:px-4 drop-shadow border-y border-gray-300" : "navbar hidden sticky top-0 z-30 w-full md:grid place-content-center px-2 py-8 sm:px-4 border-y border-gray-300 mb-5"}>
            {!isMobile &&
                <div className=" flex items-center" >
                    <ul className=" space-x-4 md:inline-flex">
                        <li><Link href="bangladesh" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>Bangladesh</Link></li>
                        <li><Link href="international" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>International</Link></li>
                        <li><Link href="sports" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>Sports</Link></li>
                        <li><Link href="" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>Science & Technology</Link></li>
                        <li><Link href="business" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>Business</Link></li>
                        <li><Link href="coronavirus" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>Coronavirus</Link></li>
                        <li><Link href="entertainment" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>Entertainment</Link></li>
                        <li><Link href="lifestyle" className={`${styles.link} "pr-1 font-semibold text-gray-600"`}>Lifestyle</Link></li>
                    </ul>
                </div>
            }
        </div>

    );
};

export default NavigationBar;