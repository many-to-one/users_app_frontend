import React, { useState } from 'react'
import { isAuthenticated, logout } from '../../services/AuthService'

const PasswordReseteComplete = () => {

    const [password, setPassword] = useState('')

    const submit = async(e) => {

      e.preventDefault();

      const {uidb64Servise} = isAuthenticated();
      // const {tokenServise} = isAuthenticated();

        const response =  await fetch("/users/password-reset-complete/", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                password,
                uidb64: uidb64Servise,
                // token: tokenServise,
            })
        });
        const data = await response.json()
        console.log('data:', data )

        if (response.status === 200){
          try {
            await logout();
          } catch (error) {
            console.error('error', error);
          }
        };

    }; 

  return (
    <div>
      <form className='auth-form' onSubmit={submit}>
      <input
          type='password'
          name='password'
          id='password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='auth-btn'>
          Save
        </button>
      </form>
        
    </div>
  )
}

export default PasswordReseteComplete
