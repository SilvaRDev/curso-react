import './Navbar.css'

// Components
import { NavLink, Link } from 'react-router-dom'
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>
      <form>
        <BsSearch />
        <input type="search" />
      </form>
      <ul id="nav-links">
        <NavLink to="/">
          <BsHouseDoorFill />
        </NavLink>
        <NavLink to="/login">Entrar</NavLink>
        <NavLink to="/register">Cadastrar</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
