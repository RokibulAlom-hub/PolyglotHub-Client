import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Buttons/Button";

const MytutorialsCard = ({ tutorials, handleDelete }) => {
  const { _id, name, email, image, language, price, description, review } =
    tutorials;
  // console.log(review);

  return (
    <div>
      {/* Tutorial Card Structure */}
      <div className="p-4 border dark:border-gray-600 rounded-lg space-y-2 shadow-xl hover:shadow-optional hover:scale-105  ease-in-out duration-500"> 
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold ">{language}</h3>
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p>{description.substring(0,65)}....</p>
        <div className="flex items-center justify-between">
          <span className=" text-sm">Review: {review}</span>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={() => handleDelete(_id)}>
            <Button btntext="Delete"></Button>
          </button>
          <Link to={`/update/tutor/${_id}`}>
            <Button btntext="Update"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MytutorialsCard;
