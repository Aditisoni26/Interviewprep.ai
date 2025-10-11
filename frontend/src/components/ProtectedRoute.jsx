import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // If not logged in, redirect to login page with redirect query
    return <Navigate to={`/login?redirect=${window.location.pathname}`} />;
  }

  return children; // If logged in, render the protected component
}
