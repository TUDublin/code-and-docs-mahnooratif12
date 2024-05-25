import express from 'express'; 
import * as database from './database.js'; 
import * as patient from './insertdata/patient.js'; 

const PORT = 3061;  

database.connect(); 

const app = express(); 

var data = [
    { 
        "lab_no": 1, 
        "ocs_no": 1, 
        "mrn": "abc123", 
        "forename": "a", 
        "surname": "b", 
        "dob": "1/1/2000", 
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
        "address1": "c", 
        "address2": "d", 
        "address3": "e", 
        "phone_no": 0
    }
]; 

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
    console.log("Post request received. "); 
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

