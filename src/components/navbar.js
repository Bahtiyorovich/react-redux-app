import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../assets"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../helpers/persistance-storage"
import { logoutUser } from "../slice/auth"


const Navbar = () => {

  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  
  const logoutHandler = () => {
    dispatch(logoutUser())
    removeItem('token')
    navigate('/login')
  }

  return (
    <div className=" container d-flex flex-column flex-md-row align-items-center py-2 my-3 border-bottom">
     <Link to='/'>
      <img src={Logo} alt="logo" className="logo"/>
     </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">

        {loggedIn ? (
          <>
            <p className="text-decoration-none text-dark m-0 me-3 py-2 "> {user.username}</p>
            <Link to={'/create-article'} className="text-decoration-none text-dark m-0 me-3 py-2">create article</Link>
            <button className=" btn btn-outline-danger" onClick={logoutHandler}>Logout</button>
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