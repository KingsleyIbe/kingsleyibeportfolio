import React from 'react';
import { education } from './db.ts';
import { Link } from 'react-router';

const Education = () => {
  return (
    <div className="px-[100px] pt-[100px]">
        <h1 className="text-[25px] opacity-[0.8]">Experience</h1>
        <p className="mb-10">I am mostly self-taught, but here are some of the most relevant certifications I have achieved:</p>
        {education && education.map((item, index) => (
            <div key={index} className={`${index % 2 == 0 ? "odd" : "even"} experience-cont opacity-[0.9] mb-10 w-[75%] rounded-[8px] p-10 bg-grad`}>
                <div className="flex flex-row justify-between">
                    <div>
                        <div className="flex flex-row gap-5 items-center">
                            <img src={item.logo} alt={item.school + "Logo"} className="w-[50px] rounded-[50%] h-[50px]" />
                            <div>
                                <h3 className="font-bold">{item.course}</h3>
                                <p>{item.school}</p>
                                <p className="font-semibold">Course Content: {item.courseContent.map((item)=> (
                                    <span className="mr-2 opacity-[0.6]">{item}</span>
                                ))}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>{item.issueDate}</p>
                    </div>
                </div>
            </div>
        ))}
        <Link to="https://www.linkedin.com/in/kingsley-ibe/details/certifications/" target="__blank" className="text-[35px] mb-[100px] line hover:opacity-[0.6]">See More Certifications → </Link>
    </div>
  )
};

export default Education;