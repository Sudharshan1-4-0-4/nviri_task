import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const LoginPage = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const userType = new URLSearchParams(location.search).get('type');
  const navigate = useNavigate();
  const handleLogin = () => {
    axios.post('http://localhost:4001/api/login', { email, password })
      .then(response => {
        navigate("/");
        alert(`Welcome, ${response.data.role}!`);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage('Invalid email or password');
      });
  };

  return (
    <div className="login-page">
      <h2>{userType === 'admin' ? 'Admin Login' : 'User Login'}</h2>
      <div className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
