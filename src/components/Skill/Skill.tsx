

type Props = {
  name : string,
  src : string,
  alt: string,
  link: string
}

const Skill = ({name, src, alt, link}: Props) => {
  // const [opacity, setOpacity] = useState<umber>(1.0)

  return (
    <section>
      <a href={link} target="_blank">
        <div className="flex flex-col items-center justify-center box-content h-32 w-32 overflow-clip border-2 border-text-color rounded-lg ">
          <img className="h-20 drop-shadow-xl" src={src} alt={alt} title={name} />
        </div>
      </a>
    </section>
  )
}

export default Skill