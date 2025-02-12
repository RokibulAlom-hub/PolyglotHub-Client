import React from "react";
// import useAuth from '../../hooks/useAuth';
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import SweetSuccess from "../../Components/Sweetalerts/SweetSuccess";
import Headers from "../../Components/Heading/Headers";

const UpdateTutorials = () => {
  const navigate = useNavigate();
  // const {user} = useAuth();
  const loadData = useLoaderData({});
  const { _id, name, email, Image, language, price, description, review } =
    loadData;
  //   handle update fucntion
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());
    //  console.log(updateData);

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update/tutorials/${_id}`,
        updateData
      );
      // console.log(data);
      SweetSuccess();
      navigate("/mytutorials");
    } catch (error) {
      // console.error("Error creating data:", error);
    }
    // e.target.reset();
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg p-8 border dark:border-gray-600 my-3 rounded-lg shadow-md">
        <Headers headtext="Update Tutorials"></Headers>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              defaultValue={name}
              disabled
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              defaultValue={email}
              disabled
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>
          <div>
            <input
              type="url"
              name="image"
              placeholder="ImageURl"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="language"
              placeholder="Language"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            
            <textarea
              name="description"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div>
            <input
              disabled
              defaultValue={review}
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium bg-secondary  text-black rounded-lg shadow-sm hover:bg-accent hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTutorials;
