import mysql from 'mysql';

export function insert() { 

    var refernceData = [
        {"ref_range": "3.7-5.0", "flaglimitlow": 3.7, "flaglimithigh":5.0, "Alertlimitlow":3.0, "Alertlimithigh":5.3}
    ]; 

    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    console.log("refernceData: "+refernceData); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            for (var i=0; i<refernceData.length; i++) { 
                console.log(refernceData[i]); 
                var query = getReferenceInsertQuery(refernceData[i]); 
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

function getReferenceInsertQuery(dataRecord) { 
    return `INSERT INTO reference `+
    `(ref_range, flaglimitlow, flaglimithigh, Alertlimitlow, Alertlimithigh) `+ 
    `VALUES ('${dataRecord['ref_range']}', '${dataRecord['flaglimitlow']}', '${dataRecord['flaglimithigh']}', `+
    `'${dataRecord['Alertlimitlow']}', '${dataRecord['Alertlimithigh']}')`; 
}

