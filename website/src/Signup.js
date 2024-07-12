import React, { useState } from 'react';

const Signup = () => {
  const [forename, setForename] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ forename, lastname, username, email, password }),
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <div>
      <h1>Sing Up</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="forename">Forename:</label>
        <input type="text" id="forename" value={forename} onChange={(e) => setForename(e.target.value)} required />
        <br />
        <label htmlFor="lastname">Lastname:</label>
        <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
        <br />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
