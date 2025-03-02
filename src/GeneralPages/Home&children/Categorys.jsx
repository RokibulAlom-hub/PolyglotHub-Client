import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Headers from "../../Components/Heading/Headers";
import Loader from "../../Components/Loader/Loader";

const Categorys = () => {
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getlanguage();
  }, []);

  // This is for getting category of language
  const getlanguage = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-language`
      );
      setLanguages(data);
    } catch (error) {
      // console.error("Error getting data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full space-y-4 pb-3 rounded-lg shadow-md">
        <Headers headtext="Language You Can Learn"></Headers>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((language) => (
              <Link
                to={`find/tutor/${language.language}`}
                key={language.id}
                className="p-1 lg:p-4 flex flex-row gap-5 items-center  justify-evenly border  hover:scale-105 hover:shadow-accent duration-500 ease-in-out shadow-2xl"
              >
                {/* heading */}
                <div>
                  <h3 className="text-xl font-bold dark:text-secondary">
                    {language.language}
                  </h3>
                </div>
                {/* image logo */}
                <div>
                  <img
                    src={language.logo}
                    alt={language.language}
                    className="w-8 rounded-xl h-8"
                  />
                </div>
                {/* details button */}
                <div>
                  <p className="text-accent md:hidden lg:block">
                    {" "}
                    <FaArrowRightLong />{" "}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categorys;
