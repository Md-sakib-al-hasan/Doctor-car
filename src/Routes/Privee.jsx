import React, { useContext } from "react";
import { Authcontext } from "../Provider/AuthProviders";
import { Navigate } from "react-router-dom";

export default function Privee({ children }) {
  const { user, loading } = useContext(Authcontext);
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
}
