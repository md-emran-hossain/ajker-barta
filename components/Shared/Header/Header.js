import React from 'react';
import styles from '../../../styles/NavigationBar.module.css';
import useMediaQuery from '../useMediaQuery/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Toolbar, Box, Tooltip, Menu, MenuItem, Avatar, IconButton, Button, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import useAuth from '../../../hooks/useAuth';
import Router from 'next/router';
// import Link from 'next/link';



const Header = () => {
    const { user, logOut } = useAuth();
    const isMobile = useMediaQuery('(max-width: 765px)');
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };





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

    const goLoginPage = () => {
        Router.push("/login")
    }

    return (
        <div className={isMobile ? " fixed bg-gray-100 drop-shadow w-full" : " bg-white w-full"}>
            <div className=' container mx-auto' >
                <div className="grid grid-cols-12 gap-2 py-5 place-content-between  ">

                    {/* Side menu bar */}
                    {
                        isMobile &&
                        <nav className={`${styles.nav} ""`} role="navigation">
                            <div className={`${styles.clickNav} "col-span-3 place-self-center"`}>
                                <input type="checkbox" />

                                <span></span>
                                <span></span>
                                <span></span>


                                <ul className={styles.navData} role="list" style={{ height: '100vh', paddingTop: '110px', }}>
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
                                        <p className='ml-5'><strong> © AJKER BARTA</strong></p>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    }

                    {
                        !isMobile &&

                        <Toolbar className='col-span-3 place-self-center'>
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

                    <div className=' col-span-6'>
                        <h1 className='text-gray-600 text-3xl md:text-5xl text-center font-bold lg:ml-0 ml-5'>AJKER BARTA</h1>
                    </div>

                    <div className=' col-span-3   place-self-center'>
                        {
                            user.email ? <>

                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src={user.photoURL || "https://i.ibb.co/ScbTKWS/admin.png"} />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <div onClick={handleCloseUserMenu} className="flex flex-col px-3 w-36">
                                            <h5 style={{ cursor: 'pointer' }} className='mb-3 lg:text-2xl text-1xl font-bold text-gray-600' >Profile</h5>

                                            <h5 style={{ cursor: 'pointer' }} className='mb-3 lg:text-2xl text-1xl font-bold text-gray-600'>Account</h5>

                                            <h5 style={{ cursor: 'pointer' }} className='mb-3 lg:text-2xl text-1xl font-bold text-gray-600' onClick={logOut}>Logout</h5>
                                        </div>
                                    </Menu>
                                </Box>
                            </>
                                :
                                !isMobile ? <button onClick={goLoginPage} className={`${styles.loginButton} ${styles.log} "hidden "`}>Login</button>
                                    :
                                    <h2 onClick={goLoginPage} style={{ cursor: 'pointer' }}><LoginIcon></LoginIcon></h2>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;