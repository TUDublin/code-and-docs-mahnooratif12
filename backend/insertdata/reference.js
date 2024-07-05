import mysql from 'mysql';

export function insert() { 

    var refernceData = [
        {"id": 1," ref_range": "3.7-5.0", "flaglimitlow": 3.7, "flaglimithigh":5.0, "Alertlimitlow":3.0, "Alertlimithigh":5.3},
        { "id": 2,"ref_range": "3.7 - 5.0","flaglimitlow": 3.7,"flaglimithigh": 5.0,"Alertlimitlow": 3.0,"Alertlimithigh": 5.3},
        {"id": 3, "ref_range": "4.1 - 5.3","flaglimitlow": 4.1,"flaglimithigh":5.3,"Alertlimitlow":3.0,"Alertlimithigh":5.3}, 
        {"id": 4,"ref_range": "3.4 - 5.0","flaglimitlow": 3.4,"flaglimithigh":5.0,"Alertlimitlow":3.0,"Alertlimithigh":5.3},
        {"id": 5,"ref_range": "3.5 - 5.0","flaglimitlow": 3.5,"flaglimithigh":5.0,"Alertlimitlow":2.8,"Alertlimithigh":5.3},
        {"id": 6,"ref_range": "1.5-6.5","flaglimitlow": 1.5,"flaglimithigh":6.5,"Alertlimitlow":1.5,"Alertlimithigh":6.5}, 
        {"id": 7,"ref_range": "2.0 - 6.5","flaglimitlow": 2.0,"flaglimithigh":6.5,"Alertlimitlow":2.0,"Alertlimithigh":6.5},
        {"id": 8,"ref_range": "2.0 - 7.0","flaglimitlow": 2.0,"flaglimithigh":7.0,"Alertlimitlow":0,"Alertlimithigh":11.0},
        {"id": 9,"ref_range": "27-77","flaglimitlow": 27,"flaglimithigh":77,"Alertlimitlow":0,"Alertlimithigh":100},
        {"id": 10,"ref_range": "14 - 35","flaglimitlow": 14,"flaglimithigh":34,"Alertlimitlow":0,"Alertlimithigh":100}, 
        {"id": 11,"ref_range": "15 - 31","flaglimitlow": 15,"flaglimithigh":31,"Alertlimitlow":0,"Alertlimithigh":100}, 
        {"id": 12,"ref_range": "23 - 37","flaglimitlow": 23,"flaglimithigh":37,"Alertlimitlow":0,"Alertlimithigh":100}, 
        {"id": 13,"ref_range": "25 - 42","flaglimitlow": 25,"flaglimithigh":42,"Alertlimitlow":0,"Alertlimithigh": 100,}, 
        {"id": 14,"ref_range": "30 - 47","flaglimitlow": 30,"flaglimithigh":47,"Alertlimitlow":0,"Alertlimithigh":100 }, 
        {"id": 15,"ref_range": "29 - 56","flaglimitlow": 29,"flaglimithigh":56,"Alertlimitlow":0,"Alertlimithigh":100}, 
        {"id": 16,"ref_range": "39 - 60","flaglimitlow": 39,"flaglimithigh":60,"Alertlimitlow":0,"Alertlimithigh":100}, 
        {"id": 17,"ref_range": "40 - 68","flaglimitlow": 40,"flaglimithigh":68,"Alertlimitlow":0,"Alertlimithigh":100}, 
        {"id": 18,"ref_range": "59 - 104","flaglimitlow": 59,"flaglimithigh":104,"Alertlimitlow":0,"Alertlimithigh":200}, 
        {"id": 19,"ref_range": "45 - 85","flaglimitlow": 45,"flaglimithigh":84,"Alertlimitlow":0,"Alertlimithigh":200},
        {"id": 20,"ref_range": "135-145","flaglimitlow": 135,"flaglimithigh":145,"Alertlimitlow":128,"Alertlimithigh":149}, 
        {"id": 21,"ref_range": "0 - 5","flaglimitlow": 0,"flaglimithigh":5,"Alertlimitlow":0,"Alertlimithigh":300}, 
        {"id": 22,"ref_range": "< 5","flaglimitlow": 0,"flaglimithigh":5,"Alertlimitlow":2.0,"Alertlimithigh":8.0}, 
        {"id": 23,"ref_range": "<1.7 (fasting)","flaglimitlow": 0,"flaglimithigh":1.7,"Alertlimitlow":0.0,"Alertlimithigh":8.0}, 
        {"id": 24,"ref_range": "<3.0","flaglimitlow": 0,"flaglimithigh":3,"Alertlimitlow":0.1,"Alertlimithigh":6.0},
        {"id": 25,"ref_range": "M > 1.0","flaglimitlow": 0,"flaglimithigh":1.0,"Alertlimitlow":0.5,"Alertlimithigh":99},
        {"id": 26,"ref_range": "F > 1.2","flaglimitlow": 0,"flaglimithigh":1.2,"Alertlimitlow":0.5,"Alertlimithigh":99},
        {"id": 27,"ref_range": "<3.8","flaglimitlow": 0,"flaglimithigh":3.8,"Alertlimitlow":0,"Alertlimithigh":9},
        {"id": 28,"ref_range": "11 - 32","flaglimitlow": 11,"flaglimithigh":32,"Alertlimitlow":11,"Alertlimithigh":32},
        {"id": 29,"ref_range": "11 - 29","flaglimitlow": 11,"flaglimithigh":29,"Alertlimitlow":11,"Alertlimithigh":29},
        {"id": 30,"ref_range": "11 - 26","flaglimitlow": 11,"flaglimithigh":26,"Alertlimitlow": 11,"Alertlimithigh":26},
        {"id": 31,"ref_range": "12 - 23","flaglimitlow": 12,"flaglimithigh":23,"Alertlimitlow":12,"Alertlimithigh":23},
        {"id": 32,"ref_range": "12 - 22","flaglimitlow": 12,"flaglimithigh":22,"Alertlimitlow": 8,"Alertlimithigh": 26},
        {"id": 33,"ref_range": "0.7 - 15.2","flaglimitlow": 0.7,"flaglimithigh":15.2,"Alertlimitlow":0.70,"Alertlimithigh":15.2},
        {"id": 34,"ref_range": "0.72 - 11.0","flaglimitlow": 0.72,"flaglimithigh":11.0,"Alertlimitlow":0.72,"Alertlimithigh":11.0},
        {"id": 35,"ref_range": "0.73 - 8.35","flaglimitlow": 0.73,"flaglimithigh":8.35,"Alertlimitlow":0.73,"Alertlimithigh":8.35},
        {"id": 36,"ref_range": "0.70 - 5.97","flaglimitlow": 0.70,"flaglimithigh":8.35,"Alertlimitlow":0.73,"Alertlimithigh":8.35},
        {"id": 37,"ref_range": "0.60 - 4.84","flaglimitlow": 0.60,"flaglimithigh":4.85,"Alertlimitlow":0.60,"Alertlimithigh":6.85},
        {"id": 38,"ref_range": "0.51 - 4.30","flaglimitlow": 0.51,"flaglimithigh":4.30,"Alertlimitlow":0.51,"Alertlimithigh":4.30},
        {"id": 39,"ref_range": "0.3 - 4.2","flaglimitlow": 0.3,"flaglimithigh":4.20,"Alertlimitlow":0.2, "Alertlimithigh":6.0},
        {"id": 40,"ref_range": "47 - 75","flaglimitlow": 45,"flaglimithigh":75,"Alertlimitlow":45,"Alertlimithigh":75},
        {"id": 41,"ref_range": "65 - 85","flaglimitlow": 65,"flaglimithigh":85,"Alertlimitlow":50,"Alertlimithigh":90},
        {"id": 42,"ref_range": "30 - 50","flaglimitlow": 30,"flaglimithigh":50,"Alertlimitlow":25,"Alertlimithigh":55},
        {"id": 43,"ref_range": "35 - 50","flaglimitlow": 35,"flaglimithigh":50,"Alertlimitlow":25,"Alertlimithigh":55},
        {"id": 44,"ref_range": "< 137","flaglimitlow": 0,"flaglimithigh":137,"Alertlimitlow":0,"Alertlimithigh":137},
        {"id": 45,"ref_range": "<200","flaglimitlow": 0,"flaglimithigh":200,"Alertlimitlow":0,"Alertlimithigh":200},
        {"id": 46,"ref_range": "<17","flaglimitlow": 0,"flaglimithigh":17,"Alertlimitlow":0.1,"Alertlimithigh":240},
        {"id": 47,"ref_range": "<250","flaglimitlow": 0,"flaglimithigh":250,"Alertlimitlow": 0,"Alertlimithigh":250},
        {"id": 48,"ref_range": "<231","flaglimitlow": 0,"flaglimithigh":231,"Alertlimitlow":0,"Alertlimithigh":231},
        {"id": 49,"ref_range": "<449","flaglimitlow": 0,"flaglimithigh":449,"Alertlimitlow":0,"Alertlimithigh":1000},
        {"id": 50,"ref_range": "<462","flaglimitlow": 0,"flaglimithigh":462,"Alertlimitlow":0,"Alertlimithigh":1000},
        {"id": 51,"ref_range": "<281","flaglimitlow": 0,"flaglimithigh":281,"Alertlimitlow":0,"Alertlimithigh":1000},   
        {"id": 52,"ref_range": "<269","flaglimitlow": 0,"flaglimithigh":269,"Alertlimitlow":0,"Alertlimithigh":1000},   
        {"id": 53,"ref_range": "300","flaglimitlow": 0,"flaglimithigh":300,"Alertlimitlow":0,"Alertlimithigh":1000},   
        {"id": 54,"ref_range": "<390","flaglimitlow": 0,"flaglimithigh":390,"Alertlimitlow":0,"Alertlimithigh":1000},   
        {"id": 55,"ref_range": "<187","flaglimitlow": 0,"flaglimithigh":187,"Alertlimitlow":0,"Alertlimithigh":1000},   
        {"id": 56,"ref_range": "40 - 130","flaglimitlow": 40,"flaglimithigh":135,"Alertlimitlow":0,"Alertlimithigh":1000},   
        {"id": 57,"ref_range": "35 - 105","flaglimitlow": 35,"flaglimithigh":105,"Alertlimitlow":0,"Alertlimithigh":1000},  
        {"id": 58,"ref_range": "5 - 30","flaglimitlow": 5,"flaglimithigh":50,"Alertlimitlow":0,"Alertlimithigh":100},   
        {"id": 59,"ref_range": "<45","flaglimitlow": 0,"flaglimithigh":45,"Alertlimitlow":0,"Alertlimithigh":490},   
        {"id": 60,"ref_range": "<35", "flaglimitlow": 35,"flaglimithigh":0,"Alertlimitlow":0,"Alertlimithigh":490},  
        {"id": 61,"ref_range": "<120", "flaglimitlow": 0,"flaglimithigh":120,"Alertlimitlow":0,"Alertlimithigh":120},   
        {"id": 62,"ref_range": "<65", "flaglimitlow": 0,"flaglimithigh":65,"Alertlimitlow":0,"Alertlimithigh":100},   
        {"id": 63,"ref_range": "<25", "flaglimitlow": 0,"flaglimithigh":25,"Alertlimitlow":0,"Alertlimithigh":100},   
        {"id": 64,"ref_range": "<60","flaglimitlow": 0,"flaglimithigh":60,"Alertlimitlow":0,"Alertlimithigh":500},   
        {"id": 65,"ref_range": "<40","flaglimitlow": 0,"flaglimithigh":40,"Alertlimitlow":0,"Alertlimithigh":500},  
        {"id": 66,"ref_range": "45 - 75","flaglimitlow": 45,"flaglimithigh":75,"Alertlimitlow":45,"Alertlimithigh":75},
        {"id": 67,"ref_range": "65 - 85","flaglimitlow": 65,"flaglimithigh":85,"Alertlimitlow":50,"Alertlimithigh":90},        
        {"id": 68,"ref_range": "30 - 50","flaglimitlow": 30,"flaglimithigh":50,"Alertlimitlow":25,"Alertlimithigh":55},   
        {"id": 69,"ref_range": "35 - 50","flaglimitlow": 35,"flaglimithigh":50,"Alertlimitlow":25,"Alertlimithigh":55},
        {"id": 71,"ref_range": "1.48 - 2.68","flaglimitlow": 1.48,"flaglimithigh":2.68,"Alertlimitlow":1.48,"Alertlimithigh":2.68},   
        {"id": 72,"ref_range": "2.25 - 2.70","flaglimitlow": 2.25,"flaglimithigh":2.70,"Alertlimitlow":2.25,"Alertlimithigh":2.70},   
        {"id": 73,"ref_range": "2.15 - 2.55","flaglimitlow": 2.15,"flaglimithigh":2.55,"Alertlimitlow":1.80,"Alertlimithigh":2.85},
        {"id": 74,"ref_range": "1.48 - 2.68","flaglimitlow": 1.48,"flaglimithigh":2.68,"Alertlimitlow":1.48,"Alertlimithigh":2.68},   
        {"id": 75,"ref_range": "2.25 - 2.70","flaglimitlow": 2.25,"flaglimithigh":2.70,"Alertlimitlow":2.25,"Alertlimithigh":2.70},
        {"id": 76,"ref_range": "2.15 - 2.55","flaglimitlow": 2.15,"flaglimithigh":2.55,"Alertlimitlow":1.80,"Alertlimithigh":2.85},
        {"id": 77,"ref_range": "1.6 - 2.9","flaglimitlow": 1.6,"flaglimithigh":2.9,"Alertlimitlow":1.6,"Alertlimithigh":2.9},
        {"id": 78,"ref_range": "1.2 - 2.2","flaglimitlow": 1.2,"flaglimithigh":2.2,"Alertlimithigh":2.2},
        {"id": 79,"ref_range": "0.9 - 1.9","flaglimitlow": 0.9,"flaglimithigh":1.9,"Alertlimitlow":0.9,"Alertlimithigh":1.9}, 
        {"id": 80,"ref_range": "0.8 - 1.4", "flaglimitlow": 0.8,"flaglimithigh":1.4,"Alertlimitlow":0.5,"Alertlimithigh":3.0}, 
        {"id": 81,"ref_range": "0.1 - 1.00", "flaglimitlow": 0.7,"flaglimithigh": 1,"Alertlimitlow": 0.5,"Alertlimithigh":1.2},
        {"id": 82,"ref_range": " <30 - deficient \n 30-50 insufficient \n >50 normal ", "flaglimitlow": 0,"flaglimithigh":0,"Alertlimitlow": 0,"Alertlimithigh":0},
        {"id": 83,"ref_range": " <14 ","flaglimitlow": 0,"flaglimithigh": 14,"Alertlimitlow": 0,"Alertlimithigh": 50},
        {"id": 84,"ref_range": " <300 ", "flaglimitlow": 0,"flaglimithigh": 300,"Alertlimitlow": 10,"Alertlimithigh": 3000}



    ]; 

    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    console.log("refernceData: "+refernceData); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            for (var i=0; i<refernceData.length; i++) { 
                console.log(refernceData[i]); 
                var query = getReferenceInsertQuery(refernceData[i]); 
                console.log(query); 
                connection.query(query, function(err, result){ 
                    if(err) { 
                        console.log(err); 
                    } else { 
                        console.log("Data entered! "); 
                    }
                }); 
            }
            
        }
    });
}

function getReferenceInsertQuery(dataRecord) { 
    return `INSERT INTO reference `+
    `(ref_range, flaglimitlow, flaglimithigh, Alertlimitlow, Alertlimithigh) `+ 
    `VALUES ('${dataRecord['ref_range']}', '${dataRecord['flaglimitlow']}', '${dataRecord['flaglimithigh']}', `+
    `'${dataRecord['Alertlimitlow']}', '${dataRecord['Alertlimithigh']}')`; 
}

