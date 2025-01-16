import React from 'react';
import { workExperience } from './db.ts';

const Experience = () => {
  return (
    <div className="px-[100px] pt-[100px]">
        <h1 className="text-[25px] opacity-[0.8] mb-10">Experience</h1>
        {workExperience && workExperience.map((item, index) => (
            <div key={index} className={`${index % 2 == 0 ? "odd" : "even"} experience-cont opacity-[0.9] mb-10 w-[75%] rounded-[8px] p-10 bg-grad`}>
                <div className="flex flex-row justify-between">
                    <div>
                        <div className="flex flex-row gap-5 items-center">
                            <img src={item.logo} alt={item.company + "Logo"} className="w-[50px] rounded-[50%] h-[50px]" />
                            <div>
                                <h3 className="font-bold">{item.position}</h3>
                                <p>{item.company}</p>
                                <p className="font-semibold">Technologies: {item.Technologies.map((item)=> (
                                    <span className="mr-2 opacity-[0.6]">{item}</span>
                                ))}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p>{item.startDate}</p>
                        <p>–</p>
                        <p>{item.endDate}</p>
                    </div>
                </div>
                <ul className="flex flex-col gap-2 mt-10">
                    {item.accomplishment.map((item) => (
                    <li className="list-disc">{item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
};

export default Experience;