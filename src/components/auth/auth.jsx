import React from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Auth = ({ children }) => {
  const token = Cookies.get("token")

  if (!token) {
    Swal.fire({
      text: "Please login",
      type: "warning",
    });
    return <Navigate to="/login" replace="true" />;
  }
  return children;
};

export default Auth;