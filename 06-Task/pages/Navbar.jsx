import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // Clear 
    navigate("/login"); 
  };
  return (
    <nav className="fixed top-0 left-0 w-full h-16
    bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
    flex items-center justify-between px-10 text-white z-50">

      {/* Left - Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        Travel<span className="text-amber-400">Go</span>
      </div>

      {/* Center - Menu */}
      <ul className="flex gap-10 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-sky-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-sky-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-sky-400 transition">
            Products
          </Link>
        </li>
        
      </ul>

      {/* Right - Login/Logout */}
      {currentUser ? (
        <button
          onClick={handleLogout}
          className="px-6 py-2 rounded-lg font-semibold
          bg-indigo-600 hover:bg-indigo-700
          transition-all duration-300"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="px-6 py-2 rounded-lg font-semibold
          bg-gradient-to-r from-sky-500 to-indigo-600
          hover:from-indigo-600 hover:to-sky-500
          transition-all duration-300"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
