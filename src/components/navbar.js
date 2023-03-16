import { Link } from 'react-router-dom';
import { logo } from '../constants'

const Navbar = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-2 mb-4 mt-2 border-bottom container pt-2">
      <Link to='/'>
        <img 
          src={logo} 
          alt="Logo"
          width={120}
        />
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to='/login' className='me-3 py-2 text-dark text-decoration-none'>Login</Link>
        <Link to='/register' className='me-3 py-2 text-dark text-decoration-none'>Register</Link>
      </nav>
    </div>
  );
};

export default Navbar;