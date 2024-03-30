import mysql from 'mysql';

const HOST = "localhost"; 
const USER = "root"; 
const PASSWORD = "password";
const DATABASE = "tuh";   

const PATIENT_TABLE_NAME = ""; 
// Add remaining table names 

const CREATE_DATABASE_QUERY = "CREATE DATABASE IF NOT EXISTS "+DATABASE; 
const CREATE_PATIENT_TABLE_QUERY = ""; 
// Add queries to create remaining tables 

export function connect() { 
    var connection = mysql.createConnection({
        host: HOST,
        user: USER, 
        password: PASSWORD
    });
    connection.connect(function(error) {
        if (error) {
            console.error("Error connecting to MySQL database:", error);
            return;
        }
        console.log("Connected to MySQL database");
        createDatabase(connection); 
    });
}

function createDatabase(connection) { 
    connection.query(CREATE_DATABASE_QUERY, function(err, result) { 
        if (err) { 
            console.error(); 
        }
        console.log("Database tuh is available now. "); 
        executeSQLQuery(connection, CREATE_PATIENT_TABLE_QUERY); 
        //  call execute sql query to enter rest of tables 
    });
}

function executeSQLQuery(connection, query) { 
    connection.query(query, function(error, result){ 
        if (error) { 
            console.error(error); 
            return; 
        }
    }); 
}


