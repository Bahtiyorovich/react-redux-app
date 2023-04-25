import { useEffect, useState } from "react"
import { Button, Input } from "../UI"
import { myLogo } from "../assets"
import { useDispatch, useSelector } from "react-redux"
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth"
import AuthService from './../service/auth';
import {ValidationError} from "./"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const {isLoading, loggedIn} = useSelector(state => state.auth)

  // Navigation
  const navigate = useNavigate()

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart())
    const user = {username, email, password}
    try {
      const response = await AuthService.userRegister(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')
    } catch(error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  useEffect(() => {
    if(loggedIn){ 
      navigate('/')
    }
  }, [loggedIn])

  return (
    <div className="mt-5 text-center">
      <main className="form-signin w-25 m-auto">
        <form>
            <img className="mb-4 mylogo" src={myLogo} alt="" />
            <h1 className="h3 mb-3 fw-normal text-center">Register</h1>
            
            <ValidationError/>

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
    </div>
  )
}

export default Register