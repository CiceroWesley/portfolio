import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation, } from "react-i18next";
import brazilFlag from '../../assets/brazil.png';
import usaFlag from '../../assets/usa.png';

type Props = {
  language: {[key: string] : number},
  setSelectedLanguage: Dispatch<SetStateAction<number>>
}

const Navbar = ({language, setSelectedLanguage} : Props) => {
  const {t, i18n} = useTranslation();
  const [angle, setAngle] = useState<number>(0);
  const [angleValues] = useState<number[]>([0, 1, 2, 3, 6, 12, 45, 90, 180]);
  const defaultClasses = "px-2 border-b-2 border-gray-300 transition ease-in-out delay-125 duration-300 hover:border-secondary-color hover:border-b-2";

  const rotate = () : void => {
    const randomNumber : number = Math.floor(Math.random() * angleValues.length);
    setAngle(angleValues[randomNumber]);
  };

  const changeLanguage = (lang : string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(language[lang]);
  }

  return (
    <nav className="py-3 px-6 bg-background-color">
      <div className="flex flex-col text-text-color font-medium">
        <div className='flex flex-row items-center justify-between'>
          <div style={{rotate: `${angle}deg`, transitionTimingFunction: 'ease-in-out', transitionDelay: '0.15s', transitionDuration: '0.3s'}} className={`text-primary-color font-semibold text-2xl italic`}>
            <a href="#">
              <span onMouseEnter={() => rotate()}>CWSF</span>
            </a>
          </div>
          <div className='hidden sm:flex sm:flex-row sm:items-center sm:space-x-5'>
            <a href="#about" className={defaultClasses}>
              <div>{t('navbar.about')}</div>
            </a>
            <a href="#skills" className={defaultClasses}>
              <div>{t('navbar.skills')}</div>
            </a>
            <a href="#projects" className={defaultClasses}>
              <div>{t('navbar.projects')}</div>
            </a>
            <a href="#contactme" className={defaultClasses}>
              <div>{t('navbar.contactme')}</div>
            </a>
          </div>
        </div>
        <div className="fixed right-6 top-14 space-y-2 z-10">
          <img className="h-7 hover:cursor-pointer" src={usaFlag} onClick={() => changeLanguage('en')}/>
          <img className="h-7 hover:cursor-pointer" src={brazilFlag} onClick={() => changeLanguage('pt')}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar