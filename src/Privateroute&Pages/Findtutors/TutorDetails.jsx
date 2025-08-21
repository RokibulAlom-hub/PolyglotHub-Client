import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Swal from "sweetalert2";

const TutorDetails = () => {
  const navigate = useNavigate();
  const [tutor, setTutor] = useState({});
  const { user } = useAuth();
  const { _id } = useParams();
  // console.log(_id);
  useEffect(() => {
    getTutorialsByid();
  }, [_id]);
  //   get tutorials by id
  const getTutorialsByid = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/single-tutorials/${_id}`
      );
      //  console.log(data);
      setTutor(data);
    } catch (error) {
      // console.error("Error getting data:", error);
    }
  };
  const handleBooked = async () => {
    const bookedInfo = {
      tutorialsId: _id,
      image: tutor.image,
      language: tutor.language,
      price: tutor.price,
      tutorEmail: tutor.email,
      loggedInEmail: user?.email,
      review: tutor.review,
      meetLink:"https://meet.google.com/qxw-brba-qcf"
    };
    console.log(bookedInfo);
    
    if (user?.email === tutor.email) {
      return alert("tutor and tuorials booker is same so go back");
    }

    try {
      const { data } = axios.post(
        `${import.meta.env.VITE_API_URL}/add-booking`,
        bookedInfo
      );
      console.log(data);
      Swal.fire({
        title: "Tutorial",
        text: " Added Successfully",
        icon: "success",
      });
      navigate("/findtutor");
    } catch (error) {
      console.log("Error getting data:", error);
      alert(error);
    }
  };
  
  return (
    <div className="flex items-center  dark:text-white justify-center min-h-screen ">
      <div className="w-full max-w-4xl  my-6 border dark:border-gray-600  p-8 space-y-8  rounded-lg shadow-md">
        <img
          src={tutor.image}
          alt={tutor.language}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <h2 className="text-3xl font-bold  mb-4">{tutor.name}</h2>
        <p className="text-lg mb-4">
          <span className="font-semibold">Language:</span> {tutor.language}
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Description:</span>{" "}
          {tutor.description}
        </p>
       
        <p className="text-lg mb-4">
          <span className="font-semibold">Price:</span> ${tutor.price}
        </p>
        <p className="text-lg mb-6">
          <span className="font-semibold">Review:</span> {tutor.review}
        </p>
        <button
          onClick={handleBooked}
          className="w-full px-4 py-2 bg-secondary font-medium text-black rounded-lg shadow-sm hover:bg-accent hover:text-white"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
