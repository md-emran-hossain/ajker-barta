import React from 'react';
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
import LanguageVersion from '../../LanguageVersion/LanguageVersion';


const Header = () => {
    const { user, logOut, toggleLanguage } = useAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false)
    const router = useRouter()
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                                    <Link href='/'><a className='text-2xl font-serif font-semibold'>{toggleLanguage ? "আজকের" : "AJKER"} <span className='text-red-500'>{toggleLanguage ? "বার্তা" : "BARTA"}</span></a></Link>
                                </li>
                                <li className='flex items-center justify-center'>
                                    <input className='py-2 my-2 bg-gray-100 px-2 outline-0' type="text" placeholder='Search News' /> <SearchIcon fontSize='large' sx={{ color: 'red' }} />
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/bangladesh">{toggleLanguage ? "বাংলাদেশ" : "Bangladesh"}</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/international" data-title="About" aria-label="About">{toggleLanguage ? "বিশ্ব" : "International"}</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/sports" data-title="My Expertise" aria-label="My Expertise">{toggleLanguage ? "খেলা" : "Sports"}</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/scienceTechnology" data-title="My Technical articles" aria-label="My Technical articles">{toggleLanguage ? "বিজ্ঞান ও প্রযুক্তি" : "Science & Technology"}</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/business" data-title="My twitter moments" aria-label="My twitter moments">{toggleLanguage ? "বাণিজ্য" : "Business"}</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/coronavirus" data-title="Don't Waste Good Time" aria-label="Don't Waste Good Time">{toggleLanguage ? "করোনাভাইরাস" : "Coronavirus"}</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/entertainment" data-title="Don't Waste Good Time" aria-label="Don't Waste Good Time">{toggleLanguage ? "বিনোদন" : "Entertainment"}</Link></li>
                                <li onClick={() => setIsOpen(!isOpen)} className='text-lg font-medium font-serif text-gray-500 hover:text-gray-700 py-1'><Link href="/ifestyle" data-title="QuotesByDogra" aria-label="QuotesByDogra">{toggleLanguage ? "  লাইফস্টাইল" : "Lifestyle"}</Link></li>
                                <li className='text-lg mt-5'>
                                    <p className='ml-5'><strong> &copy; {toggleLanguage ? "আজকের বার্তা" : "AJKER BARTA"}</strong></p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="sm:flex-1 text-2xl md:hidden cursor-pointer">
                        <VscThreeBars onClick={() => setIsOpen(!isOpen)} />
                    </div>

                    <div className='md:w-96'>
                        <SearchIcon onClick={() => router.push('/search')} sx={{ color: '', fontSize: '40px', cursor: 'pointer' }} />
                    </div>

                    <div className='sm:flex-1 text-center'>
                        <Link href="/">
                            <a className='md:text-3xl text-2xl uppercase font-serif font-bold'>{toggleLanguage ? "আজকের" : "AJKER"} <span className='text-red-500'>{toggleLanguage ? "বার্তা" : "BARTA"}</span></a>
                        </Link>
                    </div>
                    <div className='sm:flex-1 text-right'>
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

                        <div className='mt-3'>
                            <LanguageVersion />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;