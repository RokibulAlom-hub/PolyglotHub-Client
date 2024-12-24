import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MytutorialsCard from './MytutorialsCard';
const Mytutorials = () => {
    const {user} = useAuth()
    const[alltut,setAlltut] = useState([])
    useEffect(() =>{
        if(user?.email){
            gettingTutorials();
        }
    },[user?.email])
    const gettingTutorials =async () => {
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/myTutorials?email=${user?.email}`)
            // console.log(data);
            setAlltut(data)
        } catch (error) {
            console.error("Error getting data:", error);
        }
    }
    const handleDelete = (_id) => {
      try {
        const {data} = axios.delete(`${import.meta.env.VITE_API_URL}/tutorials-delete/${_id}`)
        console.log(data);
        setAlltut(prevTutorilas => prevTutorilas.filter(tutorial => tutorial._id !== _id))
      } catch (error) {
        console.error("Error getting data:", error);
      }
    } 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">My Added Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* maping the alltuut */}
          {
            alltut.map((tut) => <MytutorialsCard key={tut._id}  handleDelete={handleDelete} tutorials={tut}></MytutorialsCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Mytutorials;
