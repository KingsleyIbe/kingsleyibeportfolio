import React, { useState } from "react";
import { portfolio } from "./db.ts";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const coursesPerPage = 4;


    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = portfolio.slice(indexOfFirstCourse, indexOfLastCourse);


    const totalPages = Math.ceil(portfolio.length / coursesPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const gradients = [
        "linear-gradient(180deg, #0b0bf0, #ff6a68)",
        "linear-gradient(135deg, #8e2de2,rgb(226, 24, 24))",
        "linear-gradient(90deg, #fcb900, #181842)",
        "linear-gradient(180deg, #272424, #9109ec)",
    ];

    return (
        <div className="px-5 md:px-[100px] pt-[100px] mb-[80px]">
            <h1 className="text-[25px] opacity-[0.8] mb-10">Portfolio</h1>
            <div className="flex flex-col md:flex-row gap-5">
                {currentCourses.map((project, index) => (
                    <div
                        key={index}
                        className="experience-cont p-5 rounded-[8px] w-[100%] md:w-[33.3%]"
                        style={{
                            background: gradients[index % gradients.length],
                        }}
                    >
                        <div>
                            <img
                                src={project?.image}
                                alt={project?.title}
                                className="card-img"
                            />
                        </div>
                        <h3 className="my-2 font-bold text-[18px]">{project?.title}</h3>
                        <p className="text-sm text-gray-600 mb-5 flex flex-wrap gap-2">
                            {project?.stacks.map((stack, idx) => (
                                <span key={idx} className="mr-2 opacity-[0.6] px-2 py-1 bg-gray-200 rounded-md text-xs text-gray-700">
                                    {stack}
                                </span>
                            ))}
                        </p>
                        <p className="mb-10 text-[14px] short-text">{project?.description}</p>
                        <div className="flex flex-row justify-between">
                            <div>
                                <p>{project?.year}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {project?.github && (
                                    <Link to={project?.github} target="__blank" className="hover:opacity-[0.6]">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Link>
                                )}
                                <Link to={project?.link} target="__blank" className="hover:opacity-[0.6]">
                                    <FontAwesomeIcon icon={faLink} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`px-3 py-1 mx-1 text-sm border rounded-md ${index + 1 === currentPage
                                ? "bg-grad" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Projects;
