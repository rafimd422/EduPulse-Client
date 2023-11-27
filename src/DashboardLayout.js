import React, { useContext } from 'react';
import Sidebar from './components/DashboardCompo/Sidebar';
import { AuthContext } from './Provider/AuthProvider';
import SignIn from './pages/auth/signin';

const DashboardLayout = ({ children }) => {
const {user} = useContext(AuthContext)





if(user !== null){
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>{children}</main>
      </div>
    </div>
  );
}else{
  return <SignIn />
}
};

export default DashboardLayout;
