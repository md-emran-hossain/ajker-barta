import { useRouter } from 'next/router';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';

export const NavItem = (props) => {
    const router = useRouter();
    const { href, icon, title, ...others } = props;
    const active = href ? (router.pathname === href) : false;

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2
            }}
            {...others}
        >
            <NextLink href={href} passHref >
                <Button
                    component="a"
                    startIcon={icon}
                    disableRipple
                    sx={{
                        backgroundColor: active && 'rgba(255,255,255, 0.15)',
                        borderRadius: 1,
                        color: active ? 'warning.dark' : '#bdc3c7',
                        fontWeight: active && 'fontWeightBold',
                        justifyContent: 'flex-start',
                        px: 3,
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                            color: active ? 'warning.dark' : '#bdc3c7'
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255, 0.15)'
                        }
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        {title}
                    </Box>
                </Button>
            </NextLink>
        </ListItem>
    );
};

NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string
};
