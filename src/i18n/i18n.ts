import i18next from "i18next";
import LanguagueDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


const i18nConfig = {
  debug: true,
  fallbackLng: 'en',
  interpolation : {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        navbar: {
          about: 'About',
          skills: 'Skills',
          projects: 'Projects',
          contactme: 'Contact-me'
        },
        main: {
          hello: 'Hello, my name is',
          description: 'I am a Computer Scientist at the Federal University of Cariri &#127891; and a Full Stack Developer. I love making solutions and I am always searching to learn new technologies and improve on my skills &#9889;.',
          study: 'Currently, I am studying GraphQL and Tailwind CSS &#128187;.',
          myskills: 'MY SKILLS',
          projects: 'PROJECTS',
          experiences: 'EXPERIENCES',
          contactme: 'CONTACT-ME'
        }
      }
    },
    pt: {
      translation: {
        navbar: {
          about: 'Sobre',
          skills: 'Habilidades',
          projects: 'Projetos',
          contactme: 'Contato'
        },
        main: {
          hello: 'Olá, meu nome é',
          description: 'Eu sou um Cientista da Computação pela Universidade Federal do Cariri &#127891; e um Desenvolvedor Full Stack. Eu adoro criar soluções e estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades &#9889;.',
          study: "Atualmente, estou estudando GraphQL e Tailwind CSS &#128187;.",
          myskills: 'MINHAS HABILIDADES',
          projects: 'PROJETOS',
          experiences: 'EXPERIÊNCIAS',
          contactme: 'CONTATO'
        }
      }
    }
  }
};

i18next
  .use(LanguagueDetector)
  .use(initReactI18next)
  .init(i18nConfig)

export default i18next;