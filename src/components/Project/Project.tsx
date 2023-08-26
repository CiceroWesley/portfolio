
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
      <div className='rounded h-52 overflow-auto aspect-video'>
        <img src={src} alt={alt} />
        <div>
          {title}
        </div>
        <div>
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