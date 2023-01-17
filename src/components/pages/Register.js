import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { register } from '../../services/AuthService';

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async(e) => {

      e.preventDefault();

      try {
        await register(username, email, password);
      } catch (error) {
        console.error('error', error);
      }

    };

  return (
    <div className='auth-cont' onSubmit={submit}>
      <form className='auth-form'>
        <input
          placeholder='username'
          type='username'
          name='username'
          id='username'
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='email'
          type='email'
          name='email'
          id='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          name='password'
          id='password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='auth-btn'>
          Register
        </button>
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to={'/'}>Login</Link>
      </div>
    </div>

  )
}

export default Register
