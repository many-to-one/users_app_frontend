import { React, useContext } from 'react'
import { SetUsername, Username } from './pages/Login'

const Header = () => {

const username = SetUsername()

    if ({username}){
        return (
            <div>
                <p>Hi, {username.username}</p>
            </div>
          )
    }else{
        return(
            <div>
                <p>Hi, Anonimous user</p>
            </div>
        )
    }
  
}

export default Header
