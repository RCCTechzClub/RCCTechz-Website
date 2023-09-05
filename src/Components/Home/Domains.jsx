import React, { useEffect, useRef, useState } from "react";
import DomainCard from "./DomainCard";

import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Domains = () => {
    const [domainDetails, setNewDomainDetails] = useState([
        {
            show: false,
            manager: "Manish Saha, Shuvangi De",
            domainName: "Web Development",
        },
        {
            show: false,
            manager: "Debopom Banerjee",
            domainName: "Blockchain",
        },
        {
            show: false,
            manager: "Rajorshi Mandal",
            domainName: "Competitive Programming",
        },
        {
            show: false,
            manager: "Chayandev Bera",
            domainName: "App Development",
        },
        {
            show: false,
            manager: "Soumyadeep Chakraborty",
            domainName: "AI/ML",
        },
    ]);

    const domainTitle = useRef(null);

    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) setStartAnimation(true);
        else setStartAnimation(false);
    }, [inView]);

    var tempdomainDetails = domainDetails;

    const updateList = (domain) => {
        console.log("updateList() templist", tempdomainDetails);
        tempdomainDetails.forEach((element) => {
            // console.log(element.domainName, domain.domainName);
            if (element.domainName === domain.domainName)
                element.show = !element.show;
            else element.show = false;
        });

        setNewDomainDetails([...tempdomainDetails]);
    };

    return (
        <div className={`py-10 relative bg-slate-800 min-h-screen`}>
            {" "}
            <div
                ref={domainTitle}
                // className="hidden sm:inline-block absolute tracking-widest -left-24 lg:-left-36 top-[40%] bg-black text-4xl lg:text-6xl px-8 py-4 text-white -rotate-90"
                className="text-4xl lg:text-6xl px-8 py-4 text-white text-center"
            >
                Domains
            </div>
            {/* <div className="my-10">
                <img
                    src="https://images.unsplash.com/photo-1596949469909-5217f8b68f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="domainImg"
                    className="rounded-xl w-[50%] mx-auto shadow-xl"
                />
            </div> */}
            <div
                ref={ref}
                // className={`relative py-11 px-10 justify-items-center grid md:grid-rows-2 md:grid-cols-2 md:grid-flow-col gap-y-7 md:gap-y-16 bg-slate-800 h-screen`}
                className={`relative py-11 px-10 flex justify-center flex-wrap gap-x-16 gap-y-16`}
            >
                {domainDetails.map((domain, i) => {
                    return (
                        <DomainCard
                            key={domain.domainName}
                            domain={domain}
                            updateList={updateList}
                            startAnimation={startAnimation}
                            i={i}
                        />
                    );
                })}
            </div>
            <div className="text-center">
                <Link to="/team">
                    <button className="mt-8 rounded-lg text-white py-3 px-8 hover:bg-green-800 bg-green-700">
                        View Team
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Domains;
