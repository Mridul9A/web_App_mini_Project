// src/components/Registration.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/auth.css';


const Registration = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', { email, password });
      alert('Registration successful! Please log in.');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
