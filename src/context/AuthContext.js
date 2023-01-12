import React, { useState, createContext } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState(() => localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) :null);
    const [tokens, setTokens] = useState(() => localStorage.getItem('tokens') ? jwt_decode(localStorage.getItem('tokens')) :null);
    const navigate = useNavigate();
  
    const LoginUser = async(e) => {
  
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
  
      if (response.status === 200) {
        setTokens(data)
        setUser(jwt_decode(data.access)) // npm install jwt-decode
        localStorage.setItem('tokens', JSON.stringify(data))
        navigate('/')
        // window.location.replace("/"); 
      }else{
        alert('Your login or password is incorrect')
      }
  
    } 

    const contextData = {
        user: user,
        LoginUser:LoginUser
    }
  
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
  }
  
  