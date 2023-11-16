import { Dispatch, SetStateAction, useState } from "react"
import { useTranslation, } from "react-i18next";

type Props = {
  language: {[key: string] : number},
  setSelectedLanguage: Dispatch<SetStateAction<number>>
}

const Navbar = ({language, setSelectedLanguage} : Props) => {
  const {t, i18n} = useTranslation();
  const [angle, setAngle] = useState<number>(0);
  const [angleValues] = useState<number[]>([0, 1, 2, 3, 6, 12, 45, 90, 180]);

  const rotate = () : void => {
    const randomNumber : number = Math.floor(Math.random() * angleValues.length);
    setAngle(angleValues[randomNumber]);
  };

  return (
    <nav>
      <div className='flex flex-row items-center justify-between mb-2 mx-3 text-white font-medium'>
        <button onClick={
          () => {
            i18n.changeLanguage('en');
            setSelectedLanguage(language['en']);
          }
      }>Ingles</button>
        <button onClick={
          () => {
            i18n.changeLanguage('pt');
            setSelectedLanguage(language['pt']);
          }
      }>Português</button>
        <div style={{rotate: `${angle}deg`, transitionTimingFunction: 'ease-in-out', transitionDelay: '0.15s', transitionDuration: '0.3s'}} className={`text-sky-300`}>
          <a href="#"><span onMouseEnter={() => rotate()}>Cicero Wesley</span></a>
        </div>
        <div className='hidden sm:flex sm:flex-row sm:items-center sm:space-x-5'>
          <a href="#about">
            <div>{t('navbar.about')}</div>
          </a>
          <a href="#skills">
            <div>{t('navbar.skills')}</div>
          </a>
          <a href="#projects">
            <div>{t('navbar.projects')}</div>
          </a>
          <a href="#contactme">
            <div>{t('navbar.contactme')}</div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar