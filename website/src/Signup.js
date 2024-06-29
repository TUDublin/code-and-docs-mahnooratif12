import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";

function Signup() {
    const [values, setValues] = useState({
        forename: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).every(key => validationErrors[key] === "")) {
            // Handle successful form submission, e.g., send data to the server
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                    <div className="mb-3">
                        <label htmlFor="forename"><strong>Forename</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Forename"
                            name="forename"
                            value={values.forename}
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.forename && <span className="text-danger">{errors.forename}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname"><strong>Lastname</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Lastname"
                            name="lastname"
                            value={values.lastname}
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.lastname && <span className="text-danger">{errors.lastname}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={values.username}
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.username && <span className="text-danger">{errors.username}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={values.email}
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
                            value={values.password}
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Sign up</button>
                    <p className="checklist">Do you agree to our terms & policies?</p>
                    <Link to="/" className="btn btn-default border w-100 bg-white rounded-0 text-decoration-none">Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
