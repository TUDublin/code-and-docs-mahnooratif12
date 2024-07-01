import express from 'express'; 
import cors from 'cors';
import * as database from './database.js'; 
import * as patient from './insertdata/patient.js';
import * as clinician from './insertdata/clinician.js';
import * as request from './insertdata/request.js';
import * as datainserted from './datainserted.js'

const PORT = 3061;  

database.connect(); 

const app = express(); 


// app.post('/upload/patient', (req, res) => {
//     /* 
//     var data = [
//         { 
//             "lab_no": 1, 
//             "ocs_no": 1, 
//             "mrn": "abc123", 
//             "forename": "a", 
//             "surname": "b", 
//             "dob": "1/1/2000", 
//             "gender": "Male",
//             "age": "34",
//             "address1": "c", 
//             "address2": "d", 
//             "address3": "e", 
//             "phone_no": 0
//         }, 
//         { 
//             "lab_no": 1, 
//             "ocs_no": 1, 
//             "mrn": "abc124", 
//             "forename": "a", 
//             "surname": "b", 
//             "dob": "1/1/2000",
//             "gender": "Female",
//             "age":"12", 
//             "address1": "c", 
//             "address2": "d", 
//             "address3": "e", 
//             "phone_no": 0
//         }
//     ]; 
//     */
//     req.on('data', function(data) { 
//         console.log("Post request received. ");
//         console.log("Data: "+data);  
//         patient.insert(JSON.parse(data)); 
//         // const html = `
//         // <html>
//         //     <body>
//         //         <h1>Patient data entered successfully. </h1>
//         //     </body>
//         // </html>`
//         res.set('Access-Control-Allow-Origin', '*');
//         res.writeHead(200); 

//             // , {'Content-Type': 'text/html'})
//         // res.end(html)
//     }); 
// });


// app.post('/upload/clinician', (req, res) => {
//     var data = [
//         { 
//             "clinician_code": "BORG", 
//             "clinician_class": "CPAT", 
//             "source_code": "OS", 
//             "source_class": "WD" 
            
//         }, 
//         { 
//             "clinician_code": "WALCA", 
//             "clinicain_class": "UNSP", 
//             "source_code": "JO", 
//             "source_class": "WD" 
//         }
//     ]; 


    
//     console.log("Post request received. ");
//     console.log("Data: "+data);  
//     clinician.insert(data); 
//     const html = `
//     <html>
//         <body>
//             <h1>Clinicain data entered successfully. </h1>
//         </body>
//     </html>`
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(html)
// });


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
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(html)
// });





console.log(data.price);

app.use(cors()); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

