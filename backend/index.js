import express from 'express'; 
import cors from 'cors';
import * as table from './database/createTable.js'; 
import * as patient from './database/patient.js';
import * as clinician from './database/clinician.js';
import * as request from './database/request.js';
import * as age from './database/age.js';
import * as reference from './database/reference.js';
import * as patient_test from './database/patient_test.js';
import userRoutes from './database/user.js';

const PORT = 3061;  

table.connect(); 

const app = express(); 

app.use(userRoutes);
age.insert(); 
reference.insert(); 
patient_test.insert(); 

function getStringValue(str) { 
    if (str && typeof(str) !== "undefined" && str !== null) { 
        return str; 
    }
    return ""; 
}

function getIntValue(num) { 
    if (isNaN(parseInt(num))) { 
        return 0; 
    }
    return parseInt(num); 
}

function parsePatient(dataRecord) { 

    console.log("Parse patient data: ["+JSON.stringify(dataRecord)+"]"); 

    var patientRecord = {}; 
    patientRecord['lab_no'] = getStringValue(dataRecord['lab_no']); 
    patientRecord['ocs_no'] = getStringValue(dataRecord['ocs_no']); 
    patientRecord['mrn'] = getStringValue(dataRecord['mrn']); 
    patientRecord['forename'] = getStringValue(dataRecord['forename']); 
    patientRecord['surname'] = getStringValue(dataRecord['surname']); 
    patientRecord['dob'] = getStringValue(dataRecord['dob']); 
    patientRecord['gender'] = getStringValue(dataRecord['gender']); 
    patientRecord['age'] = getIntValue(dataRecord['age']); 
    patientRecord['address1'] = getStringValue(dataRecord['address1']); 
    patientRecord['address2'] = getStringValue(dataRecord['address2']); 
    patientRecord['address3'] = getStringValue(dataRecord['address3']); 
    patientRecord['phone_no'] = getStringValue(dataRecord['phone_no']); 

    console.log("Patient: "+JSON.stringify(patientRecord)); 

    return patientRecord; 
}


function parseClinicain(dataRecord) {
    
    console.log("Parse Clinician data: ["+JSON.stringify(dataRecord)+"]");

    var clinicianRecord = {}; 

    clinicianRecord['clinician_code'] = getStringValue(dataRecord['clinician_code']); 
    clinicianRecord['clinician_class'] = getStringValue(dataRecord['clinician_class']); 
    clinicianRecord['source_code'] = getStringValue(dataRecord['source_code']); 
    clinicianRecord['source_class'] = getStringValue(dataRecord['source_class']); 

    console.log("Clincian "+JSON.stringify(clinicianRecord)); 

    return clinicianRecord; 
}

function parseRequest(dataRecord){
    
    var requestRecord = {};

    var patientId = patient.getPatientIdByMRN(dataRecord['mrn']); 
    console.log("Patient Id: "+patientId); 
    var clinicianId = clinician.getClinicianIdByCode(dataRecord['clinician_code']);
    console.log("Clinician Id: "+clinicianId); 

    requestRecord['patient_id'] = getIntValue(patientId); 
    requestRecord['clinician_id'] = getIntValue(clinicianId); 
    requestRecord['dateofRequest'] = getStringValue(dataRecord['dateofRequest']); 
    requestRecord['timeofRequest'] = getStringValue(dataRecord['timeofRequest']); 
    requestRecord['dateofReceived'] = getStringValue(dataRecord['dateofReceived']); 
    requestRecord['timeofReceived'] = getStringValue(dataRecord['timeofReceived']); 

    console.log("Request "+JSON.stringify(requestRecord));
    return requestRecord; 
}

app.post('/upload/patient', (req, res) => {
    req.on('data', function(data) { 
        // console.log("Post request received. ");
        console.log("Data: "+data);
        data = JSON.parse(data);   
        patient.insert(parsePatient(data)); 
        clinician.insert(parseClinicain(data)); 
        request.insert(parseRequest(data)); 
        res.sendStatus(200); 
    }); 
});

app.get('/patient', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var result = patient.getAllPatient(); 
    console.log("Result: "+ JSON.stringify(result)); 
    res.end(JSON.stringify(result)); 
});


// app.post('/api/forgot-password', (req, res) => {
//     const email = req.body.email;

//     // Here, you'd typically check if the email exists in your database
//     // Generate a password reset token and save it to the database

//     // Send the password reset email
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'your-email@gmail.com',
//             pass: 'your-email-password'
//         }
//     });

//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: email,
//         subject: 'Password Reset',
//         text: 'Click this link to reset your password: http://example.com/reset-password?token=YOUR_GENERATED_TOKEN'
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.json({ success: false, message: 'Error sending email' });
//         }
//         res.json({ success: true, message: 'Password reset link sent' });
//     });
// });

app.use(cors()); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

