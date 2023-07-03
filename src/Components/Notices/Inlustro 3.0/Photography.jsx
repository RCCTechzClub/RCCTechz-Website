import React, { useEffect, useState } from "react";
import camera from "./assets/camera.png";
import "react-icons";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Photography = () => {

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
        <div className="flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40"
            ref={ref}
        >
            <motion.div className=" text-white z-[10] h-[500px] space-y-7 w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#BE4A4A] text-center text-lg font-bold p-[2rem] md:p-[4rem] rounded-3xl font-patua md:space-y-5"
                initial={{ opacity: 0, x: "-20%" }}
                animate={startAnimation && { opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <p className=" text-4xl">Photography</p>
                <p className=" text-lg">Capturing moments and stories through the lens, preserving memories and evoking emotions.</p>
                <p className=" text-lg"> <button class="rounded-full px-3 py-1 mt-2 bg-[#E48C8C] font-semibold hover:scale-110 duration-100 text-slate-300">Submission Closed</button></p>
            </motion.div>
            <motion.div className="h-[225px] z-[10] w-[225px] flex flex-col mr-5 justify-center items-center rounded-full hover:scale-110 duration-100 bg-[#E48C8C]"
                initial={{ opacity: 0, x: "+20%" }}
                animate={startAnimation && { opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
                <img src={camera} alt="/" className="" />
            </motion.div>
        </div>
    )
}

export default Photography;