import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import Categorys from './Categorys';
import OfferingsSection from './OfferingsSection';
import FAQSection from './FAQSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <Stats></Stats>
            <Categorys></Categorys>
            <OfferingsSection></OfferingsSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;