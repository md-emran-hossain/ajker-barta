import * as React from 'react';
import { Box } from '@mui/material';
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
import { ShoppingBag as ShoppingBagIcon } from '../../../icons/shopping-bag';
import { User as UserIcon } from '../../../icons/user';
import { UserAdd as UserAddIcon } from '../../../icons/user-add';
import { Users as UsersIcon } from '../../../icons/users';
import { XCircle as XCircleIcon } from '../../../icons/x-circle';
import { Divider } from '@mui/material';
import { NavItem } from '../NavItem/NavItem';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '../Logo/Logo';
import { Budget } from '../DashboardHomeContent/Budget';
import { TotalCustomers } from '../DashboardHomeContent/TotalCustomers';
import { TasksProgress } from '../DashboardHomeContent/TasksProgress';
import { TotalProfit } from '../DashboardHomeContent/TotalProfit';
import { Sales } from '../DashboardHomeContent/Sales';
import { TrafficByDevice } from '../DashboardHomeContent/TrafficByDevice';
import { LatestProducts } from '../DashboardHomeContent/LatestProducts';
import { LatestOrders } from '../DashboardHomeContent/LatestOrder';
import Customers from '../Customers/Customers';
import Account from '../Account/Accoutn';
import Settings from '../Settings/Settings';
import Newses from '../Newses/Newses';


const items = [
    {
        href: '/dashboard',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Dashboard'
    },
    {
        href: '/dashboard/account',
        icon: (<UserIcon fontSize="small" />),
        title: 'Account'
    },
    {
        href: '/dashboard/customers',
        icon: (<UsersIcon fontSize="small" />),
        title: 'Users'
    },
    {
        href: '/dashboard/newses',
        icon: (<ShoppingBagIcon fontSize="small" />),
        title: 'Newses'
    },
    {
        href: '/dashboard/settings',
        icon: (<CogIcon fontSize="small" />),
        title: 'Settings'
    },
    {
        href: '/login',
        icon: (<LockIcon fontSize="small" />),
        title: 'Login'
    },
    {
        href: '/login',
        icon: (<UserAddIcon fontSize="small" />),
        title: 'Register'
    }
];





// drawer style //////////////////////////

const drawerWidth = 260;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
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

const DashboardHome = () => {
    const [dPanel, setDPanel] = React.useState("")
    console.log(dPanel)



    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    ///// Side bar content///// 
    const router = useRouter();

    React.useEffect(
        () => {
            if (!router.isReady) {
                return;
            }

            if (open) {
                // onClose?.();
                console.log("");
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    color: 'white',
                }}
            >
                <div>
                    <Box sx={{ p: 3 }}>
                        <NextLink
                            href="/"
                            passHref
                        >
                            <a>
                                <Logo
                                    sx={{
                                        height: 42,
                                        width: 42
                                    }}
                                />
                            </a>
                        </NextLink>
                    </Box>
                    <Box sx={{ px: 2 }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: 3,
                                py: '11px',
                                borderRadius: 1
                            }}
                        >
                            <div>
                                <Typography
                                    color="inherit"
                                    variant="subtitle1"
                                >
                                    Ajker Barta
                                </Typography>
                                <Typography
                                    color="neutral.400"
                                    variant="body2"
                                >
                                    Update
                                    {' '}
                                    : Newses
                                </Typography>
                            </div>
                            <SelectorIcon
                                sx={{
                                    color: 'neutral.500',
                                    width: 14,
                                    height: 14
                                }}
                            />
                        </Box>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        my: 3
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {items.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                            setDPanel={setDPanel}
                        />
                    ))}
                </Box>
                <Divider sx={{ borderColor: '#2D3748' }} />
                <Box
                    sx={{
                        px: 2,
                        py: 3
                    }}
                >

                </Box>
            </Box>
        </>
    );



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Dashboard navbar */}

            <AppBar open={open} className="bg-white">
                <Toolbar className="d-flex align-items-center">
                    <IconButton onClick={handleDrawerClose}
                        sx={{ mr: 2, ...(!open && { display: 'none' }) }}
                        className="fs-2">
                        {theme.direction === 'ltr' ? <CloseIcon className="text-4xl" /> : <CloseIcon className="text-4xl" />}
                    </IconButton>
                    <IconButton
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}

                    >
                        <MenuIcon className="text-4xl" />
                    </IconButton>
                    <br />
                    <Typography className='text-black font-bold' variant="h6" noWrap component="div">
                        AJKER BARTA
                    </Typography>
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
                {
                    dPanel === "/dashboard" ? <div className='grid grid-cols-12 gap-2 md:px-5 lg:px-5 px-2 pt-20'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'><Budget /></div>

                        <div className='col-span-12 md:col-span-6 lg:col-span-3'><TotalCustomers /></div>

                        <div className='col-span-12 md:col-span-6 lg:col-span-3'> <TasksProgress /></div>

                        <div className='col-span-12 md:col-span-6 lg:col-span-3'><TotalProfit sx={{ height: '100%' }} /> </div>

                        <div className='col-span-12 md:col-span-12 lg:col-span-8'><Sales /></div>

                        <div className='col-span-12 md:col-span-6 lg:col-span-4'><TrafficByDevice sx={{ height: '100%' }} /> </div>

                        <div className='col-span-12 md:col-span-6 lg:col-span-4'><LatestProducts sx={{ height: '100%' }} /></div>

                        <div className='col-span-12 md:col-span-12 lg:col-span-8'><LatestOrders /></div>
                    </div>

                        :
                        dPanel === "/dashboard/account" ? <Account />

                            :

                            dPanel === "/dashboard/customers" ? <Customers />

                                :
                                dPanel === "/dashboard/newses" ? <Newses />


                                    : dPanel === "/dashboard/settings" ? <Settings />


                                        :
                                        <div className='grid grid-cols-12 gap-2 md:px-5 lg:px-5 px-2 pt-20'>
                                            <div className='col-span-12 md:col-span-6 lg:col-span-3'><Budget /></div>

                                            <div className='col-span-12 md:col-span-6 lg:col-span-3'><TotalCustomers /></div>

                                            <div className='col-span-12 md:col-span-6 lg:col-span-3'> <TasksProgress /></div>

                                            <div className='col-span-12 md:col-span-6 lg:col-span-3'><TotalProfit sx={{ height: '100%' }} /> </div>

                                            <div className='col-span-12 md:col-span-12 lg:col-span-8'><Sales /></div>

                                            <div className='col-span-12 md:col-span-6 lg:col-span-4'><TrafficByDevice sx={{ height: '100%' }} /> </div>

                                            <div className='col-span-12 md:col-span-6 lg:col-span-4'><LatestProducts sx={{ height: '100%' }} /></div>

                                            <div className='col-span-12 md:col-span-12 lg:col-span-8'><LatestOrders /></div>
                                        </div>
                }
            </Main>
        </Box>
    );
};

export default DashboardHome;