




    
//     console.log("Post request received. ");
//     console.log("Data: "+data);  
//     age_reference.insert(data); 
//     const html = `
//     <html>
//         <body>
//             <h1>Age reference data entered successfully. </h1>
//         </body>
//     </html>`
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(html)
// });


// app.post('/upload/test', (req, res) => {
//     var data = [
//         { 
//             "Test_Req_ID": 2,
//             "TCL":"RP",
//             "TFC":"Na", 
//             "testnames":"Sodium", 
//             "unit":"mmol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 2,
//             "TCL":"RP",
//             "TFC":"K", 
//             "testnames":"Potassium", 
//             "unit":"mmol/L"
            
            
//         }, 
//         { 
//             "Test_Req_ID": 2,
//             "TCL":"RP",
//             "TFC":"Urea", 
//             "testnames":"Urea", 
//             "unit":"mmol/L"
            
            
//         },  
//         { 
//             "Test_Req_ID": 2,
//             "TCL":"RP",
//             "TFC":"Crea", 
//             "testnames":"Creatinine", 
//             "unit":"umol/L"
            
            
//         },  
//         { 
//             "Test_Req_ID": 3,
//             "TCL":"CRP",
//             "TFC":"CRP", 
//             "testnames":"C Reactive Protein", 
//             "unit":"mg/L"
            
            
//         },  
//         { 
//             "Test_Req_ID": 4,
//             "TCL":"FLP",
//             "TFC":"Chol", 
//             "testnames":"Cholesterol", 
//             "unit":"mmol/L"
            
            
//         },  
//         { 
//             "Test_Req_ID": 4,
//             "TCL":"FLP",
//             "TFC":"TRIG", 
//             "testnames":"Triglyceride", 
//             "unit":"mmol/L"
            
            
//         }, 
//          { 
//             "Test_Req_ID": 4,
//             "TCL":"FLP",
//             "TFC":"LDL", 
//             "testnames":"Low Density Lipoprotein - Cholesterol", 
//             "unit":"mmol/L"
            
            
//         }, 
//          { 
//             "Test_Req_ID": 4,
//             "TCL":"FLP",
//             "TFC":"HDL", 
//             "testnames":"High Density Lipoprotein - Cholesterol", 
//             "unit":"mmol/L"
            
            
//         },  
//         { 
//             "Test_Req_ID": 4,
//             "TCL":"FLP",
//             "TFC":"nonH", 
//             "testnames":"nonHigh Density Lipoprotein - Cholesterol", 
//             "unit":"mmol/L"
            
            
//         },  
//         { 
//             "Test_Req_ID": 5,
//             "TCL":"TFT",
//             "TFC":"FT4", 
//             "testnames":"Free thyroxine", 
//             "unit":"pmol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 5,
//             "TCL":"TFT",
//             "TFC":"TSH", 
//             "testnames":"Thyroid Stimulating Hormone", 
//             "unit":"mU/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 6,
//             "TCL":"LP",
//             "TFC":"PROT", 
//             "testnames":"Total Protein", 
//             "unit":"g/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 6,
//             "TCL":"LP",
//             "TFC":"ALB", 
//             "testnames":"Albumin", 
//             "unit":"g/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 6,
//             "TCL":"LP",
//             "TFC":"TBIL", 
//             "testnames":"Total Bilirubin", 
//             "unit":"umol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 6,
//             "TCL":"LP",
//             "TFC":"ALKP", 
//             "testnames":"Akaline Phosphatse", 
//             "unit":"IU/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 6,
//             "TCL":"LP",
//             "TFC":"ALT", 
//             "testnames":"Alanine Aminotransferase", 
//             "unit":"IU/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 6,
//             "TCL":"LP",
//             "TFC":"GGT", 
//             "testnames":"Gmma-Glutamyl transferase", 
//             "unit":"IU/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 7,
//             "TCL":"BP",
//             "TFC":"PROT", 
//             "testnames":"Total Protein", 
//             "unit":"g/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 7,
//             "TCL":"BP",
//             "TFC":"ALB", 
//             "testnames":"Albumin", 
//             "unit":"g/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 7,
//             "TCL":"BP",
//             "TFC":"Ca", 
//             "testnames":"Calcium", 
//             "unit":"pmol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 7,
//             "TCL":"BP",
//             "TFC":"CCA", 
//             "testnames":"Corrected Calcium (calculation)", 
//             "unit":"mmol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 7,
//             "TCL":"BP",
//             "TFC":"Phos", 
//             "testnames":"Phosphate", 
//             "unit":"mmol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 8,
//             "TCL":"MG",
//             "TFC":"MG", 
//             "testnames":"Magnesium", 
//             "unit":"mmol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 9,
//             "TCL":"VITD",
//             "TFC":"VID2", 
//             "testnames":"Vitamin D", 
//             "unit":"nmol/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 10,
//             "TCL":"TNX1",
//             "TFC":"TNHS", 
//             "testnames":"Troponin", 
//             "unit":"ng/L"
            
            
//         },
//         { 
//             "Test_Req_ID": 11,
//             "TCL":"BNPL",
//             "TFC":"", 
//             "testnames":"NT pro BNP", 
//             "unit":"pg/L"
            
            
//         },
        

//     ]; 


    
//     console.log("Post request received. ");
//     console.log("Data: "+data);  
//     test.insert(data); 
//     const html = `
//     <html>
//         <body>
//             <h1>Test data entered successfully. </h1>
//         </body>
//     </html>`
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(html)
// });


    
