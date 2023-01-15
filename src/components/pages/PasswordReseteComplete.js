import React, { useState } from 'react'

const PasswordReseteComplete = () => {

    const [password, setPassword] = useState('')

    const SetNewPassword = async() => {

        const response =  await fetch(`password-reset-complete/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                password,
            })
        });
        const data = await response.json()
        console.log(data)

    } 

  return (
    <div>
      <form className='auth-form'>
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
