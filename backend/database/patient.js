import * as dbexecutor from './dbexecutor.js'; 

export function insert(dataRecord) { 
    dbexecutor.executeQuery(getPatientInsertQuery(dataRecord)); 
}

function getPatientInsertQuery(dataRecord) { 
    return `INSERT INTO patient (lab_no, ocs_no, mrn, forename, surname, dob, gender, age, address1, address2, address3, phone_no) `+ 
    `VALUES (${dataRecord['lab_no']}, ${dataRecord['ocs_no']}, '${dataRecord['mrn']}', '${dataRecord['forename']}', '${dataRecord['surname']}', `+
    `'${dataRecord['dob']}', '${dataRecord['gender']}', '${dataRecord['age']}','${dataRecord['address1']}', '${dataRecord['address2']}', ` +
    `'${dataRecord['address3']}', '${dataRecord['phone_no']}')`; 
}

export function getPatientIdByMRN(mrn) { 

    var sqlQuery = getQueryPatientIdByMRN(mrn); 
    var result = dbexecutor.executeQuery(sqlQuery); 
    return result[0].id; 
}

function getQueryPatientIdByMRN(mrn) { 
    return `SELECT id FROM patient WHERE mrn=${mrn}`; 
}