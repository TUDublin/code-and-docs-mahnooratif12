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

export function getAllPatient() { 
    var sqlQuery = getQueryAllPatient(); 
    var result = dbexecutor.executeQuery(sqlQuery); 
    return result;
}

function getQueryAllPatient() { 
    return `SELECT req.id as id, patient.id as patient_id, clinician.id as clinician_id, ` + 
        `lab_no, ocs_no, mrn, forename, surname, dob, gender, age, address1, address2, address3, phone_no, `+
        `clinician_code, clinician_class, source_code, source_class, `+ 
        `dateofRequest, timeofRequest, dateofReceived, timeofReceived `+
         `FROM tuh.request as req `+
        `LEFT JOIN tuh.patient as patient on req.patient_id = patient.id ` + 
        `LEFT JOIN tuh.clinician as clinician on req.clinician_id = clinician.id `; 
}