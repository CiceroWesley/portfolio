import { useState } from "react"
import { Fade } from "react-awesome-reveal";
// import plusIcon from '../../assets/plus.svg'
// import minusIcon from '../../assets/minus.svg'
import {experience} from '../../data/data'

const Experience = ({title, company, description, time}: experience) => {
  const [hidden, setHidden] = useState<boolean>(true);

  const changeHidden = () => {
    setHidden((prevHidden) => !prevHidden)
  }

  return (
    <div className='flex flex-col'>
      <div className="flex justify-between">
        <h3 className='text-lg text-text-color font-medium'>{title}</h3>
        {/* <img className="h-5 border rounded-lg hover:cursor-pointer text-accent-color" src={hidden ? plusIcon : minusIcon} onClick={() => changeHidden()}/> */}
        <span className={`flex flex-col items-center justify-center ${hidden ? "bg-accent-color" : "bg-negative-accent-color "} font-bold h-6 w-6 border-2 border-solid rounded-full hover:cursor-pointer text-text-color`} onClick={() => changeHidden()}>{hidden ? "+" : "-"}</span>
      </div>
      <div className={hidden ? 'hidden' : 'flex flex-col'}>
        <Fade cascade damping={0.2}>
          <h4 className='text-base'>{company}</h4>
          <span className='text-justify'>{description}</span>
          <span className='text-sm'>{time}</span>
        </Fade>
      </div>

    </div>
  )
}

export default Experience