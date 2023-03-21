import { useState } from 'react';
import { logo } from './../constants/index';
import { Input } from '../UI';
import { useSelector, useDispatch } from 'react-redux';
import { signUserStart, signUserSuccess, signUserFailure } from '../slice/auth';
import AuthService from '../service/auth'
import {ValidationError} from './';

const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart())
    const user = {
      email,
      password,
    }
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
    } catch(error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  return (
    <div className='text-center mt-5'>
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={logo} alt="" width="120" height="57" />
            <h1 className="h3 mb-3 fw-normal">Login</h1>
          <ValidationError/>
          <Input 
            label={'Email address'} 
            type={'email'}
            id={'emailName'} 
            state={email}
            setState={setEmail}
            />
          <Input 
            label={'Password'} 
            type={'password'}
            id={'passwordValue'} 
            state={password}
            setState={setPassword}
            />
           

            <button 
              className="w-100 btn btn-lg btn-primary mt-2" 
              type="submit"
              disabled={isLoading}
              onClick={loginHandler}
            >
              {isLoading ? 'loading...' : 'Login'}
            </button>
            <p className="mt-5 mb-3 text-muted">© 2021–2024</p>
        </form>
      </main>
    </div>
  )

}

export default Login