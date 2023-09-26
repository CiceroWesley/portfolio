type Props = {
  title : string,
  company : string,
  description : string,
  time : string
}

const Experience = ({title, company, description, time}: Props) => {
  return (
    <div className='flex flex-col'>
      <h3 className='text-lg'>{title}</h3>
      <h4 className='text-base'>{company}</h4>
      <span className='text-justify'>{description}</span>
      <span className='text-sm'>{time}</span>
    </div>
  )
}

export default Experience