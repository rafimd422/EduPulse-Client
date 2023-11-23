import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './../components/Navbar/index';
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#fff',
        contrastText: '#47008F',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
