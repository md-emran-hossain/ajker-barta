import React from 'react';
import styles from '../../../styles/NavigationBar.module.css';
import { Box, Tooltip, Menu, Avatar, IconButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Router from 'next/router';
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import { VscThreeBars } from 'react-icons/vsc'

const Header = () => {
    const { user, logOut } = useAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const goLoginPage = () => {
        Router.push("/login")
    }
    return (
        <div className='bg-white sticky md:static z-50 top-0 w-full'>
            <div className='container' >
                <div className="flex items-center justify-between py-4">
                    < nav className={!isOpen ? `${styles.sideNav}` : `${styles.sideNav} ${styles.show}`}>
                        <div onClick={() => setIsOpen(!isOpen)} className="absolute right-5 top-6 w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full text-lg cursor-pointer">
                            <FaTimes />
                        </div>
                        <div>
                            <ul className='px-6 py-8'>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg'>
                                    <Link href='/'><a className='text-2xl font-serif font-semibold'>AJKER <span className='text-red-500'>BARTA</span></a></Link>
                                </li>
                                <li>
                                    <input className='py-2 my-2 bg-gray-100 px-2 outline-0' type="text" placeholder='Search News' />
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/bangladesh">Bangladesh</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/international" data-title="About" aria-label="About">International</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/sports" data-title="My Expertise" aria-label="My Expertise">Sports</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/scienceTechnology" data-title="My Technical articles" aria-label="My Technical articles">Science & Technology</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/business" data-title="My twitter moments" aria-label="My twitter moments">Business</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/entertainment" data-title="Don't Waste Good Time" aria-label="Don't Waste Good Time">Entertainment</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/ifestyle" data-title="QuotesByDogra" aria-label="QuotesByDogra">Lifestyle</Link></li>
                                <li className='text-lg mt-5'>
                                    <p className='ml-5'><strong> © AJKER BARTA</strong></p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="sm:flex-1 text-2xl md:hidden cursor-pointer">
                        <VscThreeBars onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className="flex-1 hidden md:block">
                        <input className='py-2 bg-gray-100 px-2 outline-0' type="text" placeholder='Search News' />
                    </div>
                    <div className='sm:flex-1 text-center'>
                        <Link href="/">
                            <a className='md:text-3xl text-2xl uppercase font-serif font-bold'>Ajker <span className='text-red-500'>Barta</span></a>
                        </Link>
                    </div>
                    <div className='sm:flex-1 text-right'>
                        {
                            user.email ? <>

                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src={user?.photoURL || "https://i.ibb.co/ScbTKWS/admin.png"} />
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
                                            <h5 className='cursor-pointer mb-3 lg:text-2xl text-1xl font-bold text-gray-600' >Profile</h5>

                                            <h5 className='cursor-pointer mb-3 lg:text-2xl text-1xl font-bold text-gray-600'>Account</h5>

                                            <h5 className='cursor-pointer mb-3 lg:text-2xl text-1xl font-bold text-gray-600' onClick={logOut}>Logout</h5>
                                        </div>
                                    </Menu>
                                </Box>
                            </>
                                :
                                <button onClick={goLoginPage} className='sm:py-1.5 py-1 px-4 sm:px-6 bg-red-500 hover:bg-red-400 transition-bg duration-300 rounded-md text-white text-lg font-medium'>Login</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;