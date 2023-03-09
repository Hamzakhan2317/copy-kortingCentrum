import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '# ',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    htmlFontSize: 16,
    h4: {},
    a: {
      fontSize: '12px',
    },
  },
});
theme = responsiveFontSizes(theme);

export { theme };
