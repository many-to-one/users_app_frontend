import React, { useEffect, useState } from 'react'
import { isAuthenticated, passwordResetService } from '../../services/AuthService';

const RequestResetMail = () => {

    const {email} = isAuthenticated()
    const [response, setResponse] = useState('')
    const redirect_url = 'test'
    const [uidb64, setUidb64] = useState('')
    const [token, setToken] = useState('')
    const [success, setSuccess] = useState(false)

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

          if (response.status === 200){
            setSuccess(true)
          }else{
            alert('Something is wrong...')
          }

    }


     const passwordReset = async() => {

        try {
             passwordResetService(uidb64, token);
          } catch (error) {
            console.error('error', error);
          }
      
    }

    if(success){
        return (
            <div>
                <button onClick={passwordReset}>Reset Password</button>
                <p>After you click the button, please check your email</p>
            </div>
        )
    }else{
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

}

export default RequestResetMail
