import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="relative min-h-screen md:flex">
      {/* sidebar */}

      <div className="flex-1">
        <Sidebar />
      </div>
      {/* layout */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
