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
}

const skillsData : skill[] = [
  {
    name: "React JS",
    src: "../../../public/react.svg",
    alt: "React JS's logo"
  },
  {
    name: "React Native",
    src: "../../../public/reactnative.svg",
    alt: "React Native's logo"
  },
  {
    name: "Material UI",
    src: "../../../public/materialui.svg",
    alt: "Material UI's logo"
  },
  {
    name: "TailwindCSS",
    src: "../../../public/tailwindcss.svg",
    alt: "TailwindCSS's logo"
  },
  {
    name: "Node JS",
    src: "../../../public/nodejs.svg",
    alt: "Node JS's logo"
  },
  {
    name: "Express JS",
    src: "../../../public/express.svg",
    alt: "Express JS's logo"
  },
  {
    name: "JavaScript",
    src: "../../../public/javascript.svg",
    alt: "JavaScript's logo"
  },
  {
    name: "TypeScript",
    src: "../../../public/typescript.svg",
    alt: "TypeScript's logo"
  },
  {
    name: "HTML",
    src: "../../../public/html.svg",
    alt: "HTML's logo"
  },
  {
    name: "CSS",
    src: "../../../public/css.svg",
    alt: "CSS's logo"
  },
  {
    name: "C",
    src: "../../../public/c.svg",
    alt: "C's logo"
  },
  {
    name: "Java",
    src: "../../../public/java.svg",
    alt: "Java's logo"
  },
  {
    name: "PHP",
    src: "../../../public/php.svg",
    alt: "PHP's logo"
  },
  {
    name: "Python",
    src: "../../../public/python.svg",
    alt: "Python's logo"
  },
  {
    name: "MySQL",
    src: "../../../public/mysql.svg",
    alt: "MySQL's logo"
  },
  {
    name: "MariaDB",
    src: "../../../public/mariadb.svg",
    alt: "MariaDB's logo"
  },
  {
    name: "MongoDB",
    src: "../../../public/mongodb.svg",
    alt: "MongoDB's logo"
  },
  {
    name: "Git",
    src: "../../../public/git.svg",
    alt: "Git's logo"
  },
  {
    name: "Docker",
    src: "../../../public/docker.svg",
    alt: "Docker's logo"
  },
  {
    name: "Linux",
    src: "../../../public/linux.svg",
    alt: "Linux's logo"
  },

];

const projectsData : project[] = [
  {
    title: "SGRU",
    urlRepository: "https://github.com/CiceroWesley/SGRU",
    urlProduction: "#",
    src: "../../../public/sgru.png",
    alt: "SGRU meeting page"
  },
  {
    title: "Found and Lost",
    urlRepository: "https://github.com/CiceroWesley/found-and-lost",
    urlProduction: "#",
    src: "../../../public/lostAndFound.png",
    alt: "Found and Lost home page"
  },
  {
    title: "Mesor",
    urlRepository: "#",
    urlProduction: "http://mesor.cloud/",
    src: "../../../public/mesor.png",
    alt: "Mesor home page"
  },
  {
    title: "Pronele",
    urlRepository: "https://github.com/FelipeFelipeRenan/prontuario-medico",
    urlProduction: "#",
    src: "../../../public/pronele.png",
    alt: "Initial screen of Pronele"
  },
  {
    title: "SGRU",
    urlRepository: "link",
    urlProduction: "link",
    src: "path",
    alt: "altText"
  },
  {
    title: "SGRU",
    urlRepository: "link",
    urlProduction: "link",
    src: "path",
    alt: "altText"
  },
  {
    title: "SGRU",
    urlRepository: "link",
    urlProduction: "link",
    src: "path",
    alt: "altText"
  },
  {
    title: "SGRU",
    urlRepository: "link",
    urlProduction: "link",
    src: "path",
    alt: "altText"
  },
]

export {skillsData, projectsData};