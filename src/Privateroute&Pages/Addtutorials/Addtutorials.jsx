import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SweetSuccess from "../../Components/Sweetalerts/SweetSuccess";
import SweetError from "../../Components/Sweetalerts/SweetError";

const Addtutorials = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    initialData.review = 0;
    console.log(initialData);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-tutorials`, initialData);
      console.log(data);
      SweetSuccess();
      navigate('/mytutorials');
    } catch (error) {
      console.error("Error creating data:", error);
      SweetError();
    }
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-700 dark:text-gray-100 bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add Tutorial</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Language
            </label>
            <input
              type="text"
              name="language"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Description
            </label>
            <textarea
              name="description"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            ></textarea>
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

export default Addtutorials;
