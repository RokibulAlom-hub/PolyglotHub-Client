import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Categorys = () => {
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getlanguage();
  }, []);

  // This is for getting category of language
  const getlanguage = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-language`);
      setLanguages(data);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  return (
    <div className="flex items-center  justify-center bg-gray-100 dark:bg-gray-700 dark:text-gray-100">
      <div className="w-full max-w-6xl border-blue-400 border my-7 p-8 space-y-4 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl  font-bold text-center mb-6">Languages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {languages.map((language) => (
            <Link
              to={`find/tutor/${language.language}`}
              key={language.id}
              className="p-6 border border-pink-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm text-center"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {language.language}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
