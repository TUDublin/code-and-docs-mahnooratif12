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
                var query = getresultInsertQuery(data[i]); 
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

function getresultInsertQuery(dataRecord) { 
    return `INSERT INTO Result `+
    `(Reference_Test_Result_ID, Test_Result,) `+ 
    `VALUES (${dataRecord['Reference_Test_Result_ID']}, ${dataRecord['Test_Result']},)`; 
}

