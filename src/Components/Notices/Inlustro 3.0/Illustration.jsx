import React, { useEffect, useState } from "react";

import draw from "./assets/draw.png";

import "react-icons";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Illustration = () => {

    const [startAnimation, setStartAnimation] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [inView]);

    return (
        <div className="flex flex-col gap-[5rem] md:flex-row justify-evenly  items-center mt-40" ref={ref}>
            <motion.div className="h-[225px] w-[225px] flex flex-col z-[10] mr-5 justify-center items-center rounded-full hover:scale-110 duration-100 bg-[#7CDD9D]"
                initial={{ opacity: 0, x: "-20%" }}
                animate={startAnimation && { opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <img src={draw} alt="" />
            </motion.div>
            <motion.div className=" text-white z-[10] h-[500px] space-y-7 w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col hover:scale-110 duration-100 justify-center bg-[#2BA555] text-center text-lg font-bold p-[4rem] rounded-3xl font-patua md:space-y-5"
                initial={{ opacity: 0, x: "+20%" }}
                animate={startAnimation && { opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
                <p className=" text-4xl">Illustration</p>
                <p className=" text-lg">Bringing imagination to life through visual storytelling and creative expression.</p>
                <p className=" text-lg"> <button class="rounded-full px-3 py-1 mt-2 bg-[#7CDD9D] font-semibold hover:scale-110 duration-100 text-slate-500">Submission Closed</button></p>
            </motion.div>
        </div>
    )
}

export default Illustration;