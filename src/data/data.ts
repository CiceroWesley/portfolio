export type skill = {
  name : string,
  src : string,
  alt : string,
  link : string
};

export type project = {
  title : string,
  urlRepository? : string,
  urlProduction? : string,
  src : string,
  alt : string
};

export type experience = {
  title : string[] | string,
  company : string[] | string,
  description : string[] | string,
  time : string[] | string
};

const skillsData : skill[] = [
  {
    name: "React JS",
    src: "/portfolio/skills/react.svg",
    alt: "React JS's logo",
    link : "https://react.dev/"
  },
  {
    name: "React Native",
    src: "/portfolio/skills/reactnative.svg",
    alt: "React Native's logo",
    link : "https://reactnative.dev/"
  },
  {
    name: "Material UI",
    src: "/portfolio/skills/materialui.svg",
    alt: "Material UI's logo",
    link : "https://mui.com/material-ui/"
  },
  // {
  //   name: "TailwindCSS",
  //   src: "/skills/tailwindcss.svg",
  //   alt: "TailwindCSS's logo"
  // },
  {
    name: "Node JS",
    src: "/portfolio/skills/nodejs.svg",
    alt: "Node JS's logo",
    link : "https://nodejs.org/en"
  },
  {
    name: "Express JS",
    src: "/portfolio/skills/express.svg",
    alt: "Express JS's logo",
    link : "https://expressjs.com/pt-br/"
  },
  {
    name: "JavaScript",
    src: "/portfolio/skills/javascript.svg",
    alt: "JavaScript's logo",
    link : "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    src: "/portfolio/skills/typescript.svg",
    alt: "TypeScript's logo",
    link : "https://www.typescriptlang.org/"
  },
  {
    name: "HTML",
    src: "/portfolio/skills/html.svg",
    alt: "HTML's logo",
    link : "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
  },
  {
    name: "CSS",
    src: "/portfolio/skills/css.svg",
    alt: "CSS's logo",
    link : "https://developer.mozilla.org/pt-BR/docs/Web/CSS"
  },
  {
    name: "C",
    src: "/portfolio/skills/c.svg",
    alt: "C's logo",
    link : "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  {
    name: "Java",
    src: "/portfolio/skills/java.svg",
    alt: "Java's logo",
    link : "https://dev.java/"
  },
  {
    name: "PHP",
    src: "/portfolio/skills/php.svg",
    alt: "PHP's logo",
    link : "https://www.php.net/"
  },
  {
    name: "Python",
    src: "/portfolio/skills/python.svg",
    alt: "Python's logo",
    link : "https://www.python.org/"
  },
  {
    name: "MySQL",
    src: "/portfolio/skills/mysql.svg",
    alt: "MySQL's logo",
    link : "https://www.mysql.com/"
  },
  {
    name: "MariaDB",
    src: "/portfolio/skills/mariadb.svg",
    alt: "MariaDB's logo",
    link : "https://mariadb.org/"
  },
  // {
  //   name: "MongoDB",
  //   src: "/portfolio/skills/mongodb.svg",
  //   alt: "MongoDB's logo",
  //   link : "https://www.mongodb.com/pt-br"
  // },
  {
    name: "Git",
    src: "/portfolio/skills/git.svg",
    alt: "Git's logo",
    link : "https://git-scm.com/"
  },
  {
    name: "Docker",
    src: "/portfolio/skills/docker.svg",
    alt: "Docker's logo",
    link : "https://www.docker.com/"
  },
  {
    name: "Linux",
    src: "/portfolio/skills/linux.svg",
    alt: "Linux's logo",
    link : "https://pt.wikipedia.org/wiki/Linux"
  },
];

const projectsData : project[] = [
  {
    title: "SGRU",
    urlRepository: "https://github.com/CiceroWesley/SGRU",
    src: "/portfolio/projects/sgru.png",
    alt: "SGRU meeting page"
  },
  {
    title: "FOUND AND LOST",
    urlRepository: "https://github.com/CiceroWesley/found-and-lost",
    src: "/portfolio/projects/lostAndFound.png",
    alt: "Found and Lost home page"
  },
  {
    title: "MESOR",
    urlProduction: "http://mesor.cloud/",
    src: "/portfolio/projects/mesor.png",
    alt: "Mesor home page"
  },
  {
    title: "PRONELE",
    urlRepository: "https://github.com/FelipeFelipeRenan/prontuario-medico",
    src: "/portfolio/projects/pronele.png",
    alt: "Initial screen of Pronele"
  },
  {
    title: "NEWS TRACKING",
    urlRepository: "https://github.com/CiceroWesley/news-tracking",
    urlProduction: "https://news-tracking.onrender.com/",
    src: "/portfolio/projects/newsTracking.png",
    alt: "Image of News Tracking"
  },
];

const experiencesData : experience[] = [
  {
    title : ["Intern at DTI", "Estágio na DTI"],
    company : ["Federal University of Cariri", "Universidade Federal do Cariri"],
    description : ["I worked mainly on the study and beginning of the implementation of a single login system using Keycloak, so that the university's systems are unified in terms of login and the user base is the same, using synchronization with LDAP. In all DTI processes, specifically in the CSI (Information Systems Coordination), Scrum was adopted, helping in the management and development of projects.", 
    "Atuei principalmente no estudo e no início da implementação de um sistema de login único usando o Keycloak, para que os sistemas da universidade sejam unificados no quesito login e a base de usuários seja a mesma, utilizando a sincronização com o LDAP. Em todos os processos da DTI, especificamente na CSI (Coordenadoria de Sistemas de Informação), o Scrum foi adotado auxiliando na gestão e no desenvolvimento dos projetos."],
    time : ["August 2022 - November 2022", "Agosto 2022 - Novembro 2022"]
  },
  {
    title : ["Extension Project Collaborator at Comon (second time)", "Colaborador de projeto de Extensão no Comon (segunda vez)"],
    company : ["Federal University of Cariri", "Universidade Federal do Cariri"],
    description : ["I mainly worked on managing the project's Facebook page, creating posts and communicating with potential partners of the initiative. Computação Online (ComOn) is a UFCA extension project, which produces audiovisual media aiming to promote the dissemination of content related to information technology and the sharing of university experiences in the Computer Science course.",
    "Atuei principalmente na administração da página do projeto no Facebook, na criação de posts e na comunicação com possíveis parceiros da iniciativa. O Computação Online (ComOn) é um projeto de extensão da UFCA, que realiza a produção de mídias audiovisuais visando promover a disseminação de conteúdos relacionados à tecnologia da informação e ao compartilhamento de experiências universitárias no curso de Ciência da Computação."],
    time : ["May 2021 - August 2021", "Maio 2021 - Agosto 2021"]
  },
  {
    title : ["PHP full-stack developer at MESOR", "Desenvolvedor full-stack PHP no MESOR"],
    company : ["Federal University of Cariri", "Universidade Federal do Cariri"],
    description : ["I was a technological initiation fellow from the National Council for Scientific and Technological Development (CNPq), working as a full stack developer on the MESOR (Statistical Modeling, Simulation, and Risk Optimization) project at the Federal University of Cariri. During that time, I dedicated myself to developing a new component for the system, enabling the registration, modeling, and prediction of point stochastic processes and time series. The application was developed using HTML, CSS, and JavaScript for the front end, PHP for the back end, followed by R scripts for modeling and stored in the MySQL DBMS. The system is available at mesor.cloud and can be accessed for free by creating an account.",
    "Fui bolsista de iniciação tecnológica do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq), atuando como desenvolvedor full stack no projeto MESOR (Modelagem Estatística, Simulação e Otimização de Risco) da Universidade Federal do Cariri. No período me dediquei a desenvolver um novo componente para o sistema, possibilitando o cadastro, modelagem e previsão de processos estocásticos pontuais e séries temporais. A aplicação foi desenvolvida usando HTML, CSS e JavaScript para o front end, PHP para o back end, seguido de scripts em R para modelagem e armazenados no SGDB MySQL. O sistema está disponível em mesor.cloud e pode ser acessado gratuitamente mediante a criação de uma conta."],
    time : ["August 2020 - July 2021", "Agosto 2020 - Julho 2021"]
  },
  {
    title : ["Extension Project Collaborator at Comon", "Colaborador de projeto de Extensão no Comon"],
    company : ["Federal University of Cariri", "Universidade Federal do Cariri"],
    description : ["I mainly worked on managing the project's Facebook page, creating posts and communicating with potential partners of the initiative. Computação Online (ComOn) is a UFCA extension project, which produces audiovisual media aiming to promote the dissemination of content related to information technology and the sharing of university experiences in the Computer Science course.",
    "Atuei principalmente na administração da página do projeto no Facebook, na criação de posts e na comunicação com possíveis parceiros da iniciativa. O Computação Online (ComOn) é um projeto de extensão da UFCA, que realiza a produção de mídias audiovisuais visando promover a disseminação de conteúdos relacionados à tecnologia da informação e ao compartilhamento de experiências universitárias no curso de Ciência da Computação."],
    time : ["September 2020 - February 2021", "Setembro 2020 - Fevereiro 2021"]
  },

]

export {skillsData, projectsData, experiencesData};