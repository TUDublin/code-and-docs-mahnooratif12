import mysql from 'mysql';

export function insert(data) { 
    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    console.debug("data: "+data); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.debug('Connected to MySQL');
            for (var i=0; i<data.length; i++) { 
                console.debug(data[i]); 
                var query = getReference_test_resultInsertQuery(data[i]); 
                console.debug(query); 
                connection.query(query, function(err, result){ 
                    if(err) { 
                        console.error(err); 
                    } else { 
                        console.debug("Data entered! "); 
                    }
                }); 
            }
            
        }
    });
}

function getReference_test_resultInsertQuery(dataRecord) { 
    return `INSERT INTO Reference_Test_Result `+
    `(Test_Request_ID, Test_ID, Request_Test_Resultcol) `+ 
    `VALUES (${dataRecord['Test_Request_ID']}, ${dataRecord['Test_ID']}, '${dataRecord['Request_Test_Resultcol']}',)`; 
}

