import { React } from 'react'
import UserData from '../context/UserData';

  

const Header = () => {
    const userdata = UserData()
    const username = userdata

	console.log('username:', username);

    if ({username}){
        return (
            <div>
                <p>Hi, {username}</p>
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
