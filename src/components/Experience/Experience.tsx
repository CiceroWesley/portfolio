import { useState } from "react"
import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'

type Props = {
  title : string,
  company : string,
  description : string,
  time : string
}

const Experience = ({title, company, description, time}: Props) => {
  const [hidden, setHidden] = useState<boolean>(true);

  const changeHidden = () => {
    setHidden((prevHidden) => !prevHidden)
  }

  return (
    <div className='flex flex-col'>
      <div className="flex justify-between">
        <h3 className='text-lg'>{title}</h3>
        <img className="h-5 border rounded-lg hover:cursor-pointer" src={hidden ? plusIcon : minusIcon} onClick={() => changeHidden()}/>
      </div>
      <div className={hidden ? 'hidden' : 'transition ease-in-out'}>
        <h4 className='text-base'>{company}</h4>
        <span className='text-justify'>{description}</span>
        <span className='text-sm'>{time}</span>
      </div>

    </div>
  )
}

export default Experience