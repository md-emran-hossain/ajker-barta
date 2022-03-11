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
    MuiCssBaseline: {
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
      },
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
    }
  }
});
