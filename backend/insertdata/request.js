import mysql from 'mysql';

export function insert(data) { 
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
                var query = getPatientInsertQuery(data[i]); 
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

function getPatientInsertQuery(dataRecord) { 
    return `INSERT INTO patient `+
    `(patient_id, clinician_id , dateofRequest, timeofRequest, dateofReceived, timeofReceived) `+ 
    `VALUES (${dataRecord['patient_id']}, ${dataRecord['clinician_id']}, '${dataRecord['dateofRequest']}', '${dataRecord['timeofRequest']}', '${dataRecord['dateofReceived']}', `+
    `'${dataRecord['timeofReceived']}',)`; 
}

