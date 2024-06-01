import express from 'express'; 
import * as database from './database.js'; 
import * as patient from './insertdata/patient.js'; 

const PORT = 3061;  

database.connect(); 

const app = express(); 

app.get('/upload', (req, res) => {
    console.log("Get request received. "); 
    const html = `
    <html>
        <body>
            <h1>Hello world</h1>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
});

app.post('/upload/patient', (req, res) => {
    var data = [
        { 
            "lab_no": 1, 
            "ocs_no": 1, 
            "mrn": "abc123", 
            "forename": "a", 
            "surname": "b", 
            "dob": "1/1/2000", 
            "gender": "Male",
            "age": "34",
            "address1": "c", 
            "address2": "d", 
            "address3": "e", 
            "phone_no": 0
        }, 
        { 
            "lab_no": 1, 
            "ocs_no": 1, 
            "mrn": "abc124", 
            "forename": "a", 
            "surname": "b", 
            "dob": "1/1/2000",
            "gender": "Female",
            "age":"12", 
            "address1": "c", 
            "address2": "d", 
            "address3": "e", 
            "phone_no": 0
        }
    ]; 


    
    console.log("Post request received. ");
    console.log("Data: "+data);  
    patient.insert(data); 
    const html = `
    <html>
        <body>
            <h1>Patient data entered successfully. </h1>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
});


app.post('/upload/clinician', (req, res) => {
    var data = [
        { 
            "clinician_code ": "BORG", 
            "clinician_class": "CPAT", 
            "source_code": "OS", 
            "source_class": "WD", 
            
        }, 
        { 
            "clinician_code": "WALCA", 
            "clinicain_class": "UNSP", 
            "source_code": "JO", 
            "source_class": "WD", 
            }
    ]; 


    
    console.log("Post request received. ");
    console.log("Data: "+data);  
    patient.insert(data); 
    const html = `
    <html>
        <body>
            <h1>Clinicain data entered successfully. </h1>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
});



app.post('/upload/request', (req, res) => {
    var data = [
        { 
            "dateofRequest ": "12/01/2024", 
            "timeofRequest": "11:17", 
            "dateofReceived": "12/01/2024", 
            "timeofReceived": "12:18", 
            
        }, 
        { 
            "dateofRequest ": "13/01/2024", 
            "timeofRequest": "12:15", 
            "dateofReceived": "13/01/2024", 
            "timeofReceived": "13:18", 
        }
    ]; 


    
    console.log("Post request received. ");
    console.log("Data: "+data);  
    patient.insert(data); 
    const html = `
    <html>
        <body>
            <h1>Request data entered successfully. </h1>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

