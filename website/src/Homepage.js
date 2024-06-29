import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user authentication data (e.g., tokens)
        localStorage.removeItem('userToken'); // If you are using local storage
        // Clear any other user data as needed

        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div>    
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <link rel="stylesheet" type="text/css" href="style.css" />
                <div className="container-fluid">
                    <a className="navbar-brand" href="/homepage">
                        <img src="./TUH logo.jpg" alt="TUH Logo" className="img" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                        <ul className="navbar-nav me-auto justify-content-center">
                            <li className="nav-item justify-content-center">
                                <a className="nav-link justify-content-center" href="/visualization">Visualization</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link justify-content-center" href="/importdata">Import Data</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link justify-content-center" href="/help">Help</a>
                            </li>
                        </ul>
                        <input type="text" id="searchInput" placeholder="Search..." className="form-control" />
                        <button className="btn btn-primary ms-2">
                            <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.21 1.344a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                            </svg>
                        </button>
                        <button onClick={handleLogout} className="btn btn-danger ms-2">Logout</button>
                    </div>
                </div>
            </nav>
            <div className="header">
                <h1>Tallaght University Hospital (TUH) Blood Results</h1>
                <p></p>
            </div>
            <footer className="justify-content-center">
                <div className="text-white text-center bg-dark fixed-bottom justify-content-center">
                    TUH Blood Results
                </div>
            </footer>
        </div>  
    );
 }

export default Homepage;
