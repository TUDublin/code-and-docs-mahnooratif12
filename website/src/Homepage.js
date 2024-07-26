import React, {useEffect, useState, useRef} from 'react';
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
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';        

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
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);

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
    
   
    const onRowExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Patient Expanded', detail: event.data.patients, life: 3000 });
    };

    const onRowCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Patient Collapsed', detail: event.data.patients, life: 3000 });
    };

    const expandAll = () => {
        let _expandedRows = {};

        patients.forEach((p) => (_expandedRows[`${p.id}`] = true));

        setExpandedRows(_expandedRows);
    };
    

    const collapseAll = () => {
        setExpandedRows(null);
    };
    const header_expand = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
        </div>
    );

    
   
      

    const rowExpansionTemplate = (data) => {
        if (!data.patients || data.patients.length === 0) {
            return (
                <div className="p-3">
                    <h5>Test Result</h5>
                    <p>No tests available</p>
                </div>
            );
        }
    
        return (
            <div className="p-3">
                <h5>Test Result {data.patients}</h5>
                <DataTable value={data.patients}>
                    <Column field="mrn" header="MRN" sortable style={{ width: '25%' }}></Column>
                    <Column field="Na" header="Na" sortable></Column>
                    <Column field="K" header="K" sortable></Column>
                    <Column field="Urea" header="Urea" sortable></Column>
                    <Column field="CRP" header="CRP" sortable></Column>
                    <Column field="TRIG" header="TRIG" sortable></Column>
                    <Column field="HDL" header="HDL" sortable></Column>
                    <Column field="FT4" header="FT4" sortable></Column>
                    <Column field="TSH" header="TSH" sortable></Column>
                    <Column field="PROT" header="PROT" sortable></Column>
                    <Column field="ALT" header="ALT" sortable></Column>
                    <Column field="GGT" header="GGT" sortable></Column>
                    <Column field="Ca" header="Ca" sortable></Column>
                    <Column field="TNHS" header="TNHS" sortable></Column>
                    <Column field="BNPL" header="BNPL" sortable></Column>
                </DataTable>
            </div>
        );
    };
    
    

    const header = renderHeader();
    

    return (
        <div>  
              
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
                <link rel="stylesheet" type="text/css" href="style.css" />
                <img src="/logo.ico" alt="img" href="/homepage" className="text-white" style={{ width: '500px', height: '80px', paddingLeft:'10px' }} />
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                        <ul className="navbar-nav me-auto justify-content-center">
                            <li className="nav-item ">
                                <a className="nav-link btn btn-secondary ms-2 text-white" href="/Homepage">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-secondary ms-2 text-white" href="/importdata">Import Data</a>
                            </li>
                            
                        </ul>
                        <button onClick={handleLogout} className="btn btn-danger ms-2">Logout</button>
                    </div>
                </div>
            </nav>
            <div className="">
                <h1>Patient Blood Test Record</h1>
            </div>
            <div className='card'> 
                <Toast ref={toast} />
                <DataTable value={patients} removableSort sortField="mrn" sortOrder={-1} sortMode="multiple" showGridlines stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                 filters={filters} filterDisplay="row" globalFilterFields={['lab_no', 'ocs_no', 'mrn', 'forename','surname','forename','dob','age','address1','address2','address3','phone_no']} header={header} emptyMessage="No patient found."
                 expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)} onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} rowExpansionTemplate={rowExpansionTemplate} dataKey="id">
                <Column expander style={{ width: '5rem' }} />
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
                    <Column field="clinician_code" header="Clinician Code" sortable></Column>
                    <Column field="clinician_class" header=" Clinicain Class" sortable></Column>
                    <Column field="source_code" header="Source Code" sortable></Column>
                    <Column field="source_class" header="Source Class" sortable></Column>
                    <Column field="dateofRequest" header="Date Of Request" sortable></Column>
                    <Column field="timeofRequest" header="Time of Request" sortable></Column>
                    <Column field="dateofReceived" header="Date of Received" sortable></Column>
                    <Column field="timeofReceived" header="Time of Received" sortable></Column>
                                     
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
