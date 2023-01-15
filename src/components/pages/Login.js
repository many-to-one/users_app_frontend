import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../../services/AuthService';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async(e) => {

      e.preventDefault();

      try {
        await login(email, password);
      } catch (error) {
        console.error('error', error);
      }

    };

  return (
    <div className='auth-cont' onSubmit={submit}>
      <form className='auth-form'>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='auth-btn'>
          Login
        </button>
      </form>

        <div>
          <p>Don't have an account?
          <Link to={'/register'}>Register</Link>
          </p>
        </div>

    </div>

  )
}

export default Login