import React, { useState } from 'react';
import { json, Link } from 'react-router-dom';

const Signup = () => {
  const [forename, setForename] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function validateUserData(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
  
    if (values.forename === "") {
        error.forename = "Forename should not be empty";
    } else {
        error.forename = "";
    }
  
    if (values.lastname === "") {
        error.lastname = "Lastname should not be empty";
    } else {
        error.lastname = "";
    }
  
    if (values.username === "") {
        error.username = "Username should not be empty";
    } else {
        error.username = "";
    }
  
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match the required pattern";
    } else {
        error.email = "";
    }
  
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password should  contain atleast 8 character, atleast one uppercase, atleast one symbol ..... ";
        
    } else {
        error.password = "";
    }
  
    return error;
  }
  


  const handleSubmit = async (event) => {
    console.log("Create user request received. "); 
    event.preventDefault();

    var user = { 
      "forename": forename, 
      "lastname": lastname, 
      "username": username, 
      "email": email, 
      "password": password
    }; 

    var error = validateUserData(user); 
    if (error.password) { 
      alert(error.password); 
      return; 
    }

    fetch('http://localhost:3061/user', {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
          'Content-Type': 'application/json',                
      },
      body: JSON.stringify(user)
    }).then((data) => {
      if (data.error) {
          console.error(data.error);
      } else {
          console.log('Data uploaded successfully:', data);          
      }
      window.location = '/';
    })
    .catch((error) => {
        console.error('Error uploading data:', error);        
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-info vh-100">
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
