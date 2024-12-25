import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const MytutorialsCard = ({ tutorials,handleDelete }) => {
  const { _id,name, email, image, language, price, description, review } =
  tutorials;
  // console.log(review);

  return (
    <div>
      {/* Tutorial Card Structure */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {language}
        </h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600 text-sm">Review: {review}</span>
        </div>
        <div className="flex items-center justify-between">
          <button 
          onClick={() => handleDelete(_id)}
          className="px-2 py-2 font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700">
            Delete
          </button>
          <Link 
          to={`/update/tutor/${_id}`}
          className="px-2 py-2 font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MytutorialsCard;
