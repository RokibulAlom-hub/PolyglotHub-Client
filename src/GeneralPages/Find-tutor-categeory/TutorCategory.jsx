import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FindtutorCard from "../../Privateroute&Pages/Findtutors/FindtutorCard";
import Headers from "../../Components/Heading/Headers";

const TutorCategory = () => {
  const {language }=useParams()
  // console.log(language);
  
  const [allTutor, setAlltutor] = useState([]);
  useEffect(() => {
    getTutorBylanguage();
  }, []);
  const getTutorBylanguage = async () => {
    try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-all-tutors?language=${language}`
            
        );
        // console.log(data);
        setAlltutor(data)
      } catch (error) {
        // console.error("Error getting data:", error);
      }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl p-8 space-y-8 rounded-lg shadow-md">
        <Headers headtext="Find Tutors"></Headers>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tutor Card Example */}
          {allTutor.map((tutor) => (
            <FindtutorCard key={tutor._id} tutor={tutor}></FindtutorCard>
          ))}
          {/* Repeat this structure for additional tutors */}
        </div>
      </div>
    </div>
  );
};

export default TutorCategory;
