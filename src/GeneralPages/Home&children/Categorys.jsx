import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Headers from "../../Components/Heading/Headers";

const Categorys = () => {
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getlanguage();
  }, []);

  // This is for getting category of language
  const getlanguage = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-language`
      );
      setLanguages(data);
    } catch (error) {
      // console.error("Error getting data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center dark:bg-gray-700 dark:text-gray-100">
      <div className="w-full space-y-4 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-md">
       <Headers headtext="Language You Can Learn"></Headers>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {languages.map((language) => (
            <Link
              to={`find/tutor/${language.language}`}
              key={language.id}
              className="p-4 flex flex-row items-center justify-between border  hover:scale-105"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {language.language}
                </h3>
              </div>
              <div>
                <FaArrowRightLong className="text-blue-600 dark:text-pink-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
