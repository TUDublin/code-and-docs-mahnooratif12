import mysql from 'mysql';

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
    `(lab_no, ocs_no, mrn, forename, surname, dob, address1, address2, address3, phone_no) `+ 
    `VALUES (${dataRecord['lab_no']}, ${dataRecord['ocs_no']}, '${dataRecord['mrn']}', '${dataRecord['forename']}', '${dataRecord['surname']}', `+
    `'${dataRecord['dob']}', '${dataRecord['address1']}', '${dataRecord['address2']}', '${dataRecord['address3']}', ${dataRecord['phone_no']})`; 
}

insert(); 

