import React from 'react';
import { FaSpinner } from 'react-icons/fa';  // Import Spinner icon from React Icons

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <FaSpinner className="animate-spin text-indigo-600 text-5xl" />
        <span className="text-xl text-gray-700">Loading...</span>
      </div>
    </div>
  );
}
