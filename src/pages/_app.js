import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './../components/Navbar/index';
import '@/styles/globals.css'
import Footer from '@/components/Footer/Footer';
import AuthProvider from '@/Provider/AuthProvider';

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
<AuthProvider>
<Navbar />
      <Component {...pageProps} />
      <Footer />
</AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
