import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const TutorDetails = () => {
const [tutor,setTutor] = useState({})
const {user} = useAuth();
const {_id}  = useParams();
  console.log(_id);
  useEffect(() => {
  getTutorialsByid()
  },[_id])
//   get tutorials by id 
  const getTutorialsByid = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/single-tutorials/${_id}`
      );
    //   console.log(data);
      setTutor(data)
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };
  const handleBooked = async() => {
    const bookedInfo = {
      tutorialsId: _id,
      image:tutor.image,
      language:tutor.language,
      price:tutor.price,
      tutorEmail:tutor.email,
      loggedInEmail:user.email,
      review:tutor.review,
    }
    if (user?.email === tutor.email) {
      return alert ('tutor and tuorials booker is same so go back')
    }
   try {
    const {data} = axios.post(`${import.meta.env.VITE_API_URL}/add-booking`,bookedInfo)
    console.log(data);
    SweetSuccess();
    navigate('/mybookedtutors')
   } catch (error) {
    console.error("Error getting data:", error);
    SweetError()
   }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <img src={tutor.image} alt={tutor.language} className="w-full h-80 object-cover rounded-lg mb-4"/>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{tutor.name}</h2>
        <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">Language:</span> {tutor.language}</p>
        <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">Description:</span> {tutor.description}</p>
        <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">Price:</span> ${tutor.price}</p>
        <p className="text-lg text-gray-700 mb-6"><span className="font-semibold">Review:</span> {tutor.review}</p>
        <button onClick={handleBooked} className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
