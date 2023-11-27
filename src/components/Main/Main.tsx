import Skill from "../Skill/Skill"
import { skillsData, projectsData, experiencesData, skill, project, experience } from "../../data/data";
import { useState } from "react"
import { Fade } from "react-awesome-reveal";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";
import { useTranslation } from "react-i18next";

type Props = {
  selectedLanguage: number
}



const Main = ({selectedLanguage}: Props) => {
  const {t} = useTranslation();
  const [skills] = useState<skill[]>(skillsData);
  const [projects] = useState<project[]>(projectsData);
  const [experiences] = useState<experience[]>(experiencesData);

  return (
    <main>
      <div className="min-h-screen text-text-color pt-8 px-6 space-y-12">
        <article id="about">
          <div className="sm:flex">
            <div className="sm:w-1/2">
              <div className="flex flex-col font-semibold text-2xl">
                <span>{t('main.hello')}</span>
                <Fade>
                  <span className="text-5xl text-primary-color font-semibold">Cicero Wesley</span>
                </Fade>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium">
                  {t('main.description')}
                </span>
                <span className="text-xl font-medium">
                  {t('main.study')}
                </span>
              </div>
            </div>
            <div className="sm:rounded-full sm:w-1/2">
              <img className="rounded-full h-80 sm:h-96 mx-auto hover:shadow-2xl  hover:shadow-accent-color" src="/portfolio/photo.jpg" alt="" />
            </div>
          </div>
        </article>
        <article>
          <div>
            <header id="skills" className="flex flex-row justify-center font-semibold text-3xl bg-clip-text text-primary-color">
              <h2 className="">{t('main.myskills')}</h2>
            </header>
            <div className="flex flex-row items-center justify-center flex-wrap my-4">
              {skills && skills.map((skill) => (
                <div className="p-3 transition ease-in-out delay-150 hover:scale-125 duration-300">
                  <Fade>
                    <Skill name={skill.name} src={skill.src} alt={skill.alt} link={skill.link}/>
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div className="">
            <header id="projects" className="flex flex-row justify-center font-semibold text-2xl bg-clip-text text-primary-color">
              <h2>{t('main.projects')}</h2>
            </header>
            <div className="flex flex-row items-center justify-center flex-wrap">
              {projects && projects.map((project) => (
                <div className="p-5">
                  <Fade>
                    <Project title={project.title} urlRepository={project.urlRepository} urlProduction={project.urlProduction} src={project.src} alt={project.alt}/>
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <div>
            <header id="projects" className="flex flex-row justify-center font-semibold text-2xl bg-clip-text text-primary-color">
              <h2>{t('main.experiences')}</h2>
            </header>
            <ul className="flex flex-col items-center justify-center list-disc space-y-2">
              {experiences && experiences.map((experience) => (
                <Fade>
                  <li className="w-1/2">
                    <Experience title={experience.title[selectedLanguage]} company={experience.company[selectedLanguage]} description={experience.description[selectedLanguage]} time={experience.time[selectedLanguage]}/>
                  </li>
                </Fade>
              ))}
            </ul>
          </div>
        </article>
        <article>
          <Fade>
            <div className="flex flex-col items-center">
              <header id="contactme" className="font-semibold text-2xl mb-4 bg-clip-text bg-gradient-to-b text-primary-color">{t('main.contactme')}</header>
              <div className="flex flex-row items-center space-x-2">
                <div>
                  <a href="mailto: wesleycariutaba@gmail.com">
                    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail badge"/>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/cicero-wesley/">
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
          </Fade>
        </article>
      </div>
    </main>
  )
}

export default Main