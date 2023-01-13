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
        localStorage.setItem('access', data.tokens.access)
        localStorage.setItem('refresh', data.tokens.refresh)
        window.location.replace('/')
      }else{
        alert('Your login or password is incorrect')
      }

      return response.data;
    };

	

export const isAuthenticated = () => {
	const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    let data = {
        email: email,
        username: username,
        access: access,
        refresh: refresh,
    };
	if (!data) {
		return {}
	}
	return data;
};

export const logout = async() => {

    const response = await fetch("/users/logout/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
      });
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      localStorage.removeItem('email')
      localStorage.removeItem('username')
      window.location.replace("/")

}