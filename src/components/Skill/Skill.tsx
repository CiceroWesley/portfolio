type Props = {
  name : string,
  src : string,
  alt: string
}

const Skill = ({name, src, alt}: Props) => {
  return (
    <section>
      <div className="box-content h-32 w-32 border-double border-4 overflow-clip">
        <div>
          <div className="mb-1">
            <h4 className="">
              {name}
            </h4>
          </div>
          <div>
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill