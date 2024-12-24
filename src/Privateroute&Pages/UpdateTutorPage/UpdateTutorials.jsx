import React from "react";
// import useAuth from '../../hooks/useAuth';
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const UpdateTutorials = () => {
  // const {user} = useAuth();
  const loadData = useLoaderData({});
  const { _id, name, email, Image, language, price, description, review } =
    loadData;
  //   handle update fucntion
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());
    // console.log(updateData);

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update/tutorials/${_id}`,
        updateData
      );
      console.log(data);

      alert("Data updated success");
    } catch (error) {
      console.error("Error creating data:", error);
    }
    // e.target.reset();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Tutorial</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              disabled
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              disabled
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <input
              type="text"
              name="language"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reveiw
            </label>
            <input
              disabled
              defaultValue={review}
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTutorials;
