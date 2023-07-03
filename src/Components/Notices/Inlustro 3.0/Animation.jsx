import React, { useEffect, useState } from "react";
import video from "./assets/video.png";

import "react-icons";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animation = () => {

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
        <div className=" mx-3 flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40 " ref={ref}>
            <motion.div className="text-white z-[10] w-[300px] mr-5 h-[500px] space-y-7 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#862197] text-center text-lg font-bold p-[4rem] rounded-3xl font-patua md:space-y-5"
                initial={{ opacity: 0, x: "-20%" }}
                animate={startAnimation && { opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <p className=" text-4xl">Video and Animation</p>
                <p className=" text-lg">Crafting compelling narratives through the art of moving images, sound, and editing.</p>
                <p className=" text-lg"> <button class="rounded-full px-3 py-1 mt-2 bg-[#DDA6E5] font-semibold hover:scale-110 duration-100 text-slate-600">Submission Closed</button></p>
            </motion.div>
            <motion.div className="h-[225px] w-[225px] z-[10] mr-5 flex flex-col justify-center hover:scale-110 duration-100 items-center rounded-full bg-[#DDA6E5]"
                initial={{ opacity: 0, x: "+20%" }}
                animate={startAnimation && { opacity: 1, x: 0 }}
                transition={{ delay: (0.3), duration: 0.7, ease: "easeOut" }}
            >
                <img src={video} alt="/" className="" />
            </motion.div>
        </div>
    )
}

export default Animation;