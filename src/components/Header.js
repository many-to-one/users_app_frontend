import { React } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../services/AuthService';
import '../styles_css/Header.css';


  

const Header = () => {

    const {username} = isAuthenticated()

	console.log('username:', username);

    return (
        <div className='header-cont'>

          <Link to={'/home'}>
            Home
          </Link>    
          {username ? (
            <div>

              <div>
                <Link to={'/logout'}>
                  Logout
                </Link>
              </div>

              <div>
                <Link to={'/profile'}>
                  Profile
                </Link>
              </div>
              
            </div>
            ): (
              <Link to={'/'}>
                Login
              </Link>
            )}
    
          {username &&  <p>Hello {username}</p>}

        </div>
      )

  
}

export default Header
