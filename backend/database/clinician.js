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
            var query = getClinicianInsertQuery(dataRecord); 
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

function getClinicianInsertQuery(dataRecord) { 
    return `INSERT INTO clinician `+
    `(clinician_code, clinician_class, source_code, source_class) `+ 
    `VALUES ('${dataRecord['clinician_code']}', '${dataRecord['clinician_class']}', '${dataRecord['source_code']}', '${dataRecord['source_class']}')`; 
}

