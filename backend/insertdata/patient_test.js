import mysql from 'mysql';

export function insert(data) { 

    var data = [
        {"id": 1, "age_id":0, "reference_id":0, "age_reference":false, "TCL":"RP","TFC":"Na","test_names":"Sodium", "unit":"mmol/L"},
        {"id": 2, "age_id":4, "reference_id":1, "age_reference":true, "TCL":"RP","TFC":"K","test_names":"Potassium", "unit":"mmol/L"},
        {"id": 3, "age_id":44, "reference_id":3, "age_reference":true, "TCL":"RP","TFC":"K","test_names":"Potassium", "unit":"mmol/L"},
        {"id": 4, "age_id":54, "reference_id":4, "age_reference":true, "TCL":"RP","TFC":"K","test_names":"Potassium", "unit":"mmol/L"},
        {"id": 5, "age_id":64, "reference_id":5, "age_reference":true, "TCL":"RP","TFC":"K","test_names":"Potassium", "unit":"mmol/L"},

        {"id": 6, "age_id":4, "reference_id":6, "age_reference":true, "TCL":"RP","TFC":"Urea","test_names":"Urea", "unit":"mmol/L"},
        {"id": 7, "age_id":56, "reference_id":7, "age_reference":true, "TCL":"RP","TFC":"Urea","test_names":"Urea", "unit":"mmol/L"},
        {"id": 8, "age_id":64, "reference_id":8, "age_reference":true, "TCL":"RP","TFC":"Urea","test_names":"Urea", "unit":"mmol/L"},

        {"id": 9, "age_id":32, "reference_id":9, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 10, "age_id":41, "reference_id":10, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 11, "age_id":44, "reference_id":11, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 12, "age_id":46, "reference_id":12, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 13, "age_id":48, "reference_id":13, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 14, "age_id":50, "reference_id":14, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 15, "age_id":52, "reference_id":15, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 16, "age_id":54, "reference_id":16, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 17, "age_id":56, "reference_id":17, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 18, "age_id":64, "reference_id":18, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},
        {"id": 19, "age_id":64, "reference_id":19, "age_reference":true, "TCL":"RP","TFC":"Crea","test_names":"Creatinine", "unit":"umol/L"},

        {"id": 20, "age_id":0, "reference_id":21, "age_reference":false, "TCL":"CRP","TFC":"CRP","test_names":"C Reactive Protein", "unit":"mg/L"},
        {"id": 21, "age_id":0, "reference_id":22, "age_reference":false, "TCL":"FLP","TFC":"Chol","test_names":"Cholesterol", "unit":"mmol/L"},
        {"id": 22, "age_id":0, "reference_id":23, "age_reference":false, "TCL":"FLP","TFC":"TRIG","test_names":"Triglceride", "unit":"mmol/L"},
        {"id": 23, "age_id":0, "reference_id":24, "age_reference":false, "TCL":"FLP","TFC":"LDL","test_names":"Low Density Lipoprotein - Cholestrol", "unit":"mmol/L"},
        {"id": 24, "age_id":0, "reference_id":25, "age_reference":false, "TCL":"FLP","TFC":"HDL","test_names":"High Density Lipoprotein - Cholesterol", "unit":"mmol/L"},
        {"id": 25, "age_id":0, "reference_id":26, "age_reference":false, "TCL":"FLP","TFC":"HDL","test_names":"High Density Lipoprotein - Cholesterol", "unit":"mmol/L"},
        {"id": 26, "age_id":0, "reference_id":27, "age_reference":false, "TCL":"FLP","TFC":"nonH","test_names":"nonHigh Density Lipoprotein - Cholesterol", "unit":"mmol/L"},

        {"id": 27, "age_id":5, "reference_id":28, "age_reference":true, "TCL":"TFT","TFC":"FT4","test_names":"Free thyroxine", "unit":"pmol/L"},
        {"id": 28, "age_id":33, "reference_id":29, "age_reference":true, "TCL":"TFT","TFC":"FT4","test_names":"Free thyroxine", "unit":"pmol/L"},
        {"id": 29, "age_id":41, "reference_id":30, "age_reference":true, "TCL":"TFT","TFC":"FT4","test_names":"Free thyroxine", "unit":"pmol/L"},
        {"id": 30, "age_id":47, "reference_id":31, "age_reference":true, "TCL":"TFT","TFC":"FT4","test_names":"Free thyroxine", "unit":"pmol/L"},
        {"id": 31, "age_id":64, "reference_id":32, "age_reference":true, "TCL":"TFT","TFC":"FT4","test_names":"Free thyroxine", "unit":"pmol/L"},

        {"id": 32, "age_id":5, "reference_id":33, "age_reference":true, "TCL":"TFT","TFC":"TSH","test_names":"Thyroid Stimulating Hormone", "unit":"mU/L"},
        {"id": 33, "age_id":33, "reference_id":34, "age_reference":true, "TCL":"TFT","TFC":"TSH","test_names":"Thyroid Stimulating Hormone", "unit":"mU/L"},
        {"id": 34, "age_id":41, "reference_id":35, "age_reference":true, "TCL":"TFT","TFC":"TSH","test_names":"Thyroid Stimulating Hormone", "unit":"mU/L"},
        {"id": 35, "age_id":47, "reference_id":36, "age_reference":true, "TCL":"TFT","TFC":"TSH","test_names":"Thyroid Stimulating Hormone", "unit":"mU/L"},
        {"id": 36, "age_id":52, "reference_id":37, "age_reference":true, "TCL":"TFT","TFC":"TSH","test_names":"Thyroid Stimulating Hormone", "unit":"mU/L"},
        {"id": 37, "age_id":62, "reference_id":38, "age_reference":true, "TCL":"TFT","TFC":"TSH","test_names":"Thyroid Stimulating Hormone", "unit":"mU/L"},
        {"id": 38, "age_id":64, "reference_id":39, "age_reference":true, "TCL":"TFT","TFC":"TSH","test_names":"Thyroid Stimulating Hormone", "unit":"mU/L"},

        {"id": 39, "age_id":4, "reference_id":40, "age_reference":true, "TCL":"LP","TFC":"PROT","test_names":"Total Protein", "unit":"g/L"},
        {"id": 40, "age_id":64, "reference_id":41, "age_reference":true, "TCL":"LP","TFC":"PROT","test_names":"Total Protein", "unit":"g/L"},

        {"id": 41, "age_id":56, "reference_id":42, "age_reference":true, "TCL":"LP","TFC":"ALB","test_names":"Albumin", "unit":"g/L"},
        {"id": 42, "age_id":64, "reference_id":43, "age_reference":true, "TCL":"LP","TFC":"ALB","test_names":"Albumin", "unit":"g/L"},

        {"id": 43, "age_id":2, "reference_id":44, "age_reference":true, "TCL":"LP","TFC":"TBIL","test_names":"Total Bilirubin", "unit":"umol/L"},
        {"id": 44, "age_id":5, "reference_id":45, "age_reference":true, "TCL":"LP","TFC":"TBIL","test_names":"Total Bilirubin ", "unit":"umol/L"},
        {"id": 45, "age_id":64, "reference_id":46, "age_reference":true, "TCL":"LP","TFC":"TBIL","test_names":"Total Bilirubin ", "unit":"umol/L"},

        {"id": 46, "age_id":1, "reference_id":46, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase ", "unit":"IU/L"},
        {"id": 47, "age_id":5, "reference_id":47, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase ", "unit":"IU/L"},
        {"id": 48, "age_id":37, "reference_id":48, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase  ", "unit":"IU/L"},
        {"id": 49, "age_id":43, "reference_id":49, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase  ", "unit":"IU/L"},
        {"id": 50, "age_id":45, "reference_id":50, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase ", "unit":"IU/L"},
        {"id": 51, "age_id":48, "reference_id":51, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase  ", "unit":"IU/L"},
        {"id": 52, "age_id":60, "reference_id":52, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase  ", "unit":"IU/L"},
        {"id": 53, "age_id":60, "reference_id":53, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase ", "unit":"IU/L"},
        {"id": 54, "age_id":64, "reference_id":54, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase ", "unit":"IU/L"},
        {"id": 55, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase  ", "unit":"IU/L"},
        
        // {"id": 56, "age_id":62, "reference_id":56, "age_reference":true, "TCL":"LP","TFC":"ALKP","test_names":"Alkaline Phosphatase  ", "unit":"IU/L"},

        {"id": 57, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"ALT","test_names":" Alanine Aminotransferase", "unit":"IU/L"},
        {"id": 58, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"ALT","test_names":"Alanine Aminotransferase ", "unit":"IU/L"},
        {"id": 59, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"ALT","test_names":"Alanine Aminotransferase ", "unit":"IU/L"},

        {"id": 60, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"GGT","test_names":"Gamma-Glutamyl transferase  ", "unit":"IU/L"},
        {"id": 61, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"GGT","test_names":"Gamma-Glutamyl transferase ", "unit":"IU/L"},
        {"id": 62, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"GGT","test_names":"Gamma-Glutamyl transferase ", "unit":"IU/L"},
        {"id": 63, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"GGT","test_names":"Gamma-Glutamyl transferase ", "unit":"IU/L"},
        {"id": 65, "age_id":64, "reference_id":55, "age_reference":true, "TCL":"LP","TFC":"GGT","test_names":"Gamma-Glutamyl transferase ", "unit":"IU/L"},
    ];        

    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    console.log("data: "+data); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            for (var i=0; i<data.length; i++) { 
                console.log(data[i]); 
                var query = getTestInsertQuery(data[i]); 
                console.log(query); 
                connection.query(query, function(err, result){ 
                    if(err) { 
                        console.log(err); 
                    } else { 
                        console.log("Data entered! "); 
                    }
                }); 
            }
            
        }
    });
}

function getTestInsertQuery(dataRecord) { 
    return `INSERT INTO patient_test `+
    `(id, age_id,reference_id, age_reference,TCL,TFC, test_name, unit) `+ 
    `VALUES (${dataRecord['id']}, ${dataRecord['age_id']}, ${dataRecord['reference_id']}, ${dataRecord['age_reference']},'${dataRecord['TCL']}', '${dataRecord['TFC']}', '${dataRecord['test_names']}', `+
    `'${dataRecord['unit']}')`; 
}

