import React from 'react';
import { FaSpinner } from 'react-icons/fa';  // Import Spinner icon from React Icons

export default function Loader() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center space-x-2">
        <FaSpinner className="animate-spin text-accent text-5xl" />
        <span className="text-xl text-accent">Loading...</span>
      </div>
    </div>
  );
}
