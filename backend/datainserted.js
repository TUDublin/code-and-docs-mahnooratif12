




// app.post('/upload/age_reference', (req, res) => {
//     var data = [
//         { 
//            "age_id": 1,
//            "reference_id": 2
//         },
//         { 
//             "age_id": 2,
//             "reference_id": 3
//         }
//     ]; 


    
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

// app.post('/upload/reference', (req, res) => {
//     var data = [
//         {  
//             // Sodium 
//             "Test_Id": 1, 
//             "age_ref": "No" , 
//             "ref_range": "135-145", 
//             "flaglimitlow": 135,
//             "flaglimithigh":145,
//             "Alertlimitlow":128,
//             "Alertlimithigh":149
            
            
//         },

//             // Postassium


//         { 
//             "Test_Id": 2, 
//             "age_ref": "Yes" , 
//             "ref_range": "3.7 - 5.0", 
//             "flaglimitlow": 3.7,
//             "flaglimithigh": 5.0,
//             "Alertlimitlow": 3.0,
//             "Alertlimithigh": 5.3,
            
            
//         },{ 
//             "Test_Id": 2, 
//             "age_ref": "Yes" , 
//             "ref_range": "4.1 - 5.3", 
//             "flaglimitlow": 4.1,
//             "flaglimithigh":5.3,
//             "Alertlimitlow":3.0,
//             "Alertlimithigh":5.3,
            
            
//         }, { 
//             "Test_Id": 2, 
//             "age_ref": "Yes" , 
//             "ref_range": "3.4 - 5.0", 
//             "flaglimitlow": 3.4,
//             "flaglimithigh":5.0,
//             "Alertlimitlow":3.0,
//             "Alertlimithigh":5.3,
            
            
//         }, { 
//             "Test_Id": 2, 
//             "age_ref": "Yes" , 
//             "ref_range": "3.5 - 5.0", 
//             "flaglimitlow": 3.5,
//             "flaglimithigh":5.0,
//             "Alertlimitlow":2.8,
//             "Alertlimithigh":5.3,
            
            
//         }, 
        
//         ///Urea
        
//         { 
//             "Test_Id": 3, 
//             "age_ref": "Yes" , 
//             "ref_range": "1.5-6.5", 
//             "flaglimitlow": 1.5,
//             "flaglimithigh":6.5,
//             "Alertlimitlow":1.5,
//             "Alertlimithigh":6.5
            
            
//         }, { 
//             "Test_Id": 3, 
//             "age_ref": "Yes" , 
//             "ref_range": "2.0 - 6.5", 
//             "flaglimitlow": 2.0,
//             "flaglimithigh":6.5,
//             "Alertlimitlow":2.0,
//             "Alertlimithigh":6.5,
            
            
//         }, 
        
//         { 
//             "Test_Id": 3, 
//             "age_ref": "Yes" , 
//             "ref_range": "2.0 - 7.0", 
//             "flaglimitlow": 2.0,
//             "flaglimithigh":7.0,
//             "Alertlimitlow":0,
//             "Alertlimithigh":11.0,
            
            
//         }, 
        
//         //Creatinie

//         { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "27-77", 
//             "flaglimitlow": 27,
//             "flaglimithigh":77,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         },
        
//         { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "14 - 35", 
//             "flaglimitlow": 14,
//             "flaglimithigh":34,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "15 - 31", 
//             "flaglimitlow": 15,
//             "flaglimithigh":31,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "23 - 37", 
//             "flaglimitlow": 23,
//             "flaglimithigh":37,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "25 - 42", 
//             "flaglimitlow": 25,
//             "flaglimithigh":42,
//             "Alertlimitlow":0,
//             "Alertlimithigh": 100, 
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "30 - 47", 
//             "flaglimitlow": 30,
//             "flaglimithigh":47,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "29 - 56", 
//             "flaglimitlow": 29,
//             "flaglimithigh":56,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "39 - 60", 
//             "flaglimitlow": 39,
//             "flaglimithigh":60,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "40 - 68", 
//             "flaglimitlow": 40,
//             "flaglimithigh":68,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "59 - 104", 
//             "flaglimitlow": 59,
//             "flaglimithigh":104,
//             "Alertlimitlow":0,
//             "Alertlimithigh":200,
            
            
//         }, { 
//             "Test_Id": 4, 
//             "age_ref": "Yes" , 
//             "ref_range": "45 - 85", 
//             "flaglimitlow": 45,
//             "flaglimithigh":84,
//             "Alertlimitlow":0,
//             "Alertlimithigh":200,
            
            
//         },
        
//         //C Reactive Protein
        
        
//         { 
//             "Test_Id": 5, 
//             "age_ref": "No" , 
//             "ref_range": "135-145", 
//             "flaglimitlow": 135,
//             "flaglimithigh":145,
//             "Alertlimitlow":128,
//             "Alertlimithigh":149
            
            
//         }, { 
//             "Test_Id": 1, 
//             "age_ref": "No" , 
//             "ref_range": "0 - 5", 
//             "flaglimitlow": 0,
//             "flaglimithigh":5,
//             "Alertlimitlow":0,
//             "Alertlimithigh":300,
            
            
//         }, 
        
//         //Cholesterol

//         { 
//             "Test_Id": 6, 
//             "age_ref": "No" , 
//             "ref_range": "< 5", 
//             "flaglimitlow": 0,
//             "flaglimithigh":5,
//             "Alertlimitlow":2.0,
//             "Alertlimithigh":8.0,
            
            
//         }, 
        
//         //Triglyceride
        
//         { 
//             "Test_Id": 7, 
//             "age_ref": "No" , 
//             "ref_range": "<1.7 (fasting)", 
//             "flaglimitlow": 0,
//             "flaglimithigh":1.7,
//             "Alertlimitlow":0.0,
//             "Alertlimithigh":8.0,
            
            
//         }, 
        
//         //Low Density Lipoprotein - Cholesterol
        
//         { 
//             "Test_Id": 8, 
//             "age_ref": "No" , 
//             "ref_range": "<3.0", 
//             "flaglimitlow": 0,
//             "flaglimithigh":3,
//             "Alertlimitlow":0.1,
//             "Alertlimithigh":6.0,
            
            
//         },

//         //High Density Liporpotein - Cholesterol

//         { 
//             "Test_Id": 9, 
//             "age_ref": "No" , 
//             "ref_range": "M > 1.0", 
//             "flaglimitlow": 0,
//             "flaglimithigh":1.0,
//             "Alertlimitlow":0.5,
//             "Alertlimithigh":99,
            
            
//         },

//         { 
//             "Test_Id": 9, 
//             "age_ref": "No" , 
//             "ref_range": "F > 1.2", 
//             "flaglimitlow": 0,
//             "flaglimithigh":1.2,
//             "Alertlimitlow":0.5,
//             "Alertlimithigh":99,
            
            
//         },

//         //nonHigh Desity Lipoprotein - Cholesterol

//         { 
//             "Test_Id": 10, 
//             "age_ref": "No" , 
//             "ref_range": "<3.8", 
//             "flaglimitlow": 0,
//             "flaglimithigh":3.8,
//             "Alertlimitlow":0,
//             "Alertlimithigh":9,
            
            
//         },

//         //Free Thyroxine

//         { 
//             "Test_Id": 11, 
//             "age_ref": "Yes" , 
//             "ref_range": "11 - 32", 
//             "flaglimitlow": 11,
//             "flaglimithigh":32,
//             "Alertlimitlow":11,
//             "Alertlimithigh":32,
            
            
//         },

//         { 
//             "Test_Id": 11, 
//             "age_ref": "Yes" , 
//             "ref_range": "11 - 29", 
//             "flaglimitlow": 11,
//             "flaglimithigh":29,
//             "Alertlimitlow":11,
//             "Alertlimithigh":29,
            
            
//         },

//         { 
//             "Test_Id": 11, 
//             "age_ref": "Yes" , 
//             "ref_range": "11 - 26", 
//             "flaglimitlow": 11,
//             "flaglimithigh":26,
//             "Alertlimitlow": 11,
//             "Alertlimithigh":26,
            
            
//         },

//         { 
//             "Test_Id": 11, 
//             "age_ref": "Yes" , 
//             "ref_range": "12 - 23", 
//             "flaglimitlow": 12,
//             "flaglimithigh":23,
//             "Alertlimitlow":12,
//             "Alertlimithigh":23,
            
            
//         },

//         { 
//             "Test_Id": 11, 
//             "age_ref": "Yes" , 
//             "ref_range": "12 - 22", 
//             "flaglimitlow": 12,
//             "flaglimithigh":22,
//             "Alertlimitlow": 8,
//             "Alertlimithigh": 26,
            
            
//         },

//         //Thyroid Stimulating Hormone

//         { 
//             "Test_Id": 12, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.7 - 15.2", 
//             "flaglimitlow": 0.7,
//             "flaglimithigh":15.2,
//             "Alertlimitlow":0.70,
//             "Alertlimithigh":15.2,
            
            
//         },

//         { 
//             "Test_Id": 12, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.72 - 11.0", 
//             "flaglimitlow": 0.72,
//             "flaglimithigh":11.0,
//             "Alertlimitlow":0.72,
//             "Alertlimithigh":11.0,
            
            
//         },

//         { 
//             "Test_Id": 12, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.73 - 8.35", 
//             "flaglimitlow": 0.73,
//             "flaglimithigh":8.35,
//             "Alertlimitlow":0.73,
//             "Alertlimithigh":8.35,
            
            
//         },

//         { 
//             "Test_Id": 12, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.70 - 5.97", 
//             "flaglimitlow": 0.70,
//             "flaglimithigh":8.35,
//             "Alertlimitlow":0.73,
//             "Alertlimithigh":8.35,
            
            
//         },

//         { 
//             "Test_Id": 12, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.60 - 4.84", 
//             "flaglimitlow": 0.60,
//             "flaglimithigh":4.85,
//             "Alertlimitlow":0.60,
//             "Alertlimithigh":6.85,
            
            
//         },

//         { 
//             "Test_Id": 12, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.51 - 4.30", 
//             "flaglimitlow": 0.51,
//             "flaglimithigh":4.30,
//             "Alertlimitlow":0.51,
//             "Alertlimithigh":4.30,
            
            
//         },

//         { 
//             "Test_Id": 12, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.3 - 4.2", 
//             "flaglimitlow": 0.3,
//             "flaglimithigh":4.20,
//             "Alertlimitlow":0.2,
//             "Alertlimithigh":6.0,
            
            
//         },

//         //Total Protein

//         { 
//             "Test_Id": 13, 
//             "age_ref": "Yes" , 
//             "ref_range": "47 - 75", 
//             "flaglimitlow": 45,
//             "flaglimithigh":75,
//             "Alertlimitlow":45,
//             "Alertlimithigh":75,
            
            
//         },

//         { 
//             "Test_Id": 13, 
//             "age_ref": "Yes" , 
//             "ref_range": "65 - 85", 
//             "flaglimitlow": 65,
//             "flaglimithigh":85,
//             "Alertlimitlow":50,
//             "Alertlimithigh":90,
            
            
//         },

//         //Albumin

//         { 
//             "Test_Id": 14, 
//             "age_ref": "Yes" , 
//             "ref_range": "30 - 50", 
//             "flaglimitlow": 30,
//             "flaglimithigh":50,
//             "Alertlimitlow":25,
//             "Alertlimithigh":55,
            
            
//         },

//         { 
//             "Test_Id": 14, 
//             "age_ref": "Yes" , 
//             "ref_range": "35 - 50", 
//             "flaglimitlow": 35,
//             "flaglimithigh":50,
//             "Alertlimitlow":25,
//             "Alertlimithigh":55,
            
            
//         },

//         //Total Bilirubin

//         { 
//             "Test_Id": 15, 
//             "age_ref": "Yes" , 
//             "ref_range": "< 137", 
//             "flaglimitlow": 0,
//             "flaglimithigh":137,
//             "Alertlimitlow":0,
//             "Alertlimithigh":137,
            
            
//         },

//         { 
//             "Test_Id": 15, 
//             "age_ref": "Yes" , 
//             "ref_range": "<200", 
//             "flaglimitlow": 0,
//             "flaglimithigh":200,
//             "Alertlimitlow":0,
//             "Alertlimithigh":200,
            
            
//         },

//         { 
//             "Test_Id": 15, 
//             "age_ref": "Yes" , 
//             "ref_range": "<17", 
//             "flaglimitlow": 0,
//             "flaglimithigh":17,
//             "Alertlimitlow":0.1,
//             "Alertlimithigh":240,
            
            
//         },

//         //Alkaline Phosphatase


//         { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<250", 
//             "flaglimitlow": 0,
//             "flaglimithigh":250,
//             "Alertlimitlow": 0,
//             "Alertlimithigh":250,
            
            
//         },

//         { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<231", 
//             "flaglimitlow": 0,
//             "flaglimithigh":231,
//             "Alertlimitlow":0,
//             "Alertlimithigh":231,
            
            
//         },

//         { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<449", 
//             "flaglimitlow": 0,
//             "flaglimithigh":449,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },

//         { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<462", 
//             "flaglimitlow": 0,
//             "flaglimithigh":462,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },
//         { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<281", 
//             "flaglimitlow": 0,
//             "flaglimithigh":281,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },   { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<269", 
//             "flaglimitlow": 0,
//             "flaglimithigh":269,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },   { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "300", 
//             "flaglimitlow": 0,
//             "flaglimithigh":300,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },   { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<390", 
//             "flaglimitlow": 0,
//             "flaglimithigh":390,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },   { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "<187", 
//             "flaglimitlow": 0,
//             "flaglimithigh":187,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },   { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "40 - 130", 
//             "flaglimitlow": 40,
//             "flaglimithigh":135,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },   { 
//             "Test_Id": 16, 
//             "age_ref": "Yes" , 
//             "ref_range": "35 - 105", 
//             "flaglimitlow": 35,
//             "flaglimithigh":105,
//             "Alertlimitlow":0,
//             "Alertlimithigh":1000,
            
            
//         },  
        
//         //Alanine Aminotransferase
        
//         { 
//             "Test_Id": 17, 
//             "age_ref": "Yes" , 
//             "ref_range": "5 - 30", 
//             "flaglimitlow": 5,
//             "flaglimithigh":50,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         },   { 
//             "Test_Id": 17, 
//             "age_ref": "Yes" , 
//             "ref_range": "<45", 
//             "flaglimitlow": 0,
//             "flaglimithigh":45,
//             "Alertlimitlow":0,
//             "Alertlimithigh":490,
            
            
//         },   { 
//             "Test_Id": 17, 
//             "age_ref": "Yes" , 
//             "ref_range": "<35", 
//             "flaglimitlow": 35,
//             "flaglimithigh":0,
//             "Alertlimitlow":0,
//             "Alertlimithigh":490,
            
            
//         },  
        
//         //Gamma-Glutamyl transferase
        
//         { 
//             "Test_Id": 18, 
//             "age_ref": "Yes" , 
//             "ref_range": "<120", 
//             "flaglimitlow": 0,
//             "flaglimithigh":120,
//             "Alertlimitlow":0,
//             "Alertlimithigh":120,
            
            
//         },   { 
//             "Test_Id": 18, 
//             "age_ref": "Yes" , 
//             "ref_range": "<65", 
//             "flaglimitlow": 0,
//             "flaglimithigh":65,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         },   { 
//             "Test_Id": 18, 
//             "age_ref": "Yes" , 
//             "ref_range": "<25", 
//             "flaglimitlow": 0,
//             "flaglimithigh":25,
//             "Alertlimitlow":0,
//             "Alertlimithigh":100,
            
            
//         },   { 
//             "Test_Id": 18, 
//             "age_ref": "Yes" , 
//             "ref_range": "<60", 
//             "flaglimitlow": 0,
//             "flaglimithigh":60,
//             "Alertlimitlow":0,
//             "Alertlimithigh":500,
            
            
//         },   { 
//             "Test_Id": 18, 
//             "age_ref": "Yes" , 
//             "ref_range": "<40", 
//             "flaglimitlow": 0,
//             "flaglimithigh":40,
//             "Alertlimitlow":0,
//             "Alertlimithigh":500,
            
            
//         },  
        
//         //Total Protein
        
//         { 
//             "Test_Id":19, 
//             "age_ref": "Yes" , 
//             "ref_range": "45 - 75", 
//             "flaglimitlow": 45,
//             "flaglimithigh":75,
//             "Alertlimitlow":45,
//             "Alertlimithigh":75,
            
            
//         },   { 
//             "Test_Id": 19, 
//             "age_ref": "Yes" , 
//             "ref_range": "65 - 85", 
//             "flaglimitlow": 65,
//             "flaglimithigh":85,
//             "Alertlimitlow":50,
//             "Alertlimithigh":90,
            
            
//         }, 
        
//         //Albumin
        
//         { 
//             "Test_Id": 20, 
//             "age_ref": "Yes" , 
//             "ref_range": "30 - 50", 
//             "flaglimitlow": 30,
//             "flaglimithigh":50,
//             "Alertlimitlow":25,
//             "Alertlimithigh":55,
            
            
//         },   { 
//             "Test_Id": 20, 
//             "age_ref": "Yes" , 
//             "ref_range": "35 - 50", 
//             "flaglimitlow": 35,
//             "flaglimithigh":50,
//             "Alertlimitlow":25,
//             "Alertlimithigh":55,
            
            
//         },  
        
//         //Calcium
        
//         { 
//             "Test_Id": 21, 
//             "age_ref": "Yes" , 
//             "ref_range": "1.48 - 2.68", 
//             "flaglimitlow": 1.48,
//             "flaglimithigh":2.68,
//             "Alertlimitlow":1.48,
//             "Alertlimithigh":2.68,
            
            
//         },   { 
//             "Test_Id": 21, 
//             "age_ref": "Yes" , 
//             "ref_range": "2.25 - 2.70", 
//             "flaglimitlow": 2.25,
//             "flaglimithigh":2.70,
//             "Alertlimitlow":2.25,
//             "Alertlimithigh":2.70,
            
            
//         },   { 
//             "Test_Id": 21, 
//             "age_ref": "Yes" , 
//             "ref_range": "2.15 - 2.55", 
//             "flaglimitlow": 2.15,
//             "flaglimithigh":2.55,
//             "Alertlimitlow":1.80,
//             "Alertlimithigh":2.85,
            
            
//         },  
        
//         //Corrected Calcium(Calculation)
        
//         { 
//             "Test_Id": 22, 
//             "age_ref": "Yes" , 
//             "ref_range": "1.48 - 2.68", 
//             "flaglimitlow": 1.48,
//             "flaglimithigh":2.68,
//             "Alertlimitlow":1.48,
//             "Alertlimithigh":2.68,
            
            
//         },   { 
//             "Test_Id": 22, 
//             "age_ref": "Yes" , 
//             "ref_range": "2.25 - 2.70", 
//             "flaglimitlow": 2.25,
//             "flaglimithigh":2.70,
//             "Alertlimitlow":2.25,
//             "Alertlimithigh":2.70,
            
            
//         },   { 
//             "Test_Id": 22, 
//             "age_ref": "Yes" , 
//             "ref_range": "2.15 - 2.55", 
//             "flaglimitlow": 2.15,
//             "flaglimithigh":2.55,
//             "Alertlimitlow":1.80,
//             "Alertlimithigh":2.85,
            
            
//         },   
        
//         //Phosphate
        
//         { 
//             "Test_Id": 23, 
//             "age_ref": "Yes" , 
//             "ref_range": "1.6 - 2.9", 
//             "flaglimitlow": 1.6,
//             "flaglimithigh":2.9,
//             "Alertlimitlow":1.6,
//             "Alertlimithigh":2.9,
            
            
//         },   { 
//             "Test_Id": 23, 
//             "age_ref": "Yes" , 
//             "ref_range": "1.2 - 2.2", 
//             "flaglimitlow": 1.2,
//             "flaglimithigh":2.2,
//             "Alertlimitlow":1.2,
//             "Alertlimithigh":2.2,
            
            
//         },
//         { 
//             "Test_Id": 23, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.9 - 1.9", 
//             "flaglimitlow": 0.9,
//             "flaglimithigh":1.9,
//             "Alertlimitlow":0.9,
//             "Alertlimithigh":1.9,
            
            
//         }, { 
//             "Test_Id": 23, 
//             "age_ref": "Yes" , 
//             "ref_range": "0.8 - 1.4", 
//             "flaglimitlow": 0.8,
//             "flaglimithigh":1.4,
//             "Alertlimitlow":0.5,
//             "Alertlimithigh":3.0,
            
            
//         }, 
        
//         //Magnesium

//         { 
//             "Test_Id": 24, 
//             "age_ref": "No" , 
//             "ref_range": "0.1 - 1.00", 
//             "flaglimitlow": 0.7,
//             "flaglimithigh": 1,
//             "Alertlimitlow": 0.5,
//             "Alertlimithigh":1.2,
            
            
//         }, 
        
//         // Vitamin D
        
//         { 
//             "Test_Id": 25, 
//             "age_ref": "No" , 
//             "ref_range": " <30 - deficient \n 30-50 insufficient \n >50 normal ", 
//             "flaglimitlow": 0,
//             "flaglimithigh":0,
//             "Alertlimitlow": 0,
//             "Alertlimithigh":0,
            
            
//         },  
        
//         // Troponin
        
//         { 
//             "Test_Id": 26, 
//             "age_ref": "No" , 
//             "ref_range": " <14 ", 
//             "flaglimitlow": 0,
//             "flaglimithigh": 14,
//             "Alertlimitlow": 0,
//             "Alertlimithigh": 50,
            
            
//         },

//         //NT pro BNP

//         { 
//             "Test_Id": 27, 
//             "age_ref": "No" , 
//             "ref_range": " <300 ", 
//             "flaglimitlow": 0,
//             "flaglimithigh": 300,
//             "Alertlimitlow": 10,
//             "Alertlimithigh": 3000,
            
            
//         }
//     ]; 


    


    
//     console.log("Post request received. ");
//     console.log("Data: "+data);  
//     reference.insert(data); 
//     const html = `
//     <html>
//         <body>
//             <h1>Reference data entered successfully. </h1>
//         </body>
//     </html>`
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(html)
// });


// app.post('/upload/age', (req, res) => {
//     var data = [
//         {  
//             // Sodium
//             "Reference_id": 1,
//             "Age": "No",
//             "ref": "0"
            
            
//         },
//         {  
//             // Potassium
//             "Reference_id": 2,
//             "Age": "Yes",
//             "ref": "4 days"
            
            
//         },
//         {  
             
//             "Reference_id": 2,
//             "Age": "Yes",
//             "ref": "2y"
            
            
//         },{  
            
//             "Reference_id": 2,
//             "Age": "Yes",
//             "ref": "12y"
            
            
//         },{  
             
//             "Reference_id": 2,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },

//              //Urea
//         {  
            
//             "Reference_id": 3,
//             "Age": "Yes",
//             "ref": "4 days"
            
            
//         },{  
            
//             "Reference_id": 3,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 3,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
//         //Crea
        
//         {  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "1mth"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "11 mths"
            
            
//         },
//         {  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "2y"
            
            
//         },
//         {  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "4y"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "6y"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "8y"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "10y"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "12y"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "F 200y"
            
            
//         },{  
            
//             "Reference_id": 4,
//             "Age": "Yes",
//             "ref": "M 200y"
            
            
//         },
        
//         //CRP
        
//         {  
            
//             "Reference_id": 5,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        

//         //Chol

//         {  
            
//             "Reference_id": 6,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
//         //Trig
        
//         {  
            
//             "Reference_id": 7,
//             "Age": "No",
//             "ref": ""
            
            
//         },{  
            
//             "Reference_id": 7,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
//         //LDL
        
//         {  
            
//             "Reference_id": 8,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
//         //HDL
        
        
//         {  
            
//             "Reference_id": 9,
//             "Age": "No",
//             "ref": ""
            
            
//         },{  
            
//             "Reference_id": 9,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
//         //nonH
        
//         {  
            
//             "Reference_id": 10,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
//         //FT4
        
//         {  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "5 d"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "2 m"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "11 m"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "5y"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
        
//         //TSH
        
//         {  
            
//             "Reference_id": 12,
//             "Age": "Yes",
//             "ref": "5d "
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "2m"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "11m"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "5y"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "10y"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "19y"
            
            
//         },{  
            
//             "Reference_id": 11,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
//         //PROT
        
//         {  
            
//             "Reference_id": 12,
//             "Age": "Yes",
//             "ref": "4d"
            
            
//         },{  
            
//             "Reference_id": 12,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
        
//         //ALB
        
//         {  
            
//             "Reference_id": 13,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 13,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
//         //TBIL
        
//         {  
            
//             "Reference_id": 14,
//             "Age": "Yes",
//             "ref": "2d"
            
            
//         },{  
            
//             "Reference_id": 14,
//             "Age": "Yes",
//             "ref": "5d"
            
            
//         },{  
            
//             "Reference_id": 14,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
//         //ALKP
        
//         {  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "1d"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "5d"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "6m"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "1y"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "3y"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "6y"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "12y"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "M 17"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "F 17"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "M 200"
            
            
//         },{  
            
//             "Reference_id": 15,
//             "Age": "Yes",
//             "ref": "F 200"
            
            
//         },
        
//         //ALT
        
        
//         {  
            
//             "Reference_id": 16,
//             "Age": "Yes",
//             "ref": "2y"
            
            
//         },{  
            
//             "Reference_id": 16,
//             "Age": "Yes",
//             "ref": "M 200"
            
            
//         },{  
            
//             "Reference_id": 16,
//             "Age": "Yes",
//             "ref": "F 200"
            
            
//         },
        
//         //GGT
        
//         {  
            
//             "Reference_id": 17,
//             "Age": "Yes",
//             "ref": "4d"
            
            
//         },{  
            
//             "Reference_id": 17,
//             "Age": "Yes",
//             "ref": "11m"
            
            
//         },{  
            
//             "Reference_id": 17,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 17,
//             "Age": "Yes",
//             "ref": "M 200y"
            
            
//         },{  
            
//             "Reference_id": 17,
//             "Age": "Yes",
//             "ref": "F 200y"
            
            
//         },
        
//         //PROT
        
//         {  
            
//             "Reference_id": 18,
//             "Age": "Yes",
//             "ref": "4d"
            
            
//         },{  
            
//             "Reference_id": 18,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
//         //ALB
        
//         {  
            
//             "Reference_id": 19,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 19,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
        
//         //Ca
        
//         {  
            
//             "Reference_id": 20,
//             "Age": "Yes",
//             "ref": "4d"
            
            
//         },{  
            
//             "Reference_id": 20,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 20,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
        
//         //CCA
        
//         {  
            
//             "Reference_id": 21,
//             "Age": "Yes",
//             "ref": "4d"
            
            
//         },{  
            
//             "Reference_id": 21,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 21,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
        
//         //Phos
        
//         {  
            
//             "Reference_id": 22,
//             "Age": "Yes",
//             "ref": "12d"
            
            
//         },{  
            
//             "Reference_id": 22,
//             "Age": "Yes",
//             "ref": "1.5y"
            
            
//         },{  
            
//             "Reference_id": 22,
//             "Age": "Yes",
//             "ref": "14y"
            
            
//         },{  
            
//             "Reference_id": 22,
//             "Age": "Yes",
//             "ref": "200y"
            
            
//         },
        
//         //MG
        
//         {  
            
//             "Reference_id": 23,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
        
//         //VID2
        
//         {  
            
//             "Reference_id": 24,
//             "Age": "No",
//             "ref": ""
            
            
//         },{  
            
//             "Reference_id": 24,
//             "Age": "No",
//             "ref": ""
            
            
//         },{  
            
//             "Reference_id": 24,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
        
//         //TNHS
        
//         {  
            
//             "Reference_id": 25,
//             "Age": "No",
//             "ref": ""
            
            
//         },
        
//         //NT pro BNP
        
//         {  
            
//             "Reference_id": 26,
//             "Age": "No",
//             "ref": ""
            
            
//         }
//     ]; 

    
//     console.log("Post request received. ");
//     console.log("Data: "+data);  
//     age.insert(data); 
//     const html = `
//     <html>
//         <body>
//             <h1>Age data entered successfully. </h1>
//         </body>
//     </html>`
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(html)
// });


// app.use(cors()); 

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
