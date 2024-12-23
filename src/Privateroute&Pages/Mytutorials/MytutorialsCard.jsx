import React from "react";

const MytutorialsCard = ({ tutorials }) => {
//   console.log(tutorials);
  const { name, email, Image, language, price, description, review } =
    tutorials;
  return (
    <div>
      {/* Tutorial Card Structure */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <img
          src="image_url"
          alt="tutorial_language"
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
          <button className="px-4 py-2 font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700">
            Delete
          </button>
          <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MytutorialsCard;
