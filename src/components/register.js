import { useState } from "react"
import { Button, Input } from "../UI"
import { myLogo } from "../assets"

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <main className="d-flex align-items-center justify-content-center w-100 mt-5 container">
      <form className="w-25">
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

          <Button name={'Register'}/>
          <p className=" text-center mt-3 mb-3 text-body-secondary">© 2020–2023</p>
      </form>
    </main>
  )
}

export default Register