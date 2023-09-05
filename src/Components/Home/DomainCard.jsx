import React from "react";
import webdev from "../../SVGs/undraw_building_websites_i78t.svg";
import ai from "../../SVGs/undraw_firmware_re_fgdy.svg";
import blockchain from "../../SVGs/blockchain.svg";
import cp from "../../SVGs/programming.svg";
import mobile from "../../SVGs/appdev.svg";
import { motion } from "framer-motion";

const DomainCard = (props) => {
    var domain = props.domain;

    const displayContent = () => {
        props.updateList(domain);
    };

    var svg = "";
    if (domain.domainName === "Web Development") svg = webdev;
    if (domain.domainName === "Blockchain") svg = blockchain;
    if (domain.domainName === "Competitive Programming") svg = cp;
    if (domain.domainName === "AI/ML") svg = ai;
    if (domain.domainName === "App Development") svg = mobile;

    return (
        <motion.div
            onClick={displayContent}
            className={`cursor-pointer pb-0 px-5 pt-3 md:pb-7 flex items-center flex-col ${domain.show === false
                ? "justify-evenly"
                : " justify-center text-black space-y-9"
                } w-80 h-72 bg-slate-400 shadow-lg rounded-2xl`}
            // w-full sm:w-[57%]  md:w-[60%] lg:w-[55%] xl:w-[50%]
            initial={{ opacity: 0, scale: 0 }}
            animate={
                props.startAnimation && {
                    opacity: 1,
                    scale: 1,
                }
            }
            transition={{ duration: 1, delay: props.i * 0.2 }}
        >
            {domain.show === false ? (
                <>
                    <img className="w-[50%] md:w-40" src={svg} alt="" />
                    <h2 className="font-bold text-center text-black text-base lg:text-lg">
                        {domain.domainName}
                    </h2>
                </>
            ) : (
                <>
                    <h1 className="font-bold text-base md:text-md">
                        Domain Manager
                    </h1>
                    <h1 className="text-base md:text-lg font-semibold">
                        {domain.manager}
                    </h1>
                </>
            )}
        </motion.div>
    );
};

export default DomainCard;
