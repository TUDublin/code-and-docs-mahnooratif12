import * as dbexecutor from './dbexecutor.js';


export function getRequestIdByPatientIdClinicianId(patientId, clinicianId) { 
    var sqlQuery = getRequestIdByPatientIdClinicianIdQuery(patientId, clinicianId); 
    var result = dbexecutor.executeQuery(sqlQuery); 
    return result[0].id; 
}

function getRequestIdByPatientIdClinicianIdQuery(patientId, clinicianId) { 
    return `SELECT id FROM tuh.request ` + 
    `WHERE patient_id = '${patientId}' AND clinician_id = '${clinicianId}'`; 
}

export function insert(dataRecord) { 
    dbexecutor.executeQuery(getRequestInsertQuery(dataRecord));     
}

function getRequestInsertQuery(dataRecord) { 
    return `INSERT INTO request `+
    `(patient_id, clinician_id , dateofRequest, timeofRequest, dateofReceived, timeofReceived) `+ 
    `VALUES (${dataRecord['patient_id']}, ${dataRecord['clinician_id']}, '${dataRecord['dateofRequest']}', '${dataRecord['timeofRequest']}', '${dataRecord['dateofReceived']}', `+
    `'${dataRecord['timeofReceived']}')`; 
}