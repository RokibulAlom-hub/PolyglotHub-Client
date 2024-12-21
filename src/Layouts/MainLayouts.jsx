import React from 'react';
import Navbar from '../Sharedpage&Comp/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Sharedpage&Comp/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;