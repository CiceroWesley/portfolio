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
    src: "../../../public/vite.svg",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "../../../public/React-icon.png",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
  {
    name: "React JS",
    src: "url",
    alt: "React JS's logo"
  },
];

const projectsData : project[] = [
  {
    title: "SGRU",
    urlRepository: "link",
    urlProduction: "link",
    src: "../../../public/vite.svg",
    alt: "altText"
  },
  {
    title: "SGRU",
    urlRepository: "link",
    urlProduction: "link",
    src: "../../../public/lostAndFound.png",
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