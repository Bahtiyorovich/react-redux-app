import { useState } from 'react';
import { logo } from './../constants/index';
import { Input } from '../UI';

const Register = () => {

  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='text-center mt-5'>
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={logo} alt="" width="120" height="57" />
            <h1 className="h3 mb-3 fw-normal">Register</h1>


          <Input 
            label={'Username'} 
            type={'text'}
            id={'username'} 
            state={userName}
            setState={setUsername}
            />
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
           

            <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">REGISTER</button>
            <p className="mt-5 mb-3 text-muted">© 2021–2024</p>
        </form>
      </main>
    </div>
  )
}

export default Register