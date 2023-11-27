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
          description: 'I am a Computer Scientist at the Federal University of Cariri and full stack developer. I love making solutions and I am always searching to learn new technologies and improve on my skills.',
          study: 'Currently, I am studying GraphQL and Tailwind CSS.',
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
          description: 'Eu sou um Cientista da Computação pela Universidade Federal do Cariri e desenvolvedor full stack. Eu adoro criar soluções e estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.',
          study: "Atualmente, estou estudando GraphQL e Tailwind CSS.",
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