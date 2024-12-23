import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import Categorys from './Categorys';

const Home = () => {
    return (
        <div>
            <Banner />
            <Stats></Stats>
            <Categorys></Categorys>
        </div>
    );
};

export default Home;