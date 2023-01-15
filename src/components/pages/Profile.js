import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

    const [user, setUser] = useState([])

    useEffect (() => {
        userProfile()
    }, [])

    const userProfile = async () => {
        const response = await fetch("/users/user/")
        const data = await response.json()
        setUser(data)
        console.log(data)
    } 

  return (

    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>If you whant to change password
        <Link to={'/request-reset-email'}>Click Here</Link>
      </p>
    </div>

  )
}

export default Profile

