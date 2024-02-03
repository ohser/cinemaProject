import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login1  ()  {
  const [credentials, setCredentials] = useState({ userName: '', password: '' });

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/login', credentials);
      console.log(response.data);
      if (response.data.role === "admin") {
        sessionStorage.setItem("role", response.data.role)
        sessionStorage.setItem("token", response.data.token)
        navigate("/main-page-admin")
      } else {
        sessionStorage.setItem("role", response.data.role)
        sessionStorage.setItem("token", response.data.token)
        navigate("/main-Page")
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const navigate = useNavigate()
  const next = () => {
    const role = sessionStorage.getItem("role")
    if (role === "admin") {
      navigate("/create-users")
    } else {
      alert("You are not an admin")
    }

  }

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Movies - Subscriptions Web Site</h1>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>{' '}
        <input type="text" name="userName" value={credentials.userName} onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>{' '}
       <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      </div>
      <br/>
      <button onClick={login}>Login</button>
      <br />
      <br />
      <br />

      New user? <a href="/create-account">Create an account</a>.
    </div>
  );
};

export default Login1;