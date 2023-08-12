import React from "react";
import Header from "./Header/Header";
import DefineClub from "./DefineClub";
import WhatWeDo from "./WhatWeDo";
import HFooter from "./HFooter";
import Domains from "./Domains";
import Stats from "./Stats";
import ClubFeatures from "./ClubFeatures";
import Magazine from "./Magazine";
import SocialMedia from "./Header/SocialMedia";
import ContactUs from "./ContactUs";

const Home = () => {
    return (
        // <div className="h-screen">
        <div className="">
            <Header />
            <SocialMedia />
            <DefineClub />
            <WhatWeDo />
            <ClubFeatures />
            <Magazine />
            <Stats />
            <Domains />
            <ContactUs />
            <HFooter />
        </div>
    );
};

export default Home;
