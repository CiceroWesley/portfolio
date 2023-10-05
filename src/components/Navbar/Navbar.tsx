import { useState } from "react"

const Navbar = () => {
  const [angle, setAngle] = useState<number>(0);
  const [angleValues] = useState<number[]>([0, 1, 2, 3, 6, 12, 45, 90, 180]);

  const rotate = () : void => {
    const randomNumber : number = Math.floor(Math.random() * angleValues.length);
    setAngle(angleValues[randomNumber]);
  };

  return (
    <nav>
      <div className='flex flex-row items-center justify-between mb-2 mx-3 text-white font-medium'>
        <div style={{rotate: `${angle}deg`, transitionTimingFunction: 'ease-in-out', transitionDelay: '0.15s', transitionDuration: '0.3s'}} className={`text-sky-300`}>
          <a href="#"><span onMouseEnter={() => rotate()}>Cicero Wesley</span></a>
        </div>
        <div className='hidden sm:flex sm:flex-row sm:items-center sm:space-x-5'>
          <a href="#about">
            <div>About</div>
          </a>
          <a href="#skills">
            <div>Skills</div>
          </a>
          <a href="#projects">
            <div>Projects</div>
          </a>
          <a href="#contactme">
            <div>Contact-me</div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar