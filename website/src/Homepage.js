import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
        

function Homepage() {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]); 
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

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

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };
    

    const header = renderHeader();
    

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
                <DataTable value={patients} removableSort sortField="mrn" sortOrder={-1} sortMode="multiple" showGridlines stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                 filters={filters} filterDisplay="row" 
                 globalFilterFields={['lab_no', 'ocs_no', 'mrn', 'forename','surname','forename','dob','age','address1','address2','address3','phone_no']} header={header} emptyMessage="No customers found.">
                    <Column field="lab_no" header="Lab" sortable style={{ width: '25%' }}></Column>
                    <Column field="ocs_no" header="OCS" sortable style={{ width: '25%' }}></Column>
                    <Column field="mrn" header="MRN" sortable style={{ width: '25%' }}></Column>
                    <Column field="forename" header="Forename" sortable style={{ width: '25%' }}></Column>
                    <Column field="surname" header="Surname" sortable style={{ width: '25%' }}></Column>
                    <Column field="dob" header="dob" sortable style={{ width: '25%' }}></Column>
                    <Column field="gender" header="gender" sortable style={{ width: '25%' }}></Column>
                    <Column field="age" header="age" sortable style={{ width: '25%' }}></Column>
                    <Column field="address1" header="address1" sortable style={{ width: '25%' }}></Column>
                    <Column field="address2" header="address2" sortable style={{ width: '25%' }}></Column>
                    <Column field="address3" header="address3" sortable style={{ width: '25%' }}></Column>
                    <Column field="phone_no" header="phone_no" sortable style={{ width: '25%' }}></Column>
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
