import { Link } from "react-router-dom"
import { Logo } from "../assets"

const Navbar = () => {
  return (
    <div className=" container d-flex flex-column flex-md-row align-items-center py-2 my-3 border-bottom">
     <Link to='/'>
      <img src={Logo} alt="logo" className="logo"/>
     </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to='/login' className="text-decoration-none link">LogIn</Link>
        <Link to="/register" className="text-decoration-none link">Register</Link>
      </nav>
    </div>
  )
}

export default Navbar