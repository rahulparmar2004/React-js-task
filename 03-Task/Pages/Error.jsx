import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-[calc(100vh-3px)] flex items-center justify-center bg-gray-100 px-4 pt-20">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-8 text-center">

        {/* Image */}
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147746234.jpg?semt=ais_hybrid&w=740&q=80"
          alt="404 Error"
          className="w-full max-h-64 object-contain mb-6"
        />

        {/* Text */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-500 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition active:scale-95">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Error;
