import { React } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../services/AuthService';
import '../styles_css/Header.css';


  

const Header = () => {

    const {username} = isAuthenticated()
    const {access} = isAuthenticated()

	console.log('username:', username);
    console.log('access:', access);

    return (
        <div className='header-cont'>
          <Link to={'/'}>
            Home
          </Link>    
          {username ? (
            <Link to={'/logout'}>
                Logout
              </Link>
            ): (
              <Link to={'/login'}>
                Login
              </Link>
            )}
    
          {/* {username &&  <p>Hello {username}</p>} */}
          <p>Hello {username}</p>
        </div>
      )

  
}

export default Header
