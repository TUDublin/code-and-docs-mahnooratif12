import * as dbexecutor from './dbexecutor.js'; 

export function getResultByRequestId(requestId) { 
    return dbexecutor.executeQuery(`SELECT * FROM tuh.result WHERE request_id = ${requestId}`); 
}

export function insert(dataRecord) { 
    dbexecutor.executeQuery(getResultInsertQuery(dataRecord)); 
}

function getResultInsertQuery(dataRecord) { 
    return `INSERT INTO result (value, request_id, patient_test_id) `+ 
    `VALUES ('${dataRecord['value']}', ${dataRecord['request_id']}, ${dataRecord['patient_test_id']})`; 
}


