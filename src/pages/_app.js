import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './../components/Navbar/index';
import '@/styles/globals.css'
import Footer from '@/components/Footer/Footer';
import AuthProvider from '@/Provider/AuthProvider';
import { useRouter } from 'next/router';

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
  const router = useRouter()
  console.log(router)

const notDashBoard = !router.pathname.includes('dashboard')
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<AuthProvider>
{notDashBoard && <Navbar />}
      <Component {...pageProps} />
      {notDashBoard && <Footer />}
</AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
