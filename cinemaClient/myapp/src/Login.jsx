import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/login', credentials);
      console.log(response.data);
      // אולי כאן יש לך לטפל בתגובה של ההתחברות, לדוג' - שמירת טוקן במצב של אימות מוצלח
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Movies - Subscriptions Web Site</h1>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>{' '}
        <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>{' '}
        <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      </div>
      <button onClick={login}>Login</button>
      <br />
      New user? <a href="/create-account">Create an account</a>.
    </div>
  );
};

export default App;
