import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="pt-12 min-h-[calc(100vh-60px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
