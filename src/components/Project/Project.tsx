import gitHubIcon from '../../assets/githubIcon.svg';
import productionIcon from '../../assets/productionIcon.svg';

type Props = {
  title : string,
  urlRepository? : string,
  urlProduction? : string,
  src : string,
  alt : string
}

const Project = ({title, urlRepository, urlProduction, src, alt}: Props) => {
  return (
    <div>
      <div className={'flex flex-col justify-between bg-slate-950 rounded-lg h-52 overflow-auto aspect-video'}>
        <div className="mx-auto">
          {title}
        </div>
        <img className="h-36" src={src} alt={alt} />
        <div className="flex flex-row items-center justify-around my-1">
          <a href={urlRepository} target="_blank">
            <img className='h-7' src={gitHubIcon} alt="GitHub icon" title="Repository link"/>
          </a>
          {urlProduction && 
          <a href={urlProduction} target="_blank">
            <img className='h-7' src={productionIcon} alt="Production icon" title="Production link"/>
          </a>}
        </div>
      </div>
    </div>
  )
}

export default Project