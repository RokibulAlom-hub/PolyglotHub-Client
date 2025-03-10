import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MytutorialsCard from "./MytutorialsCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader/Loader";
import Headers from "../../Components/Heading/Headers";
const Mytutorials = () => {
  const { user } = useAuth();
  const [alltut, setAlltut] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (user?.email) {
      gettingTutorials();
    }
  }, [user?.email]);
  const gettingTutorials = async () => {
    try {
      // const { data } = await axios.get(
      //   `${import.meta.env.VITE_API_URL}/myTutorials?email=${user?.email}`,
      //   {
      //     withCredentials: true,
      //   }
      // );
      setLoading(true);
      const { data } = await axiosSecure.get(
        `/myTutorials?email=${user?.email}`
      );
      // console.log(data);
      // axiosSecure.get(`/myTutorials?email=${user?.email}`)
      setAlltut(data);
    } catch (error) {
      // console.error("Error getting data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/tutorials-delete/${_id}`
          );
          // console.log(data);

          // Update state after deletion
          setAlltut((prevTutorilas) =>
            prevTutorilas.filter((tutorial) => tutorial._id !== _id)
          );

          // Show success alert
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          // console.error("Error deleting data:", error);

          // Show error alert
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the file. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };
  
  return (
    <div className="flex  items-center justify-center min-h-screen">
      <div className="w-full dark:text-white max-w-6xl p-8 space-y-8 rounded-lg shadow-md">
        {alltut.length === 0 ? <Headers headtext="You dont added any tutorials"></Headers>: <Headers headtext="My Tutorials"></Headers>}
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {alltut.map((tut) => (
              <MytutorialsCard
                key={tut._id}
                handleDelete={handleDelete}
                tutorials={tut}
              ></MytutorialsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mytutorials;
