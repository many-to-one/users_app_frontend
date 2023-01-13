import React from 'react'
import { logout } from '../../services/AuthService';

const Logout = async() => {



    try {
        await logout();
      } catch (error) {
        console.error('error', error);
      }

  return (
    <div>
      
    </div>
  )
}

export default Logout
