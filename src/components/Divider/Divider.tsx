type Props = {
 borderSize : string
}


const Divider = ({borderSize} : Props) => {
  return (
    <div className={`border-${borderSize} border-secondary-color rounded-md`}></div>
  )
}

export default Divider