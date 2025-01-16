import { Experience, Education } from "../../helpers/interface";
import afrikbrand from "../../assets/images/afrikbrand.png";
import drelugs from "../../assets/images/Drelugs.png";
import figorr from "../../assets/images/figorr.png";
import google from "../../assets/images/google.png";
import microverse from "../../assets/images/microverse.png";
import imopoly from "../../assets/images/imopoly.png";

export const workExperience: Experience[] = [
    {
      id: 1,
      company: "AFRIKBRAND LIMITED",
      logo: afrikbrand,
      position: "Software Engineer",
      startDate: "Feb 2022",
      endDate: "Present",
      Technologies: ["React,", "Typescript,", "WordPress,", "Nodejs"],
      accomplishment: [
        "Utilized frontend frameworks such as React and Typescript to create dynamic and interactive user experiences, resulting in a 78% improvement in overall application performance",
        "Utilized strategic engineering procedures to maintain and improve the company’s point of sales system feature that was built through WordPress and React.",
        "Achieved 15% more efficiency by testing software for defects and operating speed, resolving bugs, and documenting procedures",
        "Successfully coordinated and executed the seamless integration of third-party APIs, expanding product functionality and meeting evolving customer needs."
    ]
    },
    {
        id: 2,
        company: "MICROVERSE",
        logo: microverse,
        position: "Web Development Mentor ",
        startDate: "Oct 2021",
        endDate: "May 2022",
        Technologies: ["TDD,", "Webpack,", "Jest"],
        accomplishment: [
          "Mentored 3 Junior web developers, providing technical support through code reviews.",
          " Proposed improvements to code organization to improve code quality and overall performance by 70%.",
          "Provided advice and tips on how to maintain motivation to maintain longevity in the program.",
          "Introduced code review best practices, leading to a 40% improvement in code quality and a significant reduction in post-release issues"
      ]
      },
      {
        id: 3,
        company: "DRELUGS LIMITED",
        logo: drelugs,
        position: "Software Engineer",
        startDate: "Jun 2020",
        endDate: "Oct 2021",
        Technologies: ["React,", "Typescript,", "Redux,", 'Git and Github'],
        accomplishment: [
          "Led the development of responsive and intuitive user interfaces for web applications, resulting in a 100% increase in user engagement and an 80% improvement in user satisfaction.",
          "Collaborated closely with UI/UX designers and backend developers, translating design concepts into functional code, and reducing development time by 27%.",
          "Enhanced application features to effectively fix bugs and optimize overall performance reliability, and efficiency",
          "Contributed to open-source projects, earning recognition within the developer community and enhancing the company's reputation as a technology leader."
      ]
      },
      {
        id: 4,
        company: "FIGORR (Formerly GRICD INTEGRATED SERVICES)",
        logo: figorr,
        position: "Software Engineer",
        startDate: "May 2019",
        endDate: "March 2020",
        Technologies: ["Debugging,", "(SDLC),", "Agile Methodologies"],
        accomplishment: [
          "nvolved in SDLC processes like requirement analysis, designing, coding, testing, releasing and providing maintenance, and documentation at each stage.",
          "Proficiently troubleshot simple and complex IoT technological issues for different assign projects, achieving over 95% customer satisfaction rate.",
          "Utilized agile software development practices, data and testing standards, code reviews, source code management, continuous delivery, and software architecture.",
          "Resolved critical security vulnerabilities through a thorough code audit, ensuring compliance with industry standards and safeguarding sensitive user data."
      ]
      },
]

export const education: Education[] = [
    {
        id: 1,
        school: "Microverse",
        course: "Software Development",
        issueDate: "May, 2022",
        courseContent: ["Data Structure and Algorithms,", "Database,", "Computer Science"],
        logo: microverse
    },
    {
        id: 2,
        school: "Google",
        course: "Google Africa Web Development Program",
        issueDate: "May, 2022",
        courseContent: ["Data Structure and Algorithms,", "Collaboration,", "Computer Science,"],
        logo: google
    },

    {
        id: 3,
        school: "Imo State Polytechnic",
        course: "HND, Chemical Engineering",
        issueDate: "Oct, 2017",
        courseContent: ["Engineering Processes,", "Critical Thinking,", "Problem Solving"],
        logo: imopoly
    },
    
]