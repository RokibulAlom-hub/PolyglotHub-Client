import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Buttons/Button";

const FindtutorCard = ({ tutor }) => {
  const { _id, name, image, language, price, } = tutor;

  return (
    <div>
      <div className="p-2 pb-4 rounded-lg  shadow-lg space-y-2 hover:shadow-optional hover:scale-105  ease-in-out duration-500">
        <img
          src={image}
          alt={language}
          className="w-full h-40 object-cover rounded-lg "
        />
        <h3 className="text-xl font-bold  ">{name}</h3>
        <p>
          <span className="font-semibold">Language:</span> {language}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {price} $
        </p>
        {/* <p>
          <span className="font-semibold">Review:</span> {review}
        </p> */}
        <Link
          to={`/tutor-details/${_id}`}
        >
         <Button btntext=" Details"></Button>
        </Link>
      </div>
    </div>
  );
};

export default FindtutorCard;
