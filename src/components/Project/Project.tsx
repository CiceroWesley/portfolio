import gitHubIcon from '../../assets/githubIcon.svg';

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
      <div className={'flex flex-col justify-between bg-accent-color rounded-lg h-52 overflow-auto aspect-video'}>
        <a href={urlProduction ? urlProduction : urlRepository} target="_blank" className='flex flex-col'>
          <div className="mx-auto text-secondary-color font-semibold">
          {title}
          </div>
          <img className="h-36" src={src} alt={alt} />
        </a>
        <div className="flex flex-row items-center justify-around my-1">
          <a href={urlRepository ? urlRepository : urlProduction} target="_blank">
            <img className='h-7' src={gitHubIcon} alt="GitHub icon" title="Repository link"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project