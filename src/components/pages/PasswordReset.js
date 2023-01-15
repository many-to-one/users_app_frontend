import React, { useEffect } from 'react'

const PasswordReset = ({uidb64, token}) => {

    useEffect(() => {
        SetPasswordReset()
    }, []);

    const SetPasswordReset = async() => {

        const response =  await fetch(`/users/password-reset/${uidb64}/${token}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json()
        console.log(data)

    } 

  return (
    <div>
      <p>Check your mail</p>
    </div>
  )
}

export default PasswordReset
