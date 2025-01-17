export interface Experience {
    id: number;
    company: string;
    logo: string;
    position: string;
    startDate: string;
    endDate: string;
    Technologies: string[];
    accomplishment: string[];
  }

  export interface Education {
    id: number;
    school: string;
    course: string;
    issueDate: string;
    logo: string;
    courseContent: string[];
  }

  export interface Portfolio {
    id: number;
    image: string;
    title: string;
    stacks: string[];
    description: string;
    year: string;
    link: string;
    github?: string
  }

  export interface Blog {
    id: number;
    backgroundImage: string;
    title: string;
    description: string;
    readTime: string; 
    date: string;
    href: string;
  }