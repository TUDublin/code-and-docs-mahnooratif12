import mysql from 'mysql';

export function insert() { 
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
                var query = getReferenceInsertQuery(data[i]); 
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
    return `INSERT INTO Reference `+
    `(Test_Id, age_ref, ref_range, flaglimitlow, flaglimithigh, Alertlimitlow, Alertlimithigh) `+ 
    `VALUES (${dataRecord['Test_Id']}, '${dataRecord['age_ref']}', '${dataRecord['ref_range']}', '${dataRecord['flaglimitlow']}', '${dataRecord['flaglimithigh']}', `+
    `'${dataRecord['Alertlimitlow']}', '${dataRecord['Alertlimithigh']}')`; 
}

