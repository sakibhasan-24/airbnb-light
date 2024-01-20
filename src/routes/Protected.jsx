import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function Protected({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
}
