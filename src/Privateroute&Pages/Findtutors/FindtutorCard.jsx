import React from "react";
import { Link } from "react-router-dom";

const FindtutorCard = ({tutor}) => {
    // console.log(tutor);
    const {_id, name, email, image, language, price, description, review } =tutor;
    // console.log(_id);
    
  return (
    <div>
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <img
          src={image}
          alt={language}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Language:</span> {language}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Review:</span> {review}
        </p>
        <Link
          to={`/tutor-details/${_id}`}
          className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default FindtutorCard;
