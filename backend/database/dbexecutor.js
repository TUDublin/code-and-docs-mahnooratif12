import mysql from 'mysql'; 
import deasync from 'deasync'; 

export function executeQuery(sqlQuery) { 
    
    console.log("Executing sql query: "+sqlQuery); 
    var done = false; 
    var queryResult = {}; 
    
    // Configure MySQL connection
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh', 
    }); 

    //Establish MySQL connection
    try { 
        connection.connect(function(err) { 
            if (err) throw err; 
            connection.query(sqlQuery, function(err, result){ 
                if (err) throw err; 
                queryResult = result; 
                connection.end(); 
                done = true; 
            }); 
        }); 
    } catch (err) { 
        console.error("Error: "+err); 
    } finally { 
        
    }
    while(!done) { 
        deasync.sleep(100); 
        console.log("Result: "+queryResult); 
    }
    console.log("Returning result: "+ JSON.stringify(queryResult)); 
    return queryResult; 
}