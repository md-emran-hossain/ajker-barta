import * as React from 'react';
import { Avatar, Box, Menu, Tooltip } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ChartBar as ChartBarIcon } from '../../../icons/chart-bar';
import { Cog as CogIcon } from '../../../icons/cog';
import { Lock as LockIcon } from '../../../icons/lock';
import { Selector as SelectorIcon } from '../../../icons/selector';
import { User as UserIcon } from '../../../icons/user';
import { Users as UsersIcon } from '../../../icons/users';
import { Divider } from '@mui/material';
import { NavItem } from '../NavItem/NavItem';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '../Logo/Logo';
import useAuth from '../../../hooks/useAuth';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


// drawer style //////////////////////////
const drawerWidth = 260;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

/// dashboard navbar /////////////
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: "white",
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
/////////////////

const DashboardHome = ({ children }) => {
    const { admin, user, logOut } = useAuth();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    ///// Side bar content///// 

    React.useEffect(
        () => {
            if (!router.isReady) {
                return;
            }
            if (open) {
                console.log("");
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    const content = (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'white', }} >
                <Box sx={{ alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.04)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', m: 3, px: 3, py: 2, borderRadius: 1 }}>
                    <Logo sx={{ height: 42, width: 42 }} />
                    <NextLink href='/'><Typography color="inherit" variant="subtitle1"  > Ajker Barta</Typography></NextLink>
                </Box>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        mb: 3
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    <NavItem
                        key='Dashboard'
                        icon={(<ChartBarIcon fontSize="small" />)}
                        href={'/dashboard'}
                        title='Dashboard'
                    // setDPanel={setDPanel}
                    />
                    <NavItem
                        key='Account'
                        icon={(<UserIcon fontSize="small" />)}
                        href={'/dashboard/account'}
                        title='Account'
                    />
                    {admin && <>
                        <NavItem
                            key='Employee'
                            icon={(<UsersIcon fontSize="small" />)}
                            href={'/dashboard/users'}
                            title='Employee'
                        />
                        <NavItem
                            key='Add News'
                            icon={(<AddIcon fontSize="small" />)}
                            href={'/dashboard/addNews'}
                            title='Add News'
                        />
                        <NavItem
                            key='Make Pole'
                            icon={(<TuneOutlinedIcon fontSize="small" />)}
                            href={'/dashboard/makePoll'}
                            title='Make Pole'
                        />
                        <NavItem
                            key='Make Admin'
                            icon={(<LockIcon fontSize="small" />)}
                            href={'/dashboard/makeAdmin'}
                            title='Make Admin'
                        />
                    </>}
                    {<NavItem
                        key='My Notes'
                        icon={(<EventNoteIcon fontSize="small" />)}
                        href={'/dashboard/mynotes'}
                        title='My Notes'
                    />}
                    <NavItem
                        key='Settings'
                        icon={(<CogIcon fontSize="small" />)}
                        href={'/dashboard/settings'}
                        title='Settings'
                    />
                    <NavItem
                        key='Wish List'
                        icon={(<CogIcon fontSize="small" />)}
                        href={'/dashboard/wishlist'}
                        title='Wish List'
                    />
                    <NavItem
                        key='Log Out'
                        icon={(<LogoutIcon fontSize="small" />)}
                        href=''
                        title='LogOut'
                        onClick={logOut}
                    />
                </Box>
                <Divider sx={{ borderColor: '#2D3748' }} />
                <Box sx={{ px: 2, py: 3 }} > </Box>
            </Box>
        </>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Dashboard navbar */}
            <AppBar open={open} className="bg-white">
                <Toolbar>
                    <IconButton onClick={handleDrawerClose}
                        sx={{ mr: 2, ...(!open && { display: 'none' }) }}
                        className="fs-2">
                        {theme.direction === 'ltr' ? <CloseIcon fontSize='large' sx={{ color: 'black' }} /> : <CloseIcon fontSize='large' sx={{ color: 'black' }} />}
                    </IconButton>
                    <IconButton
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                        <MenuIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconButton>
                    <br />
                    <div className='container flex items-center justify-between'>
                        <Typography className='text-black font-bold' variant="h5" noWrap component="div">
                            Ajker Barta
                        </Typography>

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
                                    <h5 className='ml-2 cursor-pointer font-bold text-gray-600' onClick={() => router.push('/')} >< HomeIcon />  Home</h5>

                                    <h5 className='ml-2 cursor-pointer font-bold text-gray-600' onClick={logOut}><LogoutIcon /> Logout</h5>
                                </div>
                            </Menu>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Drawer  */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#111827',
                        color: '#FFFFFF',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                {/* Sidebar content  */}
                {content}
            </Drawer>

            {/* Dashboard main */}
            <Main open={open} >
                <div className="pt-20">
                    {children}
                </div>
            </Main>
        </Box>
    );
};
export default DashboardHome;