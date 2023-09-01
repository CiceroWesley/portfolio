import Skill from "../Skill/Skill"
import { skillsData, projectsData, skill, project } from "../../data/data";
import { useState } from "react"
import Project from "../Project/Project";

const Main = () => {
  const [skills] = useState<skill[]>(skillsData);
  const [projects] = useState<project[]>(projectsData);


  return (
    <main>
      <div className="min-h-screen">
        <article id="about">
          <div className="flex flex-row items-center justify-between">
            <div>
              <div>
                <span>Hello, my name is</span>
                <span>Cicero Wesley</span>
              </div>
              <div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos quasi magni illo quaerat, quas in cumque doloribus velit enim, numquam reiciendis ullam facere laborum alias perferendis! Provident, magnam quisquam!
                </span>
              </div>
            </div>
            <div>
              My photo
            </div>
          </div>
        </article>
        <article>
          <div className="border-t-4">
            <header id="skills">
              <h2>My skills</h2>
            </header>
            <div className="flex flex-row items-center justify-center">
              {skills && skills.map((skill) => (
                <div>
                  <Skill name={skill.name} src={skill.src} alt={skill.alt}/>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div className="border-t-4">
            <header id="projects">
              <h2>Projects</h2>
            </header>
            <div>
              {projects && projects.map((project) => (
                <Project title={project.title} urlRepository={project.urlRepository} urlProduction={project.urlProduction} src={project.src} alt={project.alt}/>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div className="flex flex-col items-center border-t-4">
            <header id="contactme">Contact-me</header>
            <div>
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