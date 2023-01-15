import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../services/AuthService';
import PasswordReset from './PasswordReset';

const RequestResetMail = () => {

    const {email} = isAuthenticated()
    const redirect_url = 'test'
    const [uidb64, setUidb64] = useState('')
    const [token, setToken] = useState('')
    const [response, setResponse] = useState('')

    useEffect(() => {
        SendRequest()
    }, [])

    const SendRequest = async() => {

       const response = await fetch("/users/request-reset-email/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email,
                redirect_url,
            })
          });
          const data = await response.json()
          setResponse(data)
          setUidb64(data.uidb64)
          setToken(data.token)
          console.log(data)

    }


    //   if (response.status === 200) {

        return (

                <PasswordReset 
                  uidb64={uidb64}
                  token={token}
                />

            
          )

    //   }else{
    //     alert('Something was wrong...')
    //   }

}

export default RequestResetMail
