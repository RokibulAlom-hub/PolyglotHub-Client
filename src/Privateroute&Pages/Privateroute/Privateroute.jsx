import React from 'react';
import useAuth from '../../hooks/useAuth';
import Loader from '../../Components/Loader/Loader';

const Privateroute = ({children}) => {
    const{ user,loader} = useAuth();
    if(loader){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
};

export default Privateroute;