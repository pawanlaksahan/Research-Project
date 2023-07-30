import React, { useState } from 'react';
import './Login.css';
import Typography from '@mui/material/Typography';
import {Box  } from '@mui/material';
import Navbar from './Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login:', username, password);
    // Perform login logic here
  };

  return (

    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
    <Navbar/>
    <div className="container">
      <div className="login-card">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

    </Box>
  );
};

export default Login;
