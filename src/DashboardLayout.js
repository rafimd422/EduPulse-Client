import React, { useContext } from 'react';
import Sidebar from './components/DashboardCompo/Sidebar';


const DashboardLayout = ({ children }) => {

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
