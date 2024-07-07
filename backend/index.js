import express from 'express'; 
import cors from 'cors';
import * as table from './database/createTable.js'; 
import * as patient from './database/patient.js';
import * as clinician from './database/clinician.js';
import * as request from './database/request.js';
import * as age from './database/age.js'
import * as reference from './database/reference.js'
import * as patient_test from './database/patient_test.js'

const PORT = 3061;  

table.connect(); 

const app = express(); 

age.insert(); 
reference.insert(); 
patient_test.insert(); 

function parsePatient(dataRecord) { 

    console.log("Parse patient data: ["+JSON.stringify(dataRecord)+"]"); 

    var patientRecord = {}; 
    patientRecord['lab_no'] = dataRecord['lab_no']; 
    patientRecord['ocs_no'] = dataRecord['ocs_no']; 
    patientRecord['mrn'] = dataRecord['mrn']; 
    patientRecord['forename'] = ""; // dataRecord['forename']; 
    patientRecord['surname'] = ""; // dataRecord['surname']; 
    patientRecord['dob'] = dataRecord['dob']; 
    patientRecord['gender'] = dataRecord['gender']; 
    patientRecord['age'] = dataRecord['age']; 
    patientRecord['address1'] = dataRecord['address1']; 
    patientRecord['address2'] = dataRecord['address2']; 
    patientRecord['address3'] = dataRecord['address3']; 
    patientRecord['phone_no'] = dataRecord['phone_no']; 

    console.log("Patient: "+JSON.stringify(patientRecord)); 

    return patientRecord = {};


   

}


function parseClinicain(dataRecord) {
    
    Console.log("Parse Clinician data: ["+JSON.stringify(dataRecord)+"]");

    var clinicianRecord = {}; 

    clinicianRecord['clinician_code'] = dataRecord['clinician_code']; 
    clinicianRecord['clinician_class'] = dataRecord['clinician_class']; 
    clinicianRecord['source_code'] = dataRecord['source_code']; 
    clinicianRecord['source_class'] = dataRecord['source_class']; 

    console.log("Clincian "+JSON.stringify(clinicianRecord)); 


}

function parseRequest(dataRecord){

    Console.log("Parse Request data: ["+JSON.stringify(dataRecord)+"]");

    var requestRecord = {};

    requestRecord['patient_id'] = dataRecord['patient_id']; 
    requestRecord['clinician_id'] = dataRecord['clinician_id']; 
    requestRecord['dateofRequest'] = dataRecord['dateofRequest']; 
    requestRecord['timeofRequest'] = dataRecord['timeofRequest']; 
    requestRecord['dateofReceived'] = dataRecord['dateofReceived']; 
    requestRecord['timeofReceived'] = dataRecord['timeofReceived']; 

    console.log("Request "+JSON.stringify(requestRecord));
    return requestRecord = {};     

}

app.post('/upload/patient', (req, res) => {
    req.on('data', function(data) { 
        // console.log("Post request received. ");
        console.log("Data: "+data);  
        patient.insert(parsePatient(JSON.parse(data))); 
        request.insert(parsePatient(JSON.parse(data))); 
        res.sendStatus(200); 
    }); 
});



// console.log(data.price);

app.use(cors()); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

