import React, { useState } from "react";
import { portfolio } from "./db.ts";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const coursesPerPage = 4;

    // Calculate the courses to display for the current page
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = portfolio.slice(indexOfFirstCourse, indexOfLastCourse);

    // Calculate total pages
    const totalPages = Math.ceil(portfolio.length / coursesPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="px-[100px] pt-[100px] mb-[80px]">
             <h1 className="text-[25px] opacity-[0.8] mb-10">Porfolio</h1>
            <div className="flex flex-row gap-5">
                {currentCourses.map((project, index) => (
                    <div key={index} className="experience-cont p-5 rounded-[8px]" style={{transform: `translateY(${index * 10}px)`}}>
                        <div>
                            <img src={project?.image} alt={project?.title} className="w-[100%] h-[100px]" />
                        </div>
                        <h3 className="my-2 font-bold text-[18px] ">{project?.title}</h3>
                        <p className="text-sm text-gray-600 mb-2 flex flex-wrap gap-2">{project?.stacks.map((stack, idx) => (
                            <span key={idx} className="mr-2 opacity-[0.6] px-2 py-1 bg-gray-200 rounded-md text-xs text-gray-700">{stack}</span>
                        ))}</p>

                        <p className="mb-2 text-[14px]">{project?.description}</p>
                        <div className="flex flex-row justify-between">
                            <div>
                                <p>{project?.year}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Link to={project?.github}><FontAwesomeIcon icon={faGithub} /></Link>
                                <Link to={project?.link}><FontAwesomeIcon icon={faLink} /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`px-3 py-1 mx-1 text-sm border rounded-md ${
              index + 1 === currentPage
                ? "bg-grad"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
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
