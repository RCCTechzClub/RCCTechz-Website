import React, { useEffect, useState } from "react";
import reg from "./assets/reg.png";
import cheked from "./assets/checked.png";
import trophy from "./assets/trophy.png";

import rocket from "./assets/rocket.png";
import bulb from "./assets/bulb.png";

import banner from "./assets/banner.jpeg"
import "react-icons";
import Navbar from "../../Home/Header/Navbar";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Graphics from "./Graphics";
import Photography from "./Photography";
import Illustration from "./Illustration";
import Animation from "./Animation";



const Main = () => {

    const [startAnimation, setStartAnimation] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [inView]);

    return (
        <div className="w-full overflow-y-hidden bg-black">
            <Navbar />
            <div className="min-w-[415px] lg:w-full  bg-black text-white flex items-center justify-center">

                <img src={banner} alt="" className="w-full h-full md:mt-14" />
            </div>
            <div className="bg-[#000A2F] pb-[100px] min-w-[415px] lg:w-full">
                <div className=" flex flex-col gap-[5rem] md:flex-row justify-evenly items-center pt-[100px]"
                    ref={ref}
                >
                    <motion.div
                        className="bg-[#9B8CF8] z-[10] mr-5 hover:scale-110 duration-100 flex flex-col items-center  justify-center w-[280px] h-[395px] md:w-[315px] md:h-[434px] rounded-3xl"
                        initial={{ opacity: 0, x: "-20%" }}
                        animate={startAnimation && { opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                    >
                        <div>
                            <img src={reg} alt="/" className="h-30" />
                        </div>
                        <p className="font-patua font-bold w-[225px] pt-16 flex flex-col items-center space-y-2 text-xl">
                            <p>Imagine</p> <p>Design</p> <p>Develop</p>
                        </p>
                    </motion.div>
                    <motion.div
                        className=" bg-[#E96D6D] z-[10] mr-5  flex flex-col justify-center items-center w-[280px] h-[395px] md:w-[315px] md:h-[434px] rounded-3xl"
                        initial={{ opacity: 0, y: "+20%" }}
                        animate={startAnimation && { opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                    >
                        <div>
                            <img src={cheked} alt="/" className=" h-30" />
                        </div>
                        <p className="font-patua font-bold w-[225px] pt-12 flex flex-col items-center justify-center space-y-2 text-md text-center">
                            <p>Present your work with confidence</p> <p>contribute and make an impact.</p> <p> <button class="rounded-full px-4 py-2 mt-5 font-semibold hover:scale-110 duration-100 text-slate-500 bg-[#ffe4e6]">Registration closed</button></p>
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-[#7CDD9D] z-[10] mr-5 hover:scale-110 duration-100 flex flex-col items-center justify-center w-[280px] h-[395px] md:w-[315px] md:h-[434px] rounded-3xl"
                        initial={{ opacity: 0, x: "+20%" }}
                        animate={startAnimation && { opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                    >
                        <div>
                            <img src={trophy} alt="/" className=" h-30" />
                        </div>
                        <p className="font-patua font-bold w-[225px] flex flex-col items-center justify-center text-center pt-16 text-2xl">
                            <p>Rising above the competition.</p>
                        </p>
                    </motion.div>
                </div>

                <div>
                    <img
                        src={bulb}
                        alt="/"
                        className="absolute right-[0] top-[5040px] lg:top-[1800px] h-[300px] lg:h-[608px] opacity-[60%] "
                    />
                </div>

                <div>
                    <img
                        src={rocket}
                        alt=""
                        className="z-[0] absolute top-[2040px] lg:top-[1200px] lg:left-[-80px] h-[300px] lg:h-[608px] opacity-[60%]"
                    />
                </div>

                <Graphics />

                <Photography />

                <Illustration />

                <Animation />

            </div>
        </div>
    );
};

export default Main;
//absolute left-[450px] top-[143px] font-normal text-[200px] font-patua leading-[243.8px] text-center tracking-[10%]
