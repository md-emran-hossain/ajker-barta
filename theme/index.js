import { createTheme } from '@mui/material';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1280,
            xl: 1920
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            // styleOverrides: {
            //     root: {
            //         textTransform: 'none'
            //     },
            //     sizeSmall: {
            //         padding: '6px 16px'
            //     },
            //     sizeMedium: {
            //         padding: '8px 20px'
            //     },
            //     sizeLarge: {
            //         padding: '11px 24px'
            //     },
            //     textSizeSmall: {
            //         padding: '7px 12px'
            //     },
            //     textSizeMedium: {
            //         padding: '9px 16px'
            //     },
            //     textSizeLarge: {
            //         padding: '12px 16px'
            //     }
            // }
        },
        // MuiButtonBase: {
        //     defaultProps: {
        //         disableRipple: true
        //     }
        // },
        // MuiCardContent: {
        //     styleOverrides: {
        //         root: {
        //             padding: '32px 24px',
        //             '&:last-child': {
        //                 paddingBottom: '32px'
        //             }
        //         }
        //     }
        // },
        // MuiCardHeader: {
        //     defaultProps: {
        //         titleTypographyProps: {
        //             variant: 'h6'
        //         },
        //         subheaderTypographyProps: {
        //             variant: 'body2'
        //         }
        //     },
        //     styleOverrides: {
        //         root: {
        //             padding: '32px 24px'
        //         }
        //     }
        // },
        MuiCssBaseline: {
        },
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         notchedOutline: {
        //             borderColor: '#E6E8F0'
        //         }
        //     }
        // },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F3F4F6',
                    '.MuiTableCell-root': {
                        color: '#374151'
                    },
                    borderBottom: 'none',
                    '& .MuiTableCell-root': {
                        borderBottom: 'none',
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase'
                    },
                    '& .MuiTableCell-paddingCheckbox': {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        }
    },
    palette: {
        neutral: {
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827'
        },
        action: {
            active: '#6B7280',
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)'
        },
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF'
        },
        divider: '#E6E8F0',
        primary: {
            main: '#5048E5',
            light: '#828DF8',
            dark: '#3832A0',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#10B981',
            light: '#3FC79A',
            dark: '#0B815A',
            contrastText: '#FFFFFF'
        },
        success: {
            main: '#14B8A6',
            light: '#43C6B7',
            dark: '#0E8074',
            contrastText: '#FFFFFF'
        },
        info: {
            main: '#2196F3',
            light: '#64B6F7',
            dark: '#0B79D0',
            contrastText: '#FFFFFF'
        },
        warning: {
            main: '#FFB020',
            light: '#FFBF4C',
            dark: '#B27B16',
            contrastText: '#FFFFFF'
        },
        error: {
            main: '#D14343',
            light: '#DA6868',
            dark: '#922E2E',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#121828',
            secondary: '#65748B',
            disabled: 'rgba(55, 65, 81, 0.48)'
        }
    },
    shape: {
        borderRadius: 8
    },
    typography: {
        // button: {
        //     fontWeight: 600
        // },
        fontFamily: '"Merriweather", "serif"',
        // fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        // body1: {
        //     fontSize: '1rem',
        //     fontWeight: 400,
        //     lineHeight: 1.5
        // },
        // body2: {
        //     fontSize: '0.875rem',
        //     fontWeight: 400,
        //     lineHeight: 1.57
        // },
        // subtitle1: {
        //     fontSize: '1rem',
        //     fontWeight: 500,
        //     lineHeight: 1.75
        // },
        // subtitle2: {
        //     fontSize: '0.875rem',
        //     fontWeight: 500,
        //     lineHeight: 1.57
        // },
        // overline: {
        //     fontSize: '0.75rem',
        //     fontWeight: 600,
        //     letterSpacing: '0.5px',
        //     lineHeight: 2.5,
        //     textTransform: 'uppercase'
        // }
    }
});
