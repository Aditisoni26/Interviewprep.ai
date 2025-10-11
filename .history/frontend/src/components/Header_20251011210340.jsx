import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header bg-[#021526] w-full flex text-white ">
      <img src="Logo.png" alt="" className="w-[12%] m-[1%] h-12" />
      <Link to="/upload-resume" className="h3 hover:text-blue-400">
        <h3>Upload Resume</h3>
      </Link>
      <Link to="/dashboard" className="h3 hover:text-blue-400">
        <h3>Dashboard</h3>
      </Link>
      <Link to="/login" className="h3 hover:text-blue-400">
        <h3>Login</h3>
      </Link>
      <Link to="/registration" className="h3 hover:text-blue-400">
        <h3>Registration</h3>
      </Link>
    </div>
  );
}
