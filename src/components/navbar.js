import { Link } from "react-router-dom"
import { Logo } from "../assets"
import { useSelector } from "react-redux"

const Navbar = () => {

  const {loggedIn, user} = useSelector(state => state.auth)

  return (
    <div className=" container d-flex flex-column flex-md-row align-items-center py-2 my-3 border-bottom">
     <Link to='/'>
      <img src={Logo} alt="logo" className="logo"/>
     </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">

        {loggedIn ? (
          <>
            <p className="text-decoration-none text-dark m-0 me-3 py-2 "> {user.username}</p>
            <button className=" btn btn-outline-danger">Logout</button>
          </>
        ) : (
            <>
              <Link to='/login' className="text-decoration-none text-dark me-3 py-2 ">LogIn</Link>
              <Link to="/register" className="text-decoration-none text-dark me-3 py-2 ">Register</Link>
            </> 
        )
        }
      </nav>
    </div>
  )
}

export default Navbar