import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="relative min-h-screen grid grid-cols-1 sm:grid-cols-8">
      {/* sidebar */}

      <div className="flex-1 col-span-2 ">
        <Sidebar />
      </div>
      {/* layout */}
      <div className="p-6 col-span-6">
        <Outlet />
      </div>
    </div>
  );
}
