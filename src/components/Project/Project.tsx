
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
        <img className="h-36" src={src} alt={alt} />
        <div className="flex flex-row items-center justify-around my-1">
          <a href={urlRepository}>
            <button className='bg-cyan-400 rounded-full px-2'>Repository</button>
          </a>
          {urlProduction && 
          <a href={urlProduction}>
            <button className='bg-cyan-400 rounded-full px-2'>Production</button>
          </a>}
        </div>
      </div>
    </div>
  )
}

export default Project