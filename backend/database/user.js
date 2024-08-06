import * as dbexecutor from './dbexecutor.js'; 

export function insert(dataRecord) { 
    console.log("dataRecord: "+dataRecord); 
    var query = getUserInsertQuery(dataRecord); 
    dbexecutor.executeQuery(getUserInsertQuery(dataRecord)); 
}

function getUserInsertQuery(dataRecord) { 
    return `INSERT INTO user (forename, lastname, username, email, password) `+ 
    `VALUES ('${dataRecord['forename']}', '${dataRecord['lastname']}', '${dataRecord['username']}', '${dataRecord['email']}', '${dataRecord['password']}')`; 
}

export function getAllUser() { 
    return dbexecutor.executeQuery(getQueryAllUser());     
}

function getQueryAllUser() { 
    return "SELECT * FROM tuh.user"; 
}