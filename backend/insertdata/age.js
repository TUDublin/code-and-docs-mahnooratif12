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
                var query = getageInsertQuery(data[i]); 
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


function getageInsertQuery(dataRecord) { 
    return `INSERT INTO age `+
    `(Reference_id, Age, ref) `+ 
    `VALUES (${dataRecord['Reference_id']}, '${dataRecord['Age']}', '${dataRecord['ref']}')`; 
}

