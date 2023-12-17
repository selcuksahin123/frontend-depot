import {createTheme, ThemeOptions} from '@mui/material/styles';
import * as createTypography from '@mui/material/styles/createTypography';
import '@fontsource/fira-sans';
import '@fontsource/exo-2';

const defaultTheme = createTheme();
const {breakpoints} = defaultTheme;

const grey300 = '#e0e0e0';
const grey400 = '#dbd9e8';
const grey600 = '#c4bdee';
const green = '#04af65';
const orange = '#fab428';
const red = '#cc0000';
const white = '#f6faff';
const cyan = '#53fbed';
const darkCyan = '#8d9ae7';
const lightBlue = '#2df7e4';
const black = "#000103";


declare module '@mui/system/createTheme/shape' {
  interface Shape {
    borderRadius: number;
  }
}

declare module '@mui/material/styles/createTypography' {
  type AlienTypographyVariant = createTypography.Variant | 'bodySmall' | 'a';

  interface TypographyOptions {
    bodySmall?: createTypography.TypographyStyleOptions;
    a?: createTypography.TypographyStyleOptions;
  }

  export interface Typography
    extends Record<AlienTypographyVariant, createTypography.TypographyStyle>,
      createTypography.FontStyle,
      createTypography.TypographyUtils {}
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsColorOverrides {
    text: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }

  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  }
}

type Layout = {
  headerHeight: {
    mobile: string;
    desktop: string;
  };
  containerPaddingHorizontal: number | string;
};

type Border = {
  light: string;
  default: string;
};

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    layout: Layout;
    border: Border;
  }

  interface Theme {
    layout: Layout;
    border: Border;
  }
}

const options: ThemeOptions = {
  layout: {
    headerHeight: {
      mobile: '50px',
      desktop: '50px'
    },
    containerPaddingHorizontal: defaultTheme.spacing(2)
  },
  border: {
    light: '1px solid #F0F0F0',
    default: '1px solid #E5E5E7'
  },
  shape: {
    borderRadius: 6
  },
  palette: {
    primary: {
      main: lightBlue,
      light: cyan,
      contrastText: white
    },
    success: {
      main: green,
      contrastText: white
    },
    secondary: {
      main: orange,
      contrastText: white
    },
    error: {
      main: red
    },
    text: {
      primary: black,
      secondary: black
    },
    grey: {
      300: grey300,
      400: grey400,
      600: grey600
    }
  },
  typography: {
    fontFamily: [
      '"Exo 2"',
      '"Fira Sans"',
      'poppins',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    bodySmall: {
      fontSize: '14px',
      fontFamily: '"Fira Sans"',
      [breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    },
    body1: {
      fontSize: '16px',
      fontFamily: '"Fira Sans"'
    },
    body2: {
      fontSize: '14px',
      fontFamily: '"Fira Sans"'
    },
    h1: {
      fontSize: '32px',
      fontFamily: '"Fira Sans"',
      [breakpoints.down('sm')]: {
        fontSize: '28px'
      },
      fontWeight: 'bold',
      color: white,
      marginBottom: '.6rem'
    },
    h2: {
      fontSize: '27px',
      fontFamily: '"Poppins"',
      [breakpoints.down('sm')]: {
        fontSize: '23px'
      },
      fontWeight: 'bold',
      color: white
    },
    h3: {
      fontSize: '23px',
      fontFamily: '"Poppins"',
      [breakpoints.down('sm')]: {
        fontSize: '20px'
      },
      fontWeight: 'bold',
      color: white
    },
    h4: {
      fontFamily: '"Poppins"',
      fontSize: '18px',
      fontWeight: 'bold',
      color: white
    },
    button: {
      textTransform: 'none'
    },
    a: {
      color: darkCyan,
      textDecoration: 'underline'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: darkCyan,
          textDecoration: 'underline'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        }
      }
    }
  }
};

export default createTheme(options);
