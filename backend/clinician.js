import mysql from 'mysql';

var data = [

    {
        "id:": 1,
        "clinician_code": "MMYX", 
        "clinician_class": "XYZM",
        "source_code": "IMWX",
        "source_class": "LMO"
    },
    {
        "id:": 1,
        "clinician_code": "OPXY", 
        "clinician_class": "AXWM",
        "source_code": "YOURM",
        "source_class": "LOL"    }

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
                var query = getClinicianInsertQuery(data[i]); 
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
    '(id, clinician_code, clinician_class, source_code, source_class' +
    `VALUES (${dataRecord['id']}, ${dataRecord['clinician_code']}, '${dataRecord['clinician_class']}', '${dataRecord['source_code']}', '${dataRecord['source_class']})`; 
}

insert();