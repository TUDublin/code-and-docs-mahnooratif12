import mysql from 'mysql';

const HOST = "localhost"; 
const USER = "root"; 
const PASSWORD = "password";
const DATABASE = "tuh";   

const CREATE_DATABASE_QUERY = "CREATE DATABASE IF NOT EXISTS "+DATABASE; 
const CREATE_PATIENT_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS `patient`("+
    "`id` int NOT NULL AUTO_INCREMENT," + 
    "`lab_no` int NOT NULL," +
    "`ocs_no` int NOT NULL,"+
    "`mrn` varchar(128) NOT NULL,"+
    "`forename` varchar(128) NOT NULL,"+
    "`surname` varchar(128) NOT NULL,"+
    "`dob` varchar(128) NOT NULL,"+
    "`address1` varchar(128) NOT NULL,"+
    "`address2` varchar(128) NOT NULL,"+
    "`address3` varchar(128) NOT NULL,"+
    "`phone_no` varchar(128) NOT NULL,"+
    "PRIMARY KEY (`id`))";
const CREATE_REQUEST_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS `request` ("+
    "`id` int(11) NOT NULL AUTO_INCREMENT,"+
    "`patient_id` int(11) NOT NULL,"+
    "` clinician_id` int(11) NOT NULL,"+
    "`dateofRequest` datetime NOT NULL,"+
    "`timeofRequest` timestamp NOT NULL,"+
    "`dateofReceived` datetime NOT NULL,"+
    "`timeofReceived` timestamp NOT NULL,"+
    "PRIMARY KEY (`id`))";
const CREATE_CLINICIAN_TABLE_QUERY ="CREATE TABLE IF NOT EXISTS `clinician` (" +
    "`id` int(11) NOT NULL AUTO_INCREMENT,"+
    "`clinician_code` varchar(128) NOT NULL,"+
    "`clinician_class` varchar(128) NOT NULL,"+
    "`source_code` varchar(128) NOT NULL,"+
    "`source_class` varchar(128) NOT NULL,"+
    "PRIMARY KEY (`id`))";
const CREATE_Reference_Test_Result_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS `age-reference-test` ("+
    "`id` int(11) NOT NULL,"+
    "`age_id` int(11) NOT NULL,"+
    "`reference_id` varchar(128) NOT NULL,"+
    "PRIMARY KEY (`id`)) ";
const CREATE_RESULT_QUERY = "CREATE TABLE IF NOT EXISTS `result` ("+
    "`id` int(11) NOT NULL,"+
    "`test_result` varchar(255) NOT NULL,"+
    "PRIMARY KEY (`id`))"; 
const CREATE_TEST_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS `test` ("+
    "`id` int(11) NOT NULL,"+
    "`age_reference_id` int(11) NOT NULL,"+
    "`TCL` varchar(45) NOT NULL,"+
    "`TFC` varchar(45) NOT NULL,"+
    "`testnames` varchar(128) NOT NULL,"+
    "`unit` varchar(45) NOT NULL,"+
    "`ageReference` varchar(128) NOT NULL,"+
    "PRIMARY KEY (`id`))";
const CREATE_REFERENCE_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS `reference` ("+
    "`id` int(11) NOT NULL,"+
    "`test_id` int(11) NOT NULL,"+
    "`age_ref` int(11) NOT NULL,"+
    "`ref_range` decimal(10,0) NOT NULL,"+
    "`flaglimitlow` decimal(10,0) NOT NULL,"+
    "`flaglimithigh` decimal(10,0) NOT NULL,"+
    "`alertlimitlow` decimal(10,0) NOT NULL,"+
    "`alertlimithigh` decimal(10,0) NOT NULL,"+
    "PRIMARY KEY (`id`)) ";
const CREATE_Age_Reference_Test_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS `age-reference-test` ("+
    "`id` int(11) NOT NULL,"+
    "`age_id` int(11) NOT NULL,"+
    "`reference_id` varchar(128) NOT NULL,"+
    "PRIMARY KEY (`id`))";
const CREATE_Age_Result_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS `age` ("+
    "`id` int(11) NOT NULL,"+
    "`value` int(11) NOT NULL,"+
    "`period` varchar(128) NOT NULL,"+
    "PRIMARY KEY (`id`))";

// Add queries to create remaining tables 

export function connect() { 
    var connection = mysql.createConnection({
        host: HOST,
        user: USER, 
        password: PASSWORD
    });
    connection.connect(function(error) {
        if (error) {
            console.log("Connect. 4a"); 
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
        connection.end(); 
        createTables(); 
    });
}

function createTables() { 
    var connection = mysql.createConnection({
        host: HOST,
        user: USER, 
        password: PASSWORD, 
        database: DATABASE
    });
    connection.connect(function(error) {
        if (error) {
            console.error("Error connecting to MySQL database:", error);
            return;
        }
        console.log("Connected to MySQL database");
        console.log("Creating patient table if not exists. ")
        executeSQLQuery(connection, CREATE_PATIENT_TABLE_QUERY); 
        console.log("Creating clinician table if not exists. ")
        executeSQLQuery(connection, CREATE_CLINICIAN_TABLE_QUERY); 
        console.log("Creating request table if not exists. ")
        executeSQLQuery(connection, CREATE_REQUEST_TABLE_QUERY); 
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