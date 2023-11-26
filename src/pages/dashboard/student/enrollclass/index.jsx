import DashboardLayout from "@/DashboardLayout"
import { Toolbar } from '@mui/material';
import Head from "next/head";

const EnrollClass = () => {
  return (
    <DashboardLayout>
        <Head>
    <title>Enrolled Classes || EduPulse </title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <Toolbar />
      My Enrolled Class
    </DashboardLayout>
  )
}

export default EnrollClass
