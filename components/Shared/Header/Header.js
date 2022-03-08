import React, { useEffect } from 'react';
import styles from '../../../styles/NavigationBar.module.css';
import { Box, Tooltip, Menu, Avatar, IconButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import { VscThreeBars } from 'react-icons/vsc'
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


const Header = ({ newses }) => {
    const { user, logOut } = useAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false)
    const recent = newses?.reverse().slice(0, 3)
    const [notification, setNotification] = React.useState(recent)
    const [isShowNotification, setIsShowNotification] = React.useState(false)
    const router = useRouter()
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const clearNotification = () => {
        setNotification(recent)
    }

    return (
        <div className='bg-white sticky md:static top-0 w-full z-50'>
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
                                <li className='flex items-center justify-center'>
                                    <input className='py-2 my-2 bg-gray-100 px-2 outline-0' type="text" placeholder='Search News' /> <SearchIcon fontSize='large' sx={{ color: 'red' }} />
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

                    <div className='sm:flex-1'>
                        <div className='flex items-center gap-2'>
                            <div className='md:hidden'>
                                <VscThreeBars style={{ fontSize: "25px", cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)} />
                            </div>
                            <SearchIcon onClick={() => router.push('/search')} sx={{ color: '', fontSize: '30px', cursor: 'pointer' }} />
                        </div>
                    </div>

                    <div className='flex-1 text-center'>
                        <Link href="/">
                            <a className='md:text-3xl text-2xl uppercase font-serif font-bold'>Ajker <span className='text-red-500'>Barta</span></a>
                        </Link>
                    </div>
                    <div className='sm:flex-1 text-right flex'>
                        <div className='flex items-center justify-end w-full'>
                            <div className="notifyIcon mr-6 relative">
                                <NotificationsNoneOutlinedIcon onClick={() => setIsShowNotification(!isShowNotification)} sx={{ fontSize: 30, cursor: "pointer" }} />
                                {notification?.length > 0 && <p onClick={() => setIsShowNotification(!isShowNotification)} className='absolute bg-red-500 w-5 h-5 rounded-full text-sm text-white flex items-center justify-center -top-1 -right-1 cursor-pointer'>{notification?.length > 9 ? '9+' : `${notification?.length}`}</p>}
                                <div style={{ height: 'auto', maxHeight: "70vh" }} className={isShowNotification ? 'showNotification absolute w-80 z-50 right-0 bg-white px-4 pt-4 border h-auto overflow-scroll' : 'absolute w-80 z-50 right-0 bg-white px-4 pt-4 border h-auto overflow-scroll hidden'} >
                                    {
                                        notification?.length || <h1 className='text-lg text-blue-500 text-left mt-3.5'>You have no notification</h1>
                                    }
                                    {
                                        notification?.map(item => <div key={Math.floor(Math.random() * 1000000)}>
                                            <h1 onClick={() => router.push(`/${item.category}/${item.subCategory}/${item?._id}`)} className='border-b text-left my-2 font-medium font-serif cursor-pointer hover:text-red-500 transition-colors duration-300'>{item?.heading}</h1>
                                        </div>)
                                    }
                                    {notification?.length ? <button onClick={clearNotification} className='w-full py-1.5 bg-blue-500 text-white'>Mark As Read</button> : ''}
                                </div>
                            </div>
                            {
                                user.email ?
                                    <>
                                        <Box sx={{ flexGrow: 0 }}>
                                            <Tooltip title="Open settings">
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                    <Avatar alt="Remy Sharp" src={user?.photoURL || "https://i.ibb.co/ScbTKWS/admin.png"} />
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                sx={{ mt: '45px', width: '500px' }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: 'top', horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top', horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu} >
                                                <div onClick={handleCloseUserMenu} className="flex flex-col px-3 py-2 w-48">
                                                    {user.email && <h5 className='ml-2 cursor-pointer font-bold text-gray-600' onClick={() => router.push('/account')} ><PersonIcon />  Profile</h5>}

                                                    {user.email && <h5 className='ml-2 cursor-pointer my-4 font-bold text-gray-600' onClick={() => router.push("/dashboard")}><DashboardIcon /> Dashboard</h5>}
                                                    <h5 className='ml-2 cursor-pointer font-bold text-gray-600' onClick={logOut}><LogoutIcon /> Logout</h5>
                                                </div>
                                            </Menu>
                                        </Box>
                                    </>
                                    :
                                    <button onClick={() => router.push('/login')} className='sm:py-1.5 py-1 px-4 sm:px-6 bg-red-500 hover:bg-red-400 transition-bg duration-300 rounded-md text-white text-lg font-medium'>Login</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;