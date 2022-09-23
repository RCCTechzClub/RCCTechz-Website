import React from "react";
import clubLogo from "../../Images/RCC Techz (White).png";
import { useNavigate } from "react-router-dom";

const HFooter = () => {
    const navigate = useNavigate();

    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a
                        href="/"
                        className="flex title-font font-medium items-center md:justify-start justify-center text-white"
                    >
                        <img src={clubLogo} alt="RCCTechz" />
                    </a>
                    <div className="mt-2 text-sm text-gray-500">
                        Created by{" "}
                        <div className="mb-3">
                            <a
                                href="https://www.linkedin.com/in/mayukh-bhowmick-44533a201/"
                                target="_blank"
                                rel="noreferrer"
                                id="dev-linkedin-profile"
                            >
                                <div className="text-white">
                                    Mayukh Bhowmick
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    {[1].map(() => {
                        return (
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                                    Quick Links
                                </h2>
                                <nav className="flex gap-x-7 lg:gap-x-20 flex-col gap-y-9 md:gap-y-0 md:flex-row list-none mb-10">
                                    <li
                                        onClick={() => navigate("/projects")}
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                        id="project-link"
                                    >
                                        Projects
                                    </li>
                                    <li
                                        onClick={() => navigate("/team")}
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Team Page
                                    </li>
                                    <li
                                        onClick={() => navigate("/events")}
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Event Page
                                    </li>
                                    <li>
                                        <a
                                            href="https://rcciit.org/"
                                            className="text-gray-400 hover:text-white"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            RCCIIT Website
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/RCCTechzClub"
                                            className="text-gray-400 hover:text-white"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            RCCTechz GitHub Repos
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">
                        © 2022 RCCTechz
                    </p>
                    <span className="inline-flex gap-x-2 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a
                            href="https://www.facebook.com/RccTechzOfficial"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://discord.com/channels/837737994650648628/840830875809349642"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <img
                                src="https://img.icons8.com/fluency/344/discord.png"
                                alt="asd"
                                className="w-5 h-5 text-white"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/rcctechz_official/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/74085329/admin/"
                            rel="noreferrer"
                            target="_blank"
                            className="ml-3 text-gray-400"
                        >
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2"
                                    stroke="none"
                                ></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default HFooter;