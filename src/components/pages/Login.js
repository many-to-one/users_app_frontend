import React, { useState, createContext } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import UserData from '../../context/UserData';

// export const Username = createContext()

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(() => localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) :null);
    const [tokens, setTokens] = useState(() => localStorage.getItem('tokens') ? jwt_decode(localStorage.getItem('tokens')) :null);
    // const [tokens, setTokens] = useState("")
    const [userid, setUserid] = useState("")
    const navigate = useNavigate();

     const Data = (username) => {

      <UserData username={username}/>

    }

    const submit = async(e) => {

      e.preventDefault();

      const response = await fetch("/users/login/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // credentials: 'include',
        body:JSON.stringify({
            email,
            password,
        })
      });

      const data = await response.json()
      console.log('data:', data)
      console.log('response:', data.username)
  
      if (response.status === 200) {
        setUsername(data.username)
        setTokens(data.tokens)
        console.log(tokens.user_id)        
        setUser(jwt_decode(data.tokens.access)) // npm install jwt-decode
        localStorage.setItem('tokens', JSON.stringify(data.tokens))
        navigate('/')
      }else{
        alert('Your login or password is incorrect')
      }
    };

    const contextData = {
        username: username,
    }

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
    </div>

  )
}


// export const SetUsername = ({contextData}) => {

//   return contextData

// }

export default Login