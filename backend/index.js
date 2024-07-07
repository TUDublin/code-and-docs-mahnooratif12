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

app.post('/upload/patient', (req, res) => {
    req.on('data', function(data) { 
        // console.log("Post request received. ");
        console.log("Data: "+data);  
        patient.insert(parsePatient(JSON.parse(data))); 
        res.sendStatus(200); 
    }); 
});


app.post('/upload/clinician', (req, res) => {
    req.on('data', function(data){
             // console.log("Post request received. ");
        console.log("Data:"+data);
        clinician.insert(parseClinicain(JSON.parse(data)));
        res.sendStatus(200); 
        
    } );
});


// app.post('/upload/request', (req, res) => {
//     var data = [
//         { 
//             "patient_id": 2,
//             "clinician_id":22,
//             "dateofRequest": "2024-01-12", 
//             "timeofRequest": "11:17", 
//             "dateofReceived": "2024-01-12", 
//             "timeofReceived": "12:18"
            
//         }, 
//         { 
//             "patient_id": 4,
//             "clinician_id":12,
//             "dateofRequest": "2024-01-13", 
//             "timeofRequest": "12:15", 
//             "dateofReceived": "2024-01-13", 
//             "timeofReceived": "13:18"
//         }
//     ]; 


    
//     console.log("Post request received. ");
//     console.log("Data: "+data);  
//     request.insert(data); 
//     const html = `
//     <html>
//         <body>
//             <h1>Request data entered successfully. </h1>
//         </body>
//     </html>`
//    fghuyrtresmxhjsjax,wlxe 6dgde 6ynmncc 7uytbc rteychgnvbm tttt4,bkkjvjnvvgfhfjghfncnhhfhbvnhhvgh hhvjhhvg nvvhn[]\\\mnk4fdggyewuhxhdfhgbcbndfhde kkc.





// console.log(data.price);

app.use(cors()); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

