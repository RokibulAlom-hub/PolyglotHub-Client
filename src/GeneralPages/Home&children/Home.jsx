import React from "react";
import Banner from "./Banner";
import Stats from "./Stats";
import Categorys from "./Categorys";
import OfferingsSection from "./OfferingsSection";
import FAQSection from "./FAQSection";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="w-11/12 mx-auto space-y-6 md:space-y-20 mt-12 pb-10 dark:bg-black dark:text-white">
        <Stats></Stats>
        <Categorys></Categorys>
        <OfferingsSection></OfferingsSection>
        <FAQSection></FAQSection>
      </div>
    </>
  );
};

export default Home;
