import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Validation from './LoginValidation';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [users, setUsers] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    function isValidUser(values) { 
        console.info("Values: "+JSON.stringify(values)); 
        for (var i=0; i<users.length; i++) { 
            console.info("user: "+JSON.stringify(users[i])); 
            console.info("1- ", users[i].email == values.email); 
            console.info("2- ", users[i].password == values.password); 
            if (users[i].email == values.email && users[i].password == values.password) { 
                return true; 
            }
        }
        return false; 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            if (!isValidUser(values)) { 
                console.error("Invalid user. "); 
                validationErrors.password = "Incorrect password or user name / email. ";
            } else { 
                // Navigate to Homepage if no validation errors
                navigate('/Homepage');
            }
        }

    };

    useEffect(()=> { 
        axios.get(`http://localhost:3061/user`, {    
            method: 'GET',
            mode: 'no-cors'
        }).then(res => {
            console.log('patients: '+ JSON.stringify(res.data)); 
            setUsers(res.data); 
        }); 
    }, []); 



    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            name="email"
                            onChange={handleInput} 
                            className="form-control rounded-0" 
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            onChange={handleInput} 
                            className="form-control rounded-0"
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
                    {/* <a href="/forgetpassword" className="btn btn-default border w-100 bg-primary rounded-0 text-decoration-none text-white">ForgetPassword</a> */}
                    <br/>
                    <Link to="/signup" className="btn btn-default border w-100 bg-dark rounded-0 text-decoration-none text-white">Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
