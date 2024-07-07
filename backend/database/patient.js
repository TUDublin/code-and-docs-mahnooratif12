import mysql from 'mysql';

export function insert(dataRecord) { 
    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    console.log("data: "+dataRecord); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            console.log(dataRecord); 
            var query = getPatientInsertQuery(dataRecord); 
            console.log(query); 
            connection.query(query, function(err, result){ 
                if(err) { 
                    console.log(err); 
                } else { 
                    console.log("Data entered! "); 
                }
            }); 
        }
    });
}

function getPatientInsertQuery(dataRecord) { 
    return `INSERT INTO patient `+
    `(lab_no, ocs_no, mrn, forename, surname, dob, gender, age, address1, address2, address3, phone_no) `+ 
    `VALUES (${dataRecord['lab_no']}, ${dataRecord['ocs_no']}, '${dataRecord['mrn']}', '${dataRecord['forename']}', '${dataRecord['surname']}', `+
    `'${dataRecord['dob']}', '${dataRecord['gender']}', '${dataRecord['age']}','${dataRecord['address1']}', '${dataRecord['address2']}', '${dataRecord['address3']}', '${dataRecord['phone_no']}')`; 
}

