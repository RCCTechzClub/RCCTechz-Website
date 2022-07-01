import React from "react";
// import Navbar from "../Home/Header/Navbar";
import prjctImg from "../../Images/Monitors.jpg";
import ProjectHeader from "./ProjectHeader";
import projectData from "./team-project-data";

const Project = () => {
    return (
        <div className="bg-slate-800 min-h-screen">
            {/* <Navbar /> */}
            <ProjectHeader />
            <div className="flex flex-col gap-y-48 py-24 text-white">
                {projectData.map((project, index) => {
                    return (
                        <div
                            className={`px-10 flex flex-col ${
                                index % 2 === 0
                                    ? "md:flex-row"
                                    : "md:flex-row-reverse"
                            } justify-between`}
                        >
                            <img
                                src={prjctImg}
                                alt="prjctImg"
                                className="rounded-lg shadow-2xl mb-8 md:mb-auto w-[80%] md:max-w-[40%]"
                            />
                            <div className="w-[90%] md:w-[50%] flex flex-col items-start gap-y-6 md:justify-evenly">
                                <h3 className="text-lg lg:text-2xl font-bold underline underline-offset-8">
                                    {project.title}
                                </h3>
                                <h5 className="text-md lg:text-lg font-medium">
                                    Team : {project.team.join(", ")}
                                </h5>
                                <div className="">
                                    <h6>Description</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Cumque, dignissimos?
                                    </p>
                                </div>
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub Repo Link
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;
