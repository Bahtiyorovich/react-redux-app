import { useState } from "react"
import { Button, Input } from "../UI"
import { myLogo } from "../assets"
import { useDispatch, useSelector } from "react-redux"
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth"
import AuthService from './../service/auth';

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart())
    const user = {username, email, password}
    try {
      const response = await AuthService.userRegister(user)
      dispatch(signUserSuccess(response.user))
    } catch(error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  return (
    <main className="d-flex align-items-center justify-content-center w-100 mt-5 container">
      <form className="sm:w-50">
          <img className="ms-5 mb-4 mylogo" src={myLogo} alt="" />
          <h1 className="h3 mb-3 fw-normal text-center">Register</h1>

          <Input 
            type={'text'} 
            idText={'floatingInput'} 
            placeholder={'enter your username'} 
            labelText={'Username'}
            state={username}
            setState={setUsername}
          />
          <Input 
            type={'email'} 
            idText={'floatingInput'} 
            placeholder={'name@example.com'} 
            labelText={'Email address'}
            state={email}
            setState={setEmail}
          />
          <Input 
            type={'password'} 
            idText={'floatingPassword'} 
            placeholder={'Password'} 
            labelText={'Password'}
            state={password}
            setState={setPassword}
          />

          <Button name={isLoading ? 'Loading...' : 'Register'} disabled={isLoading} method={registerHandler}/>
          <p className=" text-center mt-3 mb-3 text-body-secondary">© 2020–2023</p>
      </form>
    </main>
  )
}

export default Register