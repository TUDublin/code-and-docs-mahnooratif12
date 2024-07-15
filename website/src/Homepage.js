import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        


function getPData() { 
          
}

function Homepage() {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]); 

    const handleLogout = () => {
        // Clear user authentication data (e.g., tokens)
        localStorage.removeItem('userToken'); // If you are using local storage
        // Clear any other user data as needed

        // Redirect to the login page
        navigate('/');
    };

    useEffect(()=> { 
        axios.get(`http://localhost:3061/patient`, {    
            method: 'GET',
            mode: 'no-cors'
        }).then(res => {
            console.log('patients: '+ JSON.stringify(res.data)); 
            setPatients(res.data); 
        }); 
    }, []); 
    

    return (
        <div>    
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <link rel="stylesheet" type="text/css" href="style.css" />
                <div className="container-fluid">
                <img src="/TUH%20logo.jpg" alt="TUH pic" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                    <a className="navbar-brand" href="/homepage">Tallaght University Hospital</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                        <ul className="navbar-nav me-auto justify-content-center">
                            <li className="nav-item justify-content-center">
                                <a className="nav-link justify-content-center" href="/Homepage">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link justify-content-center" href="/importdata">Import Data</a>
                            </li>
                            
                        </ul>
                        <button onClick={handleLogout} className="btn btn-danger ms-2">Logout</button>
                    </div>
                </div>
            </nav>
            <div className="header">
                <h1>Tallaght University Hospital (TUH) Blood Test Database</h1>
                <p>
                    
                </p>
            </div>
            <div className='card'> 
                <DataTable value={patients} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="lab_no" header="Lab #"></Column>
                    <Column field="ocs_no" header="OCS #"></Column>
                    <Column field="mrn" header="MRN"></Column>
                    <Column field="forename" header="Forename"></Column>
                    <Column field="surname" header="Surname"></Column>
                    <Column field="dob" header="dob"></Column>
                    <Column field="gender" header="gender"></Column>
                    <Column field="age" header="age"></Column>
                    <Column field="address1" header="address1"></Column>
                    <Column field="address2" header="address2"></Column>
                    <Column field="address3" header="address3"></Column>
                    <Column field="phone_no" header="phone_no"></Column>
                </DataTable>
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
