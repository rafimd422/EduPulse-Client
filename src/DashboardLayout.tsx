import React, { ReactNode } from "react";
import Sidebar from "./components/DashboardCompo/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}> {children} </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
