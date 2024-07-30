import * as dbexecutor from './dbexecutor.js'; 

export function insert(dataRecord) { 
    console.log("dataRecord: "+dataRecord); 
    var query = getUserInsertQuery(dataRecord); 
    dbexecutor.executeQuery(getUserInsertQuery(dataRecord)); 
}

function getUserInsertQuery(dataRecord) { 
    return `INSERT INTO user (forename, lastname, user_name, email, password) `+ 
    `VALUES ('${dataRecord['forename']}', '${dataRecord['lastname']}', '${dataRecord['user_name']}', '${dataRecord['email']}', '${dataRecord['password']}')`; 
}

export function getAllUser() { 
    var sqlQuery = getQueryAllUser(); 
    var result = dbexecutor.executeQuery(sqlQuery); 
    return result;
}

function getQueryAllUser() { 
    return "SELECT * user FROM tuh.user"; 
}