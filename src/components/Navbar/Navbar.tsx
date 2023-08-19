
const Navbar = () => {
  return (
    <nav>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <span>Cicero Wesley</span>
        </div>
        <div className='flex flex-row items-center space-x-5'>
          <div>Home</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Contact me</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar