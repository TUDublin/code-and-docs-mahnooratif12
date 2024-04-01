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
// const CREATE_Reference_Test_Result_TABLE_QUERY = "CREATE TABLE 'tuh'. 'reference_test_result'( `Request_Test_Result_ID` INT NOT NULL,`Test_Request_ID` INT NOT NULL,`Test_ID` INT NOT NULL,`Request_Test_Resultcol` VARCHAR(45) NOT NULL,PRIMARY KEY (`Request_Test_Result_ID`))";
// const CREATE_RESULT_QUERY = "CREATE TABLE `tuh`.`result` (`Result_ID` INT NOT NULL,`Reference_Test_Result_ID` INT NOT NULL,`Test_Result` VARCHAR(255) NOT NULL,PRIMARY KEY (`Result_ID`));"; 
// const CREATE_TEST_TABLE_QUERY = "CREATE TABLE 'tuh'.'test'( `Test_ID` INT NOT NULL,`Test_Req_ID` INT NOT NULL,`TCL` VARCHAR(45) NOT NULL,`TFC` VARCHAR(45) NOT NULL,`testnames` VARCHAR(45) NOT NULL,`unit` VARCHAR(45) NOT NULL,PRIMARY KEY (`Test_ID`))";
// const CREATE_REFERENCE_TABLE_QUERY = "CREATE TABLE `tuh`.`reference` (`Reference_Id` INT NOT NULL,`Test_Id` INT NOT NULL,`age_ref` INT NOT NULL,`ref_range` DECIMAL NOT NULL,`flaglimitlow` DECIMAL NOT NULL,`flaglimithigh` DECIMAL NOT NULL,`Alertlimitlow` DECIMAL NOT NULL,`Alertlimithigh` DECIMAL NOT NULL,`Referencecol` VARCHAR(45) NOT NULL,PRIMARY KEY (`Reference_Id`))";
// const CREATE_Age_Reference_Test_TABLE_QUERY = "CREATE TABLE Age_Reference_Test()";
// const CREATE_Age_Result_TABLE_QUERY = "CREATE TABLE `tuh`.`age_result` ( `Age_result_id` INT NOT NULL,`Reference_id` INT NOT NULL,`Age` INT NOT NULL,`ref` VARCHAR(45) NOT NULL,PRIMARY KEY (`Age_result_id`))";

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