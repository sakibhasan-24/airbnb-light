import React from "react";
import useRole from "../hooks/Api/useRole";
import { Navigate } from "react-router-dom";

export default function AdminRoutes({ children }) {
  const [role, loading] = useRole();
  if (loading) {
    return <div>loading</div>;
  }
  if (role === "admin") {
    return children;
  }
  return <Navigate to="/dashboard" />;
}
