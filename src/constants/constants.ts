import allstate from "../assets/projects/allstate.png";
import copernicus from "../assets/projects/copernicus.png";
import ecommerce from "../assets/projects/e-commerce.png";
import project4 from "../assets/projects/project-4.jpg";
import cricscore from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting
 robust and scalable web applications. With 8 years of hands-on experience, I have honed my 
 skills in front-end technologies like React, as well as back-end technologies like Node.js,
  MySQL, Nest js , Express Js, and MongoDB. My goal is to leverage my expertise to create innovative 
  solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for
 creating efficient and user-friendly web applications. With 8 years of professional experience, 
 I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, Nest Js, Express Js, 
 and MongoDB. My journey in web development began with a deep curiosity for how things work, 
 and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
 I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality
  solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing
   to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Senior Full Stack Developer",
    company: "Blueyonder",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js.
     Implemented RESTful APIs and integrated with MongoDB databases.
    Collaborated with stakeholders to define project requirements and timelines.Developed a
     RESTful API that allowed for secure and efficient data transfer between the front-end
and back-end systems.Designed efficient database schemas to store data from the web applications.`,
    technologies: ["Javascript", "React.js", "Express", "Redux", "MongoDB"],
  },
  {
    year: "2019 - 2021",
    role: "Frontend Developer",
    company: "Blueyonder",
    description: `Designed and developed user interfaces for web applications using  and React.
     Worked closely with backend developers to integrate frontend components with Node.js APIs. 
     Implemented responsive designs and optimized frontend performance. Optimized existing web 
     application performance by refactoring code and improving page load times.
     Validated code for proper structuring, security and compatibility with different browsers, devices
or operating systems`,
    technologies: ["HTML", "CSS", "React.js", "mySQL"],
  },
  {
    year: "2018 - 2019",
    role: "Senior Software Engineer",
    company: "Infosys",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. 
    Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional
     teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2016 - 2017",
    role: "Software Engineer",
    company: "Infosys",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "All State",
    image: allstate,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Value Explorer",
    image: copernicus,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link: "https://bylumuiportalpltna.azureedge.net/home/",
  },
  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://av-ecommerce-client.onrender.com/",
  },
  {
    title: "Cric Score",
    image: cricscore,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://av-ecommerce-client.onrender.com/",
  },
  {
    title: "Task Management App",
    image: project4,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://av-ecommerce-client.onrender.com/",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
