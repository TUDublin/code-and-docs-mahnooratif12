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
    const test = { 
        "Na" : { 
            lowerLimit: 135, 
            higherLimit: 145, 
            unit: "mmol"
        }, 
        "K" :  {
            lowerLimit:3.4,
            higherLimit: 5.3,
            unit : "mmol/L"
        },
        "Urea":{
            lowerLimit: 1.0,
            higherLimit:7.0,
            unit: "mmol/L"
        }, 
        "Crea" : {
            lowerLimit:14,
            higherLimit: 184, 
            unit : "umol/L"
        },
        "CRP" : {
            lowerLimit : 0,
            higherLimit: 5, 
            unit :"mg/L"
        }, 
        "Chol" : {
            lowerLimit: 5, 
            unit : "mmol/L" 
        }, 
        "TRIG" : {
            higherLimit : 1.7,
            unit : "mmol/L"
        },
        "LDL" :{
            lowerLimit: 3.0, 
            unit : "mmol/L"
        }, 
        "HDL" : {
            higherLimit: 1.2,
            unit : "mmol/L"

        }, 
        "nonH" : {
            higherLimit: 3.8, 
            unit : "mmol/L"

        }, 
        "FT4" : {
            lowerLimit: 11, 
            higherLimit: 32, 
            unit: "pmol/L"
        }, 
        "TSH" : {
            lowerLimit : 0.3,
            higherLimit : 15.2, 
            unit : "mU/L", 
        }, 
        "PROT" : {
            lowerLimit : 45, 
            higherLimit: 85, 
            unit : "g/L"
        }, 
        "ALB" : {
            lowerLimit : 50, 
            higherLimit : 50, 
            unit : "g/L"
        },
        "TBIL" : {
            higherLimit: 200, 
            unit : "umol/L"
        },
        "ALKP": {
            higherLimit : 449, 
            unit : "IU/L"
        }, 
        "ALT" : {
            higherLimit : 45, 
            unit: "IU/L"
        }, 
        "GGT" : {
            higherLimit: 120, 
            unit : "IU/L"
        }, 
        "PROT" : { 
            lowerLimit: 45, 
            higherLimit: 85, 
            unit: "g/L"
        }, 
        "ALB" : { 
            lowerLimit : 30,
            higherLimit: 50,
            unit : "g/L"
        }, 
        "Ca" : { 
            lowerLimit : 1.48, 
            higherLimit : 2.70, 
            unit : "mmol/L"
        },
        "CCA" : { 
            lowerLimit : 1.48, 
            higherLimit : 2.70, 
            unit : "mmol/L"
        },
        "Phos" : {
            lowerLimit : 0.8, 
            higherLimit : 2.9, 
            unit : "mmol/L"
        }, 
        "MG" : {
            lowerLimit: 0.1, 
            higherLimit : 1.00, 
            unit : "mmol/L"

        },
        "VID2 ": { 
            lowerLimit: 30, 
            higherLimit : 50, 
            unit: "nmol/L"
        }, 
        "TNHS" : {
           higherLimit: 14, 
           unit: "ng/L"
        },
        "BNPL" : {
            higherLimit: 300, 
            unit: "pg/ml"
        }


    }; 
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]); 
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
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
            <div className="flex justify-content-right">
                <IconField iconPosition="right">
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

    
   
      

    const rowExpansionTemplate = (patient) => {
        console.log("Data: "+JSON.stringify(patient)); 

        // if (patient.Na > test.Na.higherLimit) { 
        //     console.log("Chaning color of element patient_na_result to red. ")
        //     document.getElementById('patient_na_result').style.color = 'red'; 
        // }
                
        if (!patient.mrn) {
            return (
                <div className="p-3">
                    <h5>Test Result</h5>
                    <p>No tests available</p>
                </div>
            );
        }

        function getNaElement(patient) { 
            console.log("patient.Na: "+patient.Na); 
            console.log("test.Na.higherLimit: "+test.Na.higherLimit); 
            console.log("patient.Na > test.Na.higherLimit: "+patient.Na > test.Na.higherLimit); 
            if (patient.Na > test.Na.higherLimit) { 
                return '<p  style="color:red">{patient.Na}</p>'; 
            }
            // console.log("Patient na result" +{patient.Na}) 
            return patient.Na; 
            
        }
        
        console.log("Data is available"); 
        return (
            <div className='card-body card'>
                 <h5 className='text-bold'>Patient Test Results</h5>
                 <p><b>MRN:</b>{patient.mrn} &emsp;<b>Name:</b>{patient.forename}{patient.surname} &emsp; <b>Age: </b> {patient.age} &emsp; <b>DOB: </b>{patient.dob} &emsp; <b>Gender: </b>{patient.gender} &emsp; <b>Phone No:</b>{patient.phone_no} &emsp; <b>Address:</b>{patient.address1}{patient.address2}{patient.address3}</p>
                 <p><b>Clinicain Code: </b>{patient.clinician_code} &emsp; <b>Clinician Class: </b>{patient.clinician_class} &emsp; <b>Source Code: </b>{patient.source_code} &emsp; <b>Source Class: </b> {patient.source_class}</p> 
                 <p><b>Date of Request: </b>{patient.dateofRequest} &emsp; <b>Date of Received: </b>{patient.dateofReceived} &emsp; <b>Time of Received: </b>{patient.timeofReceived} &emsp; <b>Time of Request: </b>{patient.timeofRequest}</p>
                 {/* <p><b>MRN:</b>{patient.mrn}</p>
                <p><b>Na:</b>{patient.Na}</p>
                <p><b>K:</b>{patient.K}</p>
                <p><b>Urea:</b>{patient.Urea}</p>
                <p><b>CRP:</b>{patient.CRP}</p>
                <p><b>TRIG:</b>{patient.TRIG}</p>
                <p><b>HDL:</b>{patient.HDL}</p>
                <p><b>FT4:</b>{patient.FT4}</p>
                <p><b>TSH:</b>{patient.TSH}</p>
                <p><b>PROT:</b>{patient.PROT}</p>
                <p><b>ALT:</b>{patient.ALT}</p>
                <p><b>GGT:</b>{patient.GGT}</p>
                <p><b>Ca:</b>{patient.Ca}</p>
                <p><b>TNHS:</b>{patient.TNHS}</p>
                <p><b>BNPL:</b>{patient.BNPL}</p>  */}
                <table className='table table-stripped table-bordered table-sm table-responsive-sm'>
                    <thead >
                        <th><b>Test Names</b></th>
                        <th><b>Result</b></th>
                        <th><b>Normal Range</b></th>
                        <th><b>Unit</b></th>        
                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>Na</td> 
                            <td style={{color: ( patient.Na > test.Na.higherLimit || patient.Na < test.Na.lowerLimit ) ? "red" : "black"}}>{patient.Na}</td>
                            <td>{test.Na.lowerLimit + " - " + test.Na.higherLimit}</td>
                            <td>{test.Na.unit}</td>
                        </tr>
                        <tr>
                            <td>K</td> 
                            <td>{patient.K}</td>
                            <td>{test.K.lowerLimit + "-" + test.K.higherLimit}</td>
                            <td>{test.K.unit}</td>
                        </tr>
                        <tr>
                            <td>Urea</td> 
                            <td>{patient.Urea}</td>
                            <td>{test.Urea.lowerLimit + "-" + test.Urea.higherLimit}</td>
                            <td>{test.Urea.unit}</td>
                        </tr>
                        <tr>
                            <td>CRP</td> 
                            <td>{patient.CRP}</td>
                            <td>{test.CRP.lowerLimit + "-" + test.CRP.higherLimit}</td>
                            <td>{test.CRP.unit}</td>
                        </tr>
                        <tr>
                            <td>TRIG</td> 
                            <td>{patient.TRIG}</td>
                            <td>{ "<" + test.TRIG.higherLimit + " (fasting)"}</td>
                            <td>{test.TRIG.unit}</td>
                        </tr>
                        <tr>
                            <td>HDL</td> 
                            <td>{patient.HDL}</td>
                            <td>{ "< " + test.HDL.higherLimit}</td>
                            <td>{test.HDL.unit}</td>
                        </tr>
                        <tr>
                            <td>FT4</td> 
                            <td>{patient.FT4}</td>
                            <td>{test.FT4.lowerLimit+ "-" + test.FT4.higherLimit}</td>
                            <td>{test.FT4.unit}</td>
                        </tr>
                        <tr>
                            <td>TSH</td> 
                            <td>{patient.TSH}</td>
                            <td>{test.TSH.lowerLimit + " - " + test.TSH.higherLimit}</td>
                            <td>{test.TSH.unit}</td>
                            
                        </tr>
                        <tr>
                            <td>PROT</td> 
                            <td>{patient.PROT}</td>
                            <td>{test.PROT.lowerLimit + " - " + test.PROT.higherLimit}</td>
                            <td>{test.PROT.unit}</td>
                        </tr>
                        <tr>
                            <td>ALT</td> 
                            <td>{patient.ALT}</td>
                            <td>{ " < " + test.ALT.higherLimit}</td>
                            <td>{test.ALT.unit}</td>
                         
                        </tr>
                        <tr>
                            <td>GGT</td> 
                            <td>{patient.GGT}</td>
                            <td>{" < " + test.GGT.higherLimit}</td>
                            <td>{test.GGT.unit}</td>
                        </tr>
                        <tr>
                            <td>Ca</td> 
                            <td>{patient.Ca}</td>
                            <td>{test.Ca.lowerLimit + " - " + test.Ca.higherLimit }</td>
                            <td>{test.Ca.unit}</td>
                        </tr>
                        <tr>
                            <td>TNHS</td> 
                            <td>{patient.TNHS}</td>
                            <td>{" < " +  test.TNHS.higherLimit}</td>
                            <td>{test.TNHS.unit}</td>
                        </tr>
                        <tr>
                            <td>BNPL</td> 
                            <td>{patient.BNPL}</td>
                            <td>{"< " + test.BNPL.higherLimit}</td>
                            <td>{test.BNPL.unit}</td>
                           
                        </tr>
                    </tbody>
                </table>   
            </div>
            
        ); 
    
        

        // return (
        //     <div className="p-3">
        //         <h5>Test Result {patient.mrn}</h5>
        //         <DataTable value={patient} tableStyle={{ minWidth: '50rem' }} showGridlines>
        //             <Column field="mrn" header="MRN" sortable style={{ width: '25%' }}></Column>
        //             <Column field="Na" header="Na" sortable></Column>
        //             <Column field="K" header="K" sortable></Column>
        //             <Column field="Urea" header="Urea" sortable></Column>
        //             <Column field="CRP" header="CRP" sortable></Column>
        //             <Column field="TRIG" header="TRIG" sortable></Column>
        //             <Column field="HDL" header="HDL" sortable></Column>
        //             <Column field="FT4" header="FT4" sortable></Column>
        //             <Column field="TSH" header="TSH" sortable></Column>
        //             <Column field="PROT" header="PROT" sortable></Column>
        //             <Column field="ALT" header="ALT" sortable></Column>
        //             <Column field="GGT" header="GGT" sortable></Column>
        //             <Column field="Ca" header="Ca" sortable></Column>
        //             <Column field="TNHS" header="TNHS" sortable></Column>
        //             <Column field="BNPL" header="BNPL" sortable></Column>
        //         </DataTable>
        //     </div>
        // );
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
                    {/* <Column field="clinician_code" header="Clinician Code" sortable></Column>
                    <Column field="clinician_class" header=" Clinicain Class" sortable></Column>
                    <Column field="source_code" header="Source Code" sortable></Column>
                    <Column field="source_class" header="Source Class" sortable></Column>
                    <Column field="dateofRequest" header="Date Of Request" sortable></Column>
                    <Column field="timeofRequest" header="Time of Request" sortable></Column>
                    <Column field="dateofReceived" header="Date of Received" sortable></Column>
                    <Column field="timeofReceived" header="Time of Received" sortable></Column> */}
                                     
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
