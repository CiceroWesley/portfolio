

type Props = {
  name : string,
  src : string,
  alt: string
}

const Skill = ({name, src, alt}: Props) => {
  // const [opacity, setOpacity] = useState<umber>(1.0)

  return (
    <section>
      <div className="flex flex-col items-center justify-center box-content h-32 w-32 overflow-clip bg-slate-900 rounded-lg">
        <img className="h-20" src={src} alt={alt} title={name} />
      </div>
    </section>
  )
}

export default Skill