import Skill from "../Skill/Skill"
import { skillsData, projectsData, skill, project } from "../../data/data";
import { useState } from "react"
import Project from "../Project/Project";

const Main = () => {
  const [skills] = useState<skill[]>(skillsData);
  const [projects] = useState<project[]>(projectsData);


  return (
    <main>
      <div className="min-h-screen text-white mt-10">
        <article id="about">
          <div className="flex mx-3 mb-10">
            <div className="w-1/2">
              <div className="flex flex-col font-medium text-2xl">
                <span>Hello, my name is</span>
                <span className="text-5xl text-sky-300 font-semibold">Cicero Wesley</span>
              </div>
              <div>
                <span className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos quasi magni illo quaerat, quas in cumque doloribus velit enim, numquam reiciendis ullam facere laborum alias perferendis! Provident, magnam quisquam!
                </span>
              </div>
            </div>
            <div className="rounded-full w-1/2">
              <img className="rounded-full h-96 mx-auto" src="../../../public/photo.jpg" alt="" />
            </div>
          </div>
        </article>
        <article>
          <div className="">
            <header id="skills" className="flex flex-row justify-center font-medium text-2xl my-3">
              <h2>MY SKILLS</h2>
            </header>
            <div className="flex flex-row items-center justify-center flex-wrap mx-16 my-4">
              {skills && skills.map((skill) => (
                <div className="m-1">
                  <Skill name={skill.name} src={skill.src} alt={skill.alt}/>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div className="">
            <header id="projects" className="flex flex-row justify-center font-medium text-2xl">
              <h2>PROJECTS</h2>
            </header>
            <div className="flex flex-row items-center justify-center flex-wrap">
              {projects && projects.map((project) => (
                <div className="m-4">
                  <Project title={project.title} urlRepository={project.urlRepository} urlProduction={project.urlProduction} src={project.src} alt={project.alt}/>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div className="flex flex-col items-center my-10">
            <header id="contactme" className="font-medium text-2xl mb-4">CONTACT-ME</header>
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