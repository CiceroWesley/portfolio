type Props = {
  title : string,
  urlRepository? : string,
  urlProduction? : string,
  src : string,
  alt : string
}

const Project = ({title, urlRepository, urlProduction, src, alt}: Props) => {
  const classButtomProjects = "font-medium border-b-2 border-gray-300 transition ease-in-out delay-125 duration-300 hover:border-b-2 hover:border-secondary-color";
  return (
    <div className='flex flex-col border-2 border-text-color rounded-lg h-[300px] w-[340px]'>
      <div className='m-2 transition ease-in-out delay-150 hover:scale-125 duration-300'>
        <a href={urlProduction ? urlProduction : urlRepository} target="_blank"><img src={src} alt={alt} /></a>
      </div>
      <div className='m-2'>
        <div className='flex justify-center font-semibold p-2'>
          <h2 className="border-b-2 border-accent-color">{title}</h2>
        </div>
        <div className='mt-4 flex justify-around'>
          <a className={`${!urlRepository ? 'hidden' : classButtomProjects}`} href={urlRepository ? urlRepository : ''} target="_blank">Repository</a>
          <a className={`${!urlProduction ? 'hidden' : classButtomProjects}`} href={urlProduction ? urlProduction : ''} target="_blank">Deploy</a>
        </div>
        
      </div>

      {/* <div className={'flex flex-col bg-accent-color rounded-lg h-[210px] overflow-auto'}>
        <div className=''>
          <a href={urlProduction ? urlProduction : urlRepository} target="_blank" className='flex flex-col'>
            <div className="mx-auto text-secondary-color font-semibold">
            {title}
            </div>
            <img className="h-[154px]" src={src} alt={alt} />
          </a>
        </div>
        <div className="flex flex-row items-center justify-around my-1">
          <a href={urlRepository ? urlRepository : urlProduction} target="_blank">
            <img className='h-6' src={gitHubIcon} alt="GitHub icon" title="Repository link"/>
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default Project