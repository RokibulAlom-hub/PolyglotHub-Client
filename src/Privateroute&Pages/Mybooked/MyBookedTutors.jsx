import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../Components/Loader/Loader";
import Button from "../../Components/Buttons/Button";
import Headers from "../../Components/Heading/Headers";

const MyBookedTutors = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [booked, setBooked] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user?.email) {
      getBookingList();
    }
  }, [user?.email]);

  // Get booking list from the database
  const getBookingList = async () => {
    try {
      setLoading(true);
      // const { data } = await axios.get(
      //   `${import.meta.env.VITE_API_URL}/my-bookings?email=${user?.email}`
      // );
      const { data } = await axiosSecure.get(
        `/my-bookings?email=${user?.email}`
      );
      setBooked(data);
    } catch (error) {
      // console.error("Error getting data:", error);
    } finally {
      setLoading(false);
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
          tutor._id === _id ? { ...tutor, review: tutor.review + 1 } : tutor
        )
      );
      // console.log(data);
    } catch (error) {
      // console.error("Error updating review:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-6xl p-8 space-y-8  rounded-lg shadow-md">
        <Headers headtext="My Booked Tutors"></Headers>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booked.map((tutor) => (
              <div
                key={tutor?._id}
                className="p-6 space-y-2 border dark:border-gray-600 rounded-lg shadow-xl hover:shadow-optional hover:scale-105  ease-in-out duration-500"
              >
                <img
                  src={tutor?.image}
                  alt={tutor?.language}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 ">
                  {tutor?.name}
                </h3>
                <p>
                  <span className="font-semibold">Language:</span>{" "}
                  {tutor?.language}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> ${tutor?.price}
                </p>
                <p>
                  <span className="font-semibold">Review:</span> {tutor?.review}
                </p>
                <div onClick={() => updateReview(tutor?._id)}>
                  <Button btntext="Reveiw"></Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookedTutors;
