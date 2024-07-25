import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
          <h1>Sing Up</h1>
          <form onSubmit={handleSubmit} >
            <div>
              <label htmlFor="forename"> <strong>Forename:</strong></label>
              <br/>
              <input
                 type="text" 
                 id="forename"  
                 placeholder='Forename'
                 className='form-control rounded-0'
                 value={forename}
                 onChange={(e) => setForename(e.target.value)} required 
                 
              />
              

            </div>
            <div  className="mb-3">
                <label htmlFor="lastname"><strong>Lastname:</strong></label>
                <br/>
                <input 
                  type="text" 
                  id="lastname" 
                  placeholder='Last Name'
                  className='form-control rounded-0'
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)} required 
                  
                />
                
            </div>
            <div>
              <label htmlFor="username"><strong>Username:</strong></label>
              <br/>
              <input 
                type="text" 
                id="username" 
                placeholder='Username'
                className='form-control rounded-0'
                value={username}
                onChange={(e) => setUsername(e.target.value)} required 
                
              />
              
            </div>
            <div>
              <label htmlFor="email"><strong>Email:</strong></label>
              <br/>
              <input 
                type="email" 
                id="email" 
                placeholder='Email'
                className='form-control rounded-0'
                value={email} 
                onChange={(e) => setEmail(e.target.value)} required 
                
              />
              
            </div>
            <div>
              <label htmlFor="password"><strong>Password:</strong></label>
              
              <input 
                type="password" 
                id="password" 
                placeholder='Password'
                className='form-control rounded-0'
                value={password} 
                onChange={(e) => setPassword(e.target.value)} required 
              
              />
              
            </div>
              <br/>
              <button className="btn btn-default border w-100 bg-success rounded-0 text-decoration-none text-white" type="submit">Create Account</button>
                <br/>
                <Link to="/" className="btn btn-default border w-100 bg-dark rounded-0 text-decoration-none text-white">Log In</Link>
          </form>
      </div>
    </div>
  );
};

export default Signup;
