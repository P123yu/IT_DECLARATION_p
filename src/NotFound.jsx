// NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/home"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;