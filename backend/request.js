import mysql from 'mysql';

var data = [

    {
        "id" : 1,
        "patient_id": 12,
        "clinician_id" :431,
        "dateofRequest": "14/03/2024",
        "timeofRequest": "12:00:00",
        "dateofReceived": "20/03/2024",
        "timeofReceived": "06:00:00"
    },
    {
        "id" : 2,
        "patient_id": 13,
        "clinician_id" :431,
        "dateofRequest": "15/03/2024",
        "timeofRequest": "12:30:00",
        "dateofReceived": "21/03/2024",
        "timeofReceived": "06:30:00"
    }

]

function insert() { 
    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            for (var i=0; i<data.length; i++) { 
                console.log(data[i]); 
                var query = getRequestInsertQuery(data[i]); 
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




function getRequestInsetQuery(dataRecord) {
    return 'INSERT INTO  request' + 
    '(id, patient_id, clinician_id, dateofRequest, timeofRequest, dateofReceived, timeofReceived)' +
    `VALUES (${dataRecord['id']}, ${dataRecord['patient_id']}, '${dataRecord['clinician_id']}', '${dataRecord['dateofRequest']}', '${dataRecord['timeofRequest']}', `+
    `'${dataRecord['dateofReceived']}', '${dataRecord['timeofReceived']})`; 
}

insert();