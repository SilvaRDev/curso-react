import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo"><a href="/">Context</a></h1>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="contact">Contato</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar