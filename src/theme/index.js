const palette = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: {
    light: '#616161',
    main: '#212121',
    dark: '#000000',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#FFFF8D',
    main: '#FFEA00',
    dark: '#E8D50A',
    contrastText: '#000000',
  },
  grey: {
    100: '#F5F5F5',
    200: '#EEEEEE',
    500: '#9E9E9E',
    700: '#616161',
    900: '#212121',
  },
  error: {
    light: '#FFD180',
    main: '#FF8E12',
    dark: '#FD5100',
  },
  text: {
    primary: '#0D0D0D',
    secondary: '#444444',
  },
  accent: {
    light: '#80CBC4',
    main: '#4DB6AC',
    dark: '#009688',
  },
  typography: {
    titillium: [
      'Titillium-Web-Bold',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    opensans: ['Open Sans', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
}

export default {
  palette,
  // added this props so that initialWidth allows you to define a basic width on jsdom env
  props: { MuiWithWidth: { initialWidth: 'xs' } },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
}
