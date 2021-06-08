import { createMuiTheme } from '@material-ui/core';
import { colors } from '@material-ui/core';

export const white: '#FFFFFF' = '#FFFFFF';
export const black: '#000000' = '#000000';
const paletteTextPrimary = colors.blueGrey[900];
const paletteTextSecondary = colors.blueGrey[600];
const paletteIcon = colors.blueGrey[600];
const paletteDivider = colors.grey[200];

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: white,
      dark: colors.indigo[900],
      main: colors.indigo[500],
      light: colors.indigo[100]
    },
    secondary: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue['A400'],
      light: colors.blue['A400']
    },
    success: {
      contrastText: white,
      dark: colors.green[900],
      main: colors.green[600],
      light: colors.green[400]
    },
    info: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue[600],
      light: colors.blue[400]
    },
    warning: {
      contrastText: white,
      dark: colors.orange[900],
      main: colors.orange[600],
      light: colors.orange[400]
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400]
    },
    text: {
      primary: paletteTextPrimary,
      secondary: paletteTextSecondary
      // link: colors.blue[600]
    },
    background: {
      default: '#F4F6F8',
      paper: white
    },
    // icon: paletteIcon,
    divider: paletteDivider
  },
  typography: {
    h1: {
      color: paletteTextPrimary,
      fontWeight: 500,
      fontSize: '35px',
      letterSpacing: '-0.24px',
      lineHeight: '40px'
    },
    h2: {
      color: paletteTextPrimary,
      fontWeight: 500,
      fontSize: '29px',
      letterSpacing: '-0.24px',
      lineHeight: '32px'
    },
    h3: {
      color: paletteTextPrimary,
      fontWeight: 500,
      fontSize: '24px',
      letterSpacing: '-0.06px',
      lineHeight: '28px'
    },
    h4: {
      color: paletteTextPrimary,
      fontWeight: 500,
      fontSize: '20px',
      letterSpacing: '-0.06px',
      lineHeight: '24px'
    },
    h5: {
      color: paletteTextPrimary,
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '20px'
    },
    h6: {
      color: paletteTextPrimary,
      fontWeight: 500,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '20px'
    },
    subtitle1: {
      color: paletteTextPrimary,
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '25px'
    },
    subtitle2: {
      color: paletteTextSecondary,
      fontWeight: 400,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '21px'
    },
    body1: {
      color: paletteTextPrimary,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '21px'
    },
    body2: {
      color: paletteTextSecondary,
      fontSize: '12px',
      letterSpacing: '-0.04px',
      lineHeight: '18px'
    },
    button: {
      color: paletteTextPrimary,
      fontSize: '14px'
    },
    caption: {
      color: paletteTextSecondary,
      fontSize: '11px',
      letterSpacing: '0.33px',
      lineHeight: '13px'
    },
    overline: {
      color: paletteTextSecondary,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.33px',
      lineHeight: '13px',
      textTransform: 'uppercase'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow:
          '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
        backgroundColor: '#FFFFFF'
      }
    },
    MuiIconButton: {
      root: {
        color: paletteIcon,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.03)'
        }
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)'
      }
    },
    MuiTableCell: {
      root: {
        // ...typography.body1,
        color: paletteTextPrimary,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: '21px',
        borderBottom: `1px solid ${paletteDivider}`
      }
    },
    MuiTableHead: {
      root: {
        backgroundColor: colors.grey[50]
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: 8
      }
    }
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
