import React from "react";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar/index";
import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/Provider/auth-provider";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
      contrastText: "#47008F",
    },
  },
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const notDashBoard = !router.pathname.includes("dashboard");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {notDashBoard && <Navbar />}
          <Component {...pageProps} />
          {notDashBoard && <Footer />}
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
