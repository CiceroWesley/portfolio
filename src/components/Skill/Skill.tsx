type Props = {
  name : string,
  src : string,
  alt: string
}

const Skill = ({name, src, alt}: Props) => {
  return (
    <section>
      <div className="box-content h-32 w-32 border-solid border-4 overflow-clip">
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <h4>
              {name}
            </h4>
          </div>
          <div className="">
            <img className="h-20" src={src} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill