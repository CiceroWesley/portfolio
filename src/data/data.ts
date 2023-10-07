export type skill = {
  name : string,
  src : string,
  alt : string
};

export type project = {
  title : string,
  urlRepository : string,
  urlProduction? : string,
  src : string,
  alt : string
};

export type experience = {
  title : string,
  company : string,
  description : string,
  time : string
};

const skillsData : skill[] = [
  {
    name: "React JS",
    src: "../../../public/skills/react.svg",
    alt: "React JS's logo"
  },
  {
    name: "React Native",
    src: "../../../public/skills/reactnative.svg",
    alt: "React Native's logo"
  },
  {
    name: "Material UI",
    src: "../../../public/skills/materialui.svg",
    alt: "Material UI's logo"
  },
  // {
  //   name: "TailwindCSS",
  //   src: "../../../public/skills/tailwindcss.svg",
  //   alt: "TailwindCSS's logo"
  // },
  {
    name: "Node JS",
    src: "../../../public/skills/nodejs.svg",
    alt: "Node JS's logo"
  },
  {
    name: "Express JS",
    src: "../../../public/skills/express.svg",
    alt: "Express JS's logo"
  },
  {
    name: "JavaScript",
    src: "../../../public/skills/javascript.svg",
    alt: "JavaScript's logo"
  },
  {
    name: "TypeScript",
    src: "../../../public/skills/typescript.svg",
    alt: "TypeScript's logo"
  },
  {
    name: "HTML",
    src: "../../../public/skills/html.svg",
    alt: "HTML's logo"
  },
  {
    name: "CSS",
    src: "../../../public/skills/css.svg",
    alt: "CSS's logo"
  },
  {
    name: "C",
    src: "../../../public/skills/c.svg",
    alt: "C's logo"
  },
  {
    name: "Java",
    src: "../../../public/skills/java.svg",
    alt: "Java's logo"
  },
  {
    name: "PHP",
    src: "../../../public/skills/php.svg",
    alt: "PHP's logo"
  },
  {
    name: "Python",
    src: "../../../public/skills/python.svg",
    alt: "Python's logo"
  },
  {
    name: "MySQL",
    src: "../../../public/skills/mysql.svg",
    alt: "MySQL's logo"
  },
  {
    name: "MariaDB",
    src: "../../../public/skills/mariadb.svg",
    alt: "MariaDB's logo"
  },
  {
    name: "MongoDB",
    src: "../../../public/skills/mongodb.svg",
    alt: "MongoDB's logo"
  },
  {
    name: "Git",
    src: "../../../public/skills/git.svg",
    alt: "Git's logo"
  },
  {
    name: "Docker",
    src: "../../../public/skills/docker.svg",
    alt: "Docker's logo"
  },
  {
    name: "Linux",
    src: "../../../public/skills/linux.svg",
    alt: "Linux's logo"
  },

];

const projectsData : project[] = [
  {
    title: "SGRU",
    urlRepository: "https://github.com/CiceroWesley/SGRU",
    urlProduction: "#",
    src: "../../../public/projects/sgru.png",
    alt: "SGRU meeting page"
  },
  {
    title: "FOUND AND LOST",
    urlRepository: "https://github.com/CiceroWesley/found-and-lost",
    urlProduction: "#",
    src: "../../../public/projects/lostAndFound.png",
    alt: "Found and Lost home page"
  },
  {
    title: "MESOR",
    urlRepository: "#",
    urlProduction: "http://mesor.cloud/",
    src: "../../../public/projects/mesor.png",
    alt: "Mesor home page"
  },
  {
    title: "PRONELE",
    urlRepository: "https://github.com/FelipeFelipeRenan/prontuario-medico",
    urlProduction: "#",
    src: "../../../public/projects/pronele.png",
    alt: "Initial screen of Pronele"
  },
  {
    title: "KEYLOGGER",
    urlRepository: "https://github.com/CiceroWesley/Keylogger",
    urlProduction: "#",
    src: "../../../public/projects/keylogger.jpeg",
    alt: "Ilustractive image of keylogger"
  },
  {
    title: "DESIGN PATTERNS",
    urlRepository: "https://github.com/CiceroWesley/analise-e-projeto-de-sistemas",
    urlProduction: "#",
    src: "../../../public/projects/designpatterns.jpg",
    alt: "Ilustractive image of design patterns"
  },
];

const experiencesData : experience[] = [
  {
    title : "Intern at DTI",
    company : "Federal University of Cariri",
    description : "I worked mainly on the study and beginning of the implementation of a single login system using Keycloak, so that the university's systems are unified in terms of login and the user base is the same, using synchronization with LDAP. In all DTI processes, specifically in the CSI (Information Systems Coordination), Scrum was adopted, helping in the management and development of projects.",
    time : "August 2022 - November 2022"
  },
  {
    title : "Extension Project Collaborator at Comon (second time)",
    company : "Federal University of Cariri",
    description : "I mainly worked on managing the project's Facebook page, creating posts and communicating with potential partners of the initiative. Computação Online (ComOn) is a UFCA extension project, which produces audiovisual media aiming to promote the dissemination of content related to information technology and the sharing of university experiences in the Computer Science course.",
    time : "May 2021 - August 2021"
  },
  {
    title : "PHP full-stack developer at MESOR",
    company : "Federal University of Cariri",
    description : "I was a technological initiation scholarship holder, where I worked on implementing a component of the MESOR website (Statistical Modeling, Simulation and Risk Optimization). The title of the component is 'platform for registration, modeling and forecasting of point-in-time stochastic processes and time series'. The website on the front-end uses HTML, CSS and JavaScript and on the back-end, PHP, the modeling scripts are written in R and the data is stored in the MySQL DBMS. The application is available on the MESOR website (mesor.cloud), which is a study and research group at UFCA (Federal University of Cariri).",
    time : "August 2020 - July 2021"
  },
  {
    title : "Extension Project Collaborator at Comon",
    company : "Federal University of Cariri",
    description : "I mainly worked on managing the project's Facebook page, creating posts and communicating with potential partners of the initiative. Computação Online (ComOn) is a UFCA extension project, which produces audiovisual media aiming to promote the dissemination of content related to information technology and the sharing of university experiences in the Computer Science course.",
    time : "September 2020 - February 2021"
  },

]

export {skillsData, projectsData, experiencesData};