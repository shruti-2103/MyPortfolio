import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";
import { SiMongodb, FaNodeJs, SiExpress,  SiGithub, SiTailwindcss } from "react-icons/si";

// IMAGES
import profileImg from '../assets/profile.avif';
import { title } from "framer-motion/client";


// DEFAULT EXPORTS
export const assets = {
    profileImg,
};


// ABOUT INFO
export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
        color: 'text-purple'
    },
    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description: 'Beautiful design and user experience are at the heart of everything I create.',
        color: 'text-pink'
    },
    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'I write maintainable, efficient code following best practices and modern patterns.',
        color: 'text-blue'
    }
];


// SKILLS (NO ERRORS)
export const skills = [
    {
        title: "HTML",
        icon: FaHtml5,
        tags: ["HTML5", "Semantic HTML"],
        description: "Structure of web pages."
    },
    {
        title: "CSS",
        icon: FaCss3Alt,
        tags: ["CSS3", "Flexbox", "Grid"],
        description: "Styling responsive UI."
    },
    {
        title: "JavaScript",
        icon: FaJs,
        tags: ["ES6", "DOM", "Async"],
        description: "Making apps interactive."
    },
    {
        title: "React",
        icon: FaReact,
        tags: ["Hooks", "Components"],
        description: "Build reusable UI."
    },
    {
        title: "MongoDB",
        icon: SiMongodb,
        tags: ["Database", "NoSQL"],
        description: "Handle backend data."
    },
    {
        title: "Node.js",
        icon: FaNodeJs,
        tags: ["REST APIs", "Authentication"],
        description: "Powerful JavaScript runtime used to build scalable backend applications and RESTful APIs."
    },

     {
        title: "Express.js",
        icon: SiExpress,
        tags: ["Node.js", "Backend API"],
        description: "Fast, unopinionated, minimalist web framework for Node.js."
    },

     {
        title: "GitHub",
        icon: SiGithub,
        tags: ["Version Control", "Collaboration"],
        description: "Host and review code, manage projects, and build software together."
    },
    
  {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
        tags: ["CSS", "Utility-first"],
        description: "Rapidly build modern websites without ever leaving your HTML."
    }
];
 






