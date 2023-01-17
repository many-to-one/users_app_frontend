import React from 'react'
import { isAuthenticated } from '../../services/AuthService'

const Home = () => {

  const {token} = isAuthenticated();
  const usersToken = token

  if(usersToken == token) {
    return (
      <div>
        <p>Home</p>
      </div>
  
    )
  }else{
    window.location.replace('/')
  }
}

export default Home
