import React, { useState } from 'react'
import { isAuthenticated } from '../../services/AuthService'

const PasswordReseteComplete = () => {

    const [password, setPassword] = useState('')

    const submit = async() => {
      const {uidb64Service} = isAuthenticated();
      const {tokenService} = isAuthenticated();

        // e.preventDefault()

        const response =  await fetch("/users/password-reset-complete/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                password,
                uidb64Service,
                tokenService,
            })
        });
        const data = await response.json()
        console.log(uidb64Service)

    } 

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
