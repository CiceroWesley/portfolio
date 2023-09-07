import './App.css'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {


  return (
    <div className='bg-slate-800'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
