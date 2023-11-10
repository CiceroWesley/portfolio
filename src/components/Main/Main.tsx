import Skill from "../Skill/Skill"
import { skillsData, projectsData, experiencesData, skill, project, experience } from "../../data/data";
import { useState } from "react"
import Project from "../Project/Project";
import Experience from "../Experience/Experience";

const Main = () => {
  const [skills] = useState<skill[]>(skillsData);
  const [projects] = useState<project[]>(projectsData);
  const [experiences] = useState<experience[]>(experiencesData);


  return (
    <main>
      <div className="min-h-screen text-white mt-10">
        <article id="about">
          <div className="sm:flex mx-3 mb-10">
            <div className="sm:w-1/2">
              <div className="flex flex-col font-semibold text-2xl">
                <span>Hello, my name is</span>
                <span className="text-5xl text-sky-300 font-semibold">Cicero Wesley</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium">
                  I am a Computer Scientist at the Federal University of Cariri &#127891; and a Full Stack Developer. I love making solutions and I am always searching to learn new technologies and improve on my skills &#9889;.
                </span>
                <span className="text-xl font-medium">
                  Currently, I am studying GraphQL and TailwindCSS &#128187;.
                </span>
              </div>
            </div>
            <div className="my-8 sm:rounded-full sm:w-1/2">
              <img className="rounded-full h-80 sm:h-96 mx-auto hover:shadow-2xl  hover:shadow-yellow-300/50" src="/portfolio/photo.jpg" alt="" />
            </div>
          </div>
        </article>
        <article>
          <div className="">
            <header id="skills" className="flex flex-row justify-center font-semibold text-3xl my-3 bg-clip-text text-transparent text-yellow-300">
              <h2 className="">MY SKILLS</h2>
            </header>
            <div className="flex flex-row items-center justify-center flex-wrap mx-16 my-4">
              {skills && skills.map((skill) => (
                <div className="m-1 transition ease-in-out delay-150 hover:scale-125 duration-300">
                  <Skill name={skill.name} src={skill.src} alt={skill.alt} link={skill.link}/>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div className="">
            <header id="projects" className="flex flex-row justify-center font-semibold text-2xl bg-clip-text text-transparent text-yellow-300">
              <h2>PROJECTS</h2>
            </header>
            <div className="flex flex-row items-center justify-center flex-wrap">
              {projects && projects.map((project) => (
                <div className="m-4 transition ease-in-out delay-150 hover:scale-125 duration-300">
                  <Project title={project.title} urlRepository={project.urlRepository} urlProduction={project.urlProduction} src={project.src} alt={project.alt}/>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div>
            <header id="projects" className="flex flex-row justify-center font-semibold text-2xl bg-clip-text text-transparent text-yellow-300">
              <h2>EXPERIENCES</h2>
            </header>
            <ul className="flex flex-col items-center justify-center list-disc space-y-2">
              {experiences && experiences.map((experience) => (
                <li className="w-1/2">
                  <Experience title={experience.title} company={experience.company} description={experience.description} time={experience.time}/>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article>
          <div className="flex flex-col items-center my-10">
            <header id="contactme" className="font-semibold text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-b text-yellow-300">CONTACT-ME</header>
            <div className="flex flex-row items-center space-x-2">
              <div>
                <a href="mailto: wesleycariutaba@gmail.com">
                  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail badge"/>
                </a>
              </div>
              <div>
                <a href="https://github.com/CiceroWesley/">
                  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin badge"/>
                </a>
              </div>
              <div>
                <a href="https://github.com/CiceroWesley/">
                  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github badge"/>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default Main