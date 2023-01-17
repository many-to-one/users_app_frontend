export const register = async (username ,email, password) => {

    const response = await fetch("/users/register/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            username,
            email,
            password,
        })
      });

      const data = await response.json()
      console.log(data)
      if(response.status === 201) {
        window.location.replace('/')
      }else{
        alert('The data you provided is incorrect, please try again')
      }
};

export const login = async (email, password) => {

	const response = await fetch("/users/login/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email,
            password,
        })
      });

      const data = await response.json()
  
      if (response.status === 200) {
        localStorage.setItem('email', data.email)
        localStorage.setItem('username', data.username)
        localStorage.setItem('token', data.token)
        window.location.replace('/home')
      }else{
        alert('Your login or password is incorrect')
      }

      return response.data;
};


export const passwordResetService = async(uidb64, token) => {

  const response =  await fetch(`/users/password-reset/${uidb64}/${token}/`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
  });
  const data = await response.json()
  console.log(data)

  if (response.status === 200){

    try {
      await logout();
    } catch (error) {
      console.error('error', error);
    }
  };
  localStorage.setItem('uidb64Servise', data.uidb64)
  localStorage.setItem('tokenServise', data.token)

}


export const isAuthenticated = () => {
	  const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const uidb64Servise = localStorage.getItem('uidb64Service');
    const tokenServise = localStorage.getItem('tokenServise');

    let data = {
        email: email,
        username: username,
        token: token,
        uidb64Servise: uidb64Servise,
        tokenServise: tokenServise,
    };
	if (!data) {
		return {}
	}
	return data;
};

export const logout = async() => {

    const email = localStorage.getItem('email'); 

    const response = await fetch('/users/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
      });  
      
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      localStorage.removeItem('tokens')
      localStorage.removeItem('email')
      localStorage.removeItem('username')
      window.location.replace("/")

};