import './App.css'
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { useTranslation } from "react-i18next";

function App() {
  const {i18n} = useTranslation();
  const language : {[key: string] : number}= {"en": 0, "pt": 1};
  const [selectedLanguage, setSelectedLanguage] = useState<number>(language[i18n.language])


  return (
    <div className='font-sans bg-background-color'>
      <Navbar language={language} setSelectedLanguage={setSelectedLanguage}/>
      <Main selectedLanguage={selectedLanguage}/>
      <Footer/>
    </div>
  )
}

export default App
