
const Navbar = () => {
  return (
    <nav>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <span>Cicero Wesley</span>
        </div>
        <div className='flex flex-row items-center space-x-5'>
          <a href="#about">
            <div>About</div>
          </a>
          <a href="#skills">
            <div>Skills</div>
          </a>
          <a href="#projects">
            <div>Projects</div>
          </a>
          <a href="#contactme">
            <div>Contact-me</div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar