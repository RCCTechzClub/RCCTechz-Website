import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = (props) => {
    const [showMenubar, setNewDisplay] = useState(false);

    const menuHandler = () => {
        console.log(!showMenubar);
        setNewDisplay((prevCond) => !prevCond);
    };

    return (
        <Fragment>
            <div className="relative h-[50px] w-full left-0 top-0">
                <button
                    onClick={menuHandler}
                    // className={`inline-block md:hidden text-3xl text-white mt-2 ml-2 hover:text-cyan-500`}
                    className={`block absolute md:hidden text-3xl w-full text-white pl-2 py-[10px] top-0 left-0 text-left hover:text-cyan-500 ${(showMenubar? 'bg-black': '')}`}
                >
                    <i className="bi bi-list"></i>
                </button>
                <motion.ul
                    className={
                        showMenubar
                            ? `top-[50px] z-50 absolute text-white font-bold text-base text-center bg-black w-full`
                            : `hidden h-full text-white font-bold text-lg md:flex md:flex-row md:justify-center md:text-center`
                    }
                >
                    <Link to="/">
                        <li
                            className={`rounded-br-md rounded-bl-md h-full pt-3 ${
                                showMenubar ? "py-4" : "mx-6"
                            } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                            id="home-page"
                        >
                            Home
                        </li>
                    </Link>
                    <Link to="/team">
                        <li
                            className={`rounded-br-md rounded-bl-md h-full pt-3 ${
                                showMenubar ? "py-4" : "mx-6"
                            } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                            id="team"
                        >
                            Team
                        </li>
                    </Link>
                    <Link to="/projects">
                        <li
                            className={`rounded-br-md rounded-bl-md h-full pt-3 ${
                                showMenubar ? "py-4 text" : "mx-6"
                            } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                        >
                            Projects
                        </li>
                    </Link>
                    <Link to="/events">
                        <li
                            className={`rounded-br-md rounded-bl-md h-full pt-3 ${
                                showMenubar ? "py-4 text" : "mx-6"
                            } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                            id="events"
                        >
                            Events
                        </li>
                    </Link>
                </motion.ul>
            </div>
        </Fragment>
    );
};

export default Navbar;
