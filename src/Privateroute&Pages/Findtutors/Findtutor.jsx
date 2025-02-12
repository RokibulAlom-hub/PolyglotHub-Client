import axios from "axios";
import React, { useEffect, useState } from "react";
import FindtutorCard from "./FindtutorCard";
import Loader from "../../Components/Loader/Loader";
import Headers from "../../Components/Heading/Headers";

const Findtutor = () => {
  const [allTutor, setAlltutor] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAlltutors();
  }, [search]);
  const getAlltutors = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-all-tutors?search=${search}`
      );
      console.log(data);
      setAlltutor(data);
    } catch (error) {
      // console.error("Error getting data:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex items-center bg-primary dark:bg-black justify-center">
      <div className="w-full max-w-6xl my-8 p-8 space-y-4  rounded-lg shadow-md">
        <Headers headtext="Find Tutors"></Headers>
        {loading ? (
          <Loader></Loader>
        ) : (
          <>
            <form>
              {/* this is for searching by tittle  */}
              <div className="join">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  // note : onchange is hit server in every type but
                  // onblur hit only once so in small project onblur is suitable
                  type="text"
                  name="search"
                  placeholder="Enter Job Title"
                  className="input border border-accent join-item"
                />
                <button className="btn bg-secondary join-item">Search</button>
              </div>
            </form>
            {/* and this is for sorting by price  */}
            {/* <div>
            <select onChange={(e) => setSort(e.target.value)} value={sort}>
              <option value=""> sort by price </option>
              <option value="asc"> Ascending  Order</option>
              <option value="des"> Descending Order </option>
            </select>
          </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Tutor Card Example */}
              {allTutor.map((tutor) => (
                <FindtutorCard key={tutor._id} tutor={tutor}></FindtutorCard>
              ))}
              {/* Repeat this structure for additional tutors */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Findtutor;
