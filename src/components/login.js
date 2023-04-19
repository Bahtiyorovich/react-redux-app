import { Button, Input } from "../UI"
import { myLogo } from "../assets"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signUserStart, signUserSuccess,signUserFailure } from "../slice/auth"
import AuthService from "../service/auth"
import {ValidationError} from "./"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  const {isLoading, loggedIn} = useSelector(state => state.auth)

  // Navigation main section
  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart())
    const user = {email, password}
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')
    } catch(error){
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  // agar user ro'yxatdan o'tgan bo'lsa unga login va register pages ko'rsatilmaydi
  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
            <img className="mb-4 mylogo" src={myLogo} alt="" />
            <h1 className="h3 mb-3 fw-normal text-center">Log in</h1>

            <ValidationError/>

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

            <Button name={isLoading ? 'Loading...' : 'Login'} method={loginHandler} disabled={isLoading}/>
            <p className=" text-center mt-3 mb-3 text-body-secondary">© 2020–2023</p>
        </form>
      </main>
    </div>
  )
}

export default Login