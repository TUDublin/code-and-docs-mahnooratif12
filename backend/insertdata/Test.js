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
    return `INSERT INTO test `+
    `(Test_Req_ID, TCL, TFC, testnames, unit) `+ 
    `VALUES (${dataRecord['Test_Req_ID']}, '${dataRecord['TCL']}', '${dataRecord['TFC']}', '${dataRecord['testnames']}', `+
    `'${dataRecord['unit']}')`; 
}

