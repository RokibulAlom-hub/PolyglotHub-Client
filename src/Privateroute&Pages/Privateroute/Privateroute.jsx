import React from 'react';
import useAuth from '../../hooks/useAuth';
import Loader from '../../Components/Loader/Loader';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const{ user,loader} = useAuth();
    if(loader){
        return <Loader></Loader>
    }
   return  user? children : <Navigate to='/login'></Navigate>
};

export default Privateroute;