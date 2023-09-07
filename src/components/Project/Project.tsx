
type Props = {
  title : string,
  urlRepository : string,
  urlProduction? : string,
  src : string,
  alt : string
}

const Project = ({title, urlRepository, urlProduction, src, alt}: Props) => {
  return (
    <div>
      <div className={'flex flex-col justify-between border-4 h-52 overflow-auto aspect-video'}>
        <div className="mx-auto">
          {title}
        </div>
        <img src={src} alt={alt} />
        <div className="flex flex-row items-center justify-around">
          <a href={urlRepository}>
            <button className='rounded-full'>Repository</button>
          </a>
          {urlProduction && 
          <a href={urlProduction}>
            <button className='rounded-full'>Production</button>
          </a>}
        </div>
      </div>
    </div>
  )
}

export default Project