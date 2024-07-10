import * as dbexecutor from './dbexecutor.js';

export function insert(dataRecord) { 
    dbexecutor.executeQuery(getRequestInsertQuery(dataRecord));     
}

function getRequestInsertQuery(dataRecord) { 
    return `INSERT INTO request `+
    `(patient_id, clinician_id , dateofRequest, timeofRequest, dateofReceived, timeofReceived) `+ 
    `VALUES (${dataRecord['patient_id']}, ${dataRecord['clinician_id']}, '${dataRecord['dateofRequest']}', '${dataRecord['timeofRequest']}', '${dataRecord['dateofReceived']}', `+
    `'${dataRecord['timeofReceived']}')`; 
}