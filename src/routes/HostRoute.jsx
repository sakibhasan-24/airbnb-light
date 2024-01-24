import React from "react";
import useRole from "../hooks/Api/useRole";
import { Navigate } from "react-router-dom";

export default function HostRoute({ children }) {
  const [role, loading] = useRole();
  if (loading) {
    return <div>loading</div>;
  }
  if (role === "host") {
    return children;
  }
  return <Navigate to="/dashboard" />;
}
