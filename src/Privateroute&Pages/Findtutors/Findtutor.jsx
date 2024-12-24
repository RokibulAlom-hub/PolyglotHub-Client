import axios from "axios";
import React, { useEffect, useState } from "react";
import FindtutorCard from "./FindtutorCard";

const Findtutor = () => {
  const [allTutor, setAlltutor] = useState([]);
  const[search,setSearch] = useState('');
  useEffect(() => {
    getAlltutors()
  }, [search]);
  const getAlltutors = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-all-tutors?search=${search}`
      );
      //   console.log(data);
      setAlltutor(data);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };
  console.log(search);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Find Tutors</h2>
        <form>
          <div className="join">
            <input 
             onChange={(e) => setSearch(e.target.value)}
              value={search}
              // note : onchange is hit server in every type but
              // onblur hit only once so in small project onblur is suitable
              type="text"
              name="search"
              placeholder="Enter Job Title"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Search</button>
          </div>
        </form>
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

export default Findtutor;
