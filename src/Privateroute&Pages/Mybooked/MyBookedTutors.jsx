import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookedTutors = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    if (user?.email) {
      getBookingList();
    }
  }, [user?.email]);

  // Get booking list from the database
  const getBookingList = async () => {
    try {
      // const { data } = await axios.get(
      //   `${import.meta.env.VITE_API_URL}/my-bookings?email=${user?.email}`
      // );
      const { data } = await axiosSecure.get(`/my-bookings?email=${user?.email}`)
      setBooked(data);
    } catch (error) {
      // console.error("Error getting data:", error);
    }
  };

  // Update review when clicked
  const updateReview = async (_id) => {
    try {
      //  increment the review count in server
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update/review/${_id}`
      );

      // Find the updated tutor in the state and upda
      setBooked((prevBooked) =>
        prevBooked.map((tutor) =>
          tutor._id === _id
            ? { ...tutor, review: tutor.review + 1 }
            : tutor
        )
      );
      // console.log(data);
    } catch (error) {
      // console.error("Error updating review:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-700 dark:text-gray-100 bg-gray-100">
      <div className="w-full dark:bg-gray-700 dark:text-gray-100 max-w-6xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          My Booked Tutors{" "}
          <span className="text-green-400 font-semibold">{booked?.length}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booked.map((tutor) => (
            <div
              key={tutor?._id}
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <img
                src={tutor?.image}
                alt={tutor?.language}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {tutor?.name}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Language:</span>{" "}
                {tutor?.language}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Price:</span> ${tutor?.price}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Review:</span> {tutor?.review}
              </p>
              <button
                onClick={() => updateReview(tutor?._id)}
                className={`px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700`}
              >
                Reveiw
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookedTutors;
