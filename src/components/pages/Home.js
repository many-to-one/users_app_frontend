import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <div>
        <p>Don't have an account?</p>
        <Link to={'/register'}>Register</Link>
      </div>
    </div>
  )
}

export default Home
