import express from 'express'; 
import * as database from './database.js'; 
import * as patient from './insertdata/patient.js'; 
import * as clinician from './insertdata/clinician.js';
import * as request from './insertdata/request.js';
import * as test from './insertdata/Test.js';

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
            "clinician_code": "BORG", 
            "clinician_class": "CPAT", 
            "source_code": "OS", 
            "source_class": "WD" 
            
        }, 
        { 
            "clinician_code": "WALCA", 
            "clinicain_class": "UNSP", 
            "source_code": "JO", 
            "source_class": "WD" 
        }
    ]; 


    
    console.log("Post request received. ");
    console.log("Data: "+data);  
    clinician.insert(data); 
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
            "patient_id": 2,
            "clinician_id":22,
            "dateofRequest": "2024-01-12", 
            "timeofRequest": "11:17", 
            "dateofReceived": "2024-01-12", 
            "timeofReceived": "12:18"
            
        }, 
        { 
            "patient_id": 4,
            "clinician_id":12,
            "dateofRequest": "2024-01-13", 
            "timeofRequest": "12:15", 
            "dateofReceived": "2024-01-13", 
            "timeofReceived": "13:18"
        }
    ]; 


    
    console.log("Post request received. ");
    console.log("Data: "+data);  
    request.insert(data); 
    const html = `
    <html>
        <body>
            <h1>Request data entered successfully. </h1>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
});


app.post('/upload/test', (req, res) => {
    var data = [
        { 
            "Test_Req_ID": 2,
            "TCL":"RP",
            "TFC":"Na", 
            "testnames":"Sodium", 
            "unit":"mmol/L"
            
            
        },
        { 
            "Test_Req_ID": 2,
            "TCL":"RP",
            "TFC":"K", 
            "testnames":"Potassium", 
            "unit":"mmol/L"
            
            
        }, 
        { 
            "Test_Req_ID": 2,
            "TCL":"RP",
            "TFC":"Urea", 
            "testnames":"Urea", 
            "unit":"mmol/L"
            
            
        },  
        { 
            "Test_Req_ID": 2,
            "TCL":"RP",
            "TFC":"Crea", 
            "testnames":"Creatinine", 
            "unit":"umol/L"
            
            
        },  
        { 
            "Test_Req_ID": 3,
            "TCL":"CRP",
            "TFC":"CRP", 
            "testnames":"C Reactive Protein", 
            "unit":"mg/L"
            
            
        },  
        { 
            "Test_Req_ID": 4,
            "TCL":"FLP",
            "TFC":"Chol", 
            "testnames":"Cholesterol", 
            "unit":"mmol/L"
            
            
        },  
        { 
            "Test_Req_ID": 4,
            "TCL":"FLP",
            "TFC":"TRIG", 
            "testnames":"Triglyceride", 
            "unit":"mmol/L"
            
            
        }, 
         { 
            "Test_Req_ID": 4,
            "TCL":"FLP",
            "TFC":"LDL", 
            "testnames":"Low Density Lipoprotein - Cholesterol", 
            "unit":"mmol/L"
            
            
        }, 
         { 
            "Test_Req_ID": 4,
            "TCL":"FLP",
            "TFC":"HDL", 
            "testnames":"High Density Lipoprotein - Cholesterol", 
            "unit":"mmol/L"
            
            
        },  
        { 
            "Test_Req_ID": 4,
            "TCL":"FLP",
            "TFC":"nonH", 
            "testnames":"nonHigh Density Lipoprotein - Cholesterol", 
            "unit":"mmol/L"
            
            
        },  
        { 
            "Test_Req_ID": 5,
            "TCL":"TFT",
            "TFC":"FT4", 
            "testnames":"Free thyroxine", 
            "unit":"pmol/L"
            
            
        },
        { 
            "Test_Req_ID": 5,
            "TCL":"TFT",
            "TFC":"TSH", 
            "testnames":"Thyroid Stimulating Hormone", 
            "unit":"mU/L"
            
            
        },
        { 
            "Test_Req_ID": 6,
            "TCL":"LP",
            "TFC":"PROT", 
            "testnames":"Total Protein", 
            "unit":"g/L"
            
            
        },
        { 
            "Test_Req_ID": 6,
            "TCL":"LP",
            "TFC":"ALB", 
            "testnames":"Albumin", 
            "unit":"g/L"
            
            
        },
        { 
            "Test_Req_ID": 6,
            "TCL":"LP",
            "TFC":"TBIL", 
            "testnames":"Total Bilirubin", 
            "unit":"umol/L"
            
            
        },
        { 
            "Test_Req_ID": 6,
            "TCL":"LP",
            "TFC":"ALKP", 
            "testnames":"Akaline Phosphatse", 
            "unit":"IU/L"
            
            
        },
        { 
            "Test_Req_ID": 6,
            "TCL":"LP",
            "TFC":"ALT", 
            "testnames":"Alanine Aminotransferase", 
            "unit":"IU/L"
            
            
        },
        { 
            "Test_Req_ID": 6,
            "TCL":"LP",
            "TFC":"GGT", 
            "testnames":"Gmma-Glutamyl transferase", 
            "unit":"IU/L"
            
            
        },
        { 
            "Test_Req_ID": 7,
            "TCL":"BP",
            "TFC":"PROT", 
            "testnames":"Total Protein", 
            "unit":"g/L"
            
            
        },
        { 
            "Test_Req_ID": 7,
            "TCL":"BP",
            "TFC":"ALB", 
            "testnames":"Albumin", 
            "unit":"g/L"
            
            
        },
        { 
            "Test_Req_ID": 7,
            "TCL":"BP",
            "TFC":"Ca", 
            "testnames":"Calcium", 
            "unit":"pmol/L"
            
            
        },
        { 
            "Test_Req_ID": 7,
            "TCL":"BP",
            "TFC":"CCA", 
            "testnames":"Corrected Calcium (calculation)", 
            "unit":"mmol/L"
            
            
        },
        { 
            "Test_Req_ID": 7,
            "TCL":"BP",
            "TFC":"Phos", 
            "testnames":"Phosphate", 
            "unit":"mmol/L"
            
            
        },
        { 
            "Test_Req_ID": 8,
            "TCL":"MG",
            "TFC":"MG", 
            "testnames":"Magnesium", 
            "unit":"mmol/L"
            
            
        },
        { 
            "Test_Req_ID": 9,
            "TCL":"VITD",
            "TFC":"VID2", 
            "testnames":"Vitamin D", 
            "unit":"nmol/L"
            
            
        },
        { 
            "Test_Req_ID": 10,
            "TCL":"TNX1",
            "TFC":"TNHS", 
            "testnames":"Troponin", 
            "unit":"ng/L"
            
            
        },
        { 
            "Test_Req_ID": 11,
            "TCL":"BNPL",
            "TFC":"", 
            "testnames":"NT pro BNP", 
            "unit":"pg/L"
            
            
        },
        

    ]; 


    
    console.log("Post request received. ");
    console.log("Data: "+data);  
    test.insert(data); 
    const html = `
    <html>
        <body>
            <h1>Test data entered successfully. </h1>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

