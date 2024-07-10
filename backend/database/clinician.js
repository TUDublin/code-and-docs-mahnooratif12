import * as dbexecutor from './dbexecutor.js'; 

export function insert(dataRecord) { 
    dbexecutor.executeQuery(getClinicianInsertQuery(dataRecord)); 
}

function getClinicianInsertQuery(dataRecord) { 
    return `INSERT INTO clinician `+
    `(clinician_code, clinician_class, source_code, source_class) `+ 
    `VALUES ('${dataRecord['clinician_code']}', '${dataRecord['clinician_class']}', '${dataRecord['source_code']}', '${dataRecord['source_class']}')`; 
}

export function getClinicianIdByCode(clinician_code) { 
    var sqlQuery = getQueryClinicianIdByCode(clinician_code); 
    var result = dbexecutor.executeQuery(sqlQuery); 
    return result[0].id; 
}

function getQueryClinicianIdByCode(clinician_code) { 
    return `SELECT id FROM clinician WHERE clinician_code='${clinician_code}'`; 
}