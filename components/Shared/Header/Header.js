import React from 'react';
import styles from '../../../styles/NavigationBar.module.css';
import useMediaQuery from '../useMediaQuery/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link'

const Header = () => {

    const isMobile = useMediaQuery('(max-width: 765px)');


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));



    return (
        <div className={isMobile ? " fixed bg-gray-100 drop-shadow w-full" : "md:container mx-auto"}>
            <div className='' >
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


                                <ul className={styles.navData} role="list" style={{ height: '100vh', paddingTop: '110px', }}>
                                    <li><h2 className='text-center text-2xl font-bold text-red-600'>AJKER BARTA</h2></li>
                                    <li><Link className={styles.link} href="/bangladesh">Bangladesh</Link></li>
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
                                        <p className='ml-5'><strong> © AJKER BARTA</strong></p>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    }
                </div>
                <div className=''>
                    <div className="grid grid-cols-12 gap-2 py-5 place-content-around  ">

                        {
                            !isMobile &&

                            <Toolbar className='place-self-center'>
                                <Search className='bg-gray-200'>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Toolbar>

                        }

                        <div className='place-self-center col-span-10'>
                            <h1 className='text-stone-900 text-4xl md:text-5xl text-center font-bold'>Ajker Barta</h1>
                        </div>

                        <div className='place-self-center '>
                            {
                                !isMobile ? <button className={`${styles.loginButton} ${styles.log} "hidden "`}>Login</button>
                                    :
                                    <h2><LoginIcon></LoginIcon></h2>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;