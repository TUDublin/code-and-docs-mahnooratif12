import mysql from 'mysql';

export function insert() { 

    var ageData = [
        {"id": 1, "value": "1day", "period": 1}, 
        {"id": 2, "value": "2day", "period": 2}, 
        {"id": 3, "value": "3day", "period": 3}, 
        {"id": 4, "value": "4day", "period": 4}, 
        {"id": 5, "value": "5day", "period": 5}, 
        {"id": 6, "value": "6day", "period": 6}, 
        {"id": 7, "value": "7day", "period": 7}, 
        {"id": 8, "value": "8day", "period": 8}, 
        {"id": 9, "value": "9day", "period": 9}, 
        {"id": 10, "value": "10day", "period": 10}, 
        {"id": 12, "value": "11day", "period": 11}, 
        {"id": 13, "value": "12day", "period": 12}, 
        {"id": 14, "value": "13day", "period": 13}, 
        {"id": 15, "value": "14day", "period": 14}, 
        {"id": 16, "value": "15day", "period": 15}, 
        {"id": 17, "value": "16day", "period": 16}, 
        {"id": 18, "value": "17day", "period": 17}, 
        {"id": 19, "value": "18day", "period": 18}, 
        {"id": 20, "value": "19day", "period": 19}, 
        {"id": 21, "value": "20day", "period": 20}, 
        {"id": 22, "value": "21day", "period": 21}, 
        {"id": 23, "value": "22day", "period": 22}, 
        {"id": 24, "value": "23day", "period": 23}, 
        {"id": 25, "value": "24day", "period": 24}, 
        {"id": 26, "value": "25day", "period": 25}, 
        {"id": 27, "value": "26day", "period": 26}, 
        {"id": 28, "value": "27day", "period": 27}, 
        {"id": 29, "value": "28day", "period": 28}, 
        {"id": 30, "value": "29day", "period": 29}, 
        {"id": 31, "value": "30day", "period": 30}, 
        {"id": 32, "value": "1m", "period": 30}, 
        {"id": 33, "value": "2m", "period": 60}, 
        {"id": 34, "value": "3m", "period": 90}, 
        {"id": 35, "value": "4m", "period": 120}, 
        {"id": 36, "value": "5m", "period": 150}, 
        {"id": 37, "value": "6m", "period": 180}, 
        {"id": 38, "value": "7m", "period": 210}, 
        {"id": 39, "value": "8m", "period": 240}, 
        {"id": 38, "value": "9m", "period": 270}, 
        {"id": 40, "value": "10m", "period": 300}, 
        {"id": 41, "value": "11m", "period": 330}, 
        {"id": 42, "value": "12m", "period": 360}, 
        {"id": 43, "value": "1y", "period": 365}, 
        {"id": 44, "value": "2y", "period": 730}, 
        {"id": 45, "value": "3y", "period": 1095}, 
        {"id": 46, "value": "4y", "period": 1460}, 
        {"id": 47, "value": "5y", "period": 1825}, 
        {"id": 48, "value": "6y", "period": 2190}, 
        {"id": 49, "value": "7y", "period": 2555}, 
        {"id": 50, "value": "8y", "period": 2920}, 
        {"id": 51, "value": "9y", "period": 3285}, 
        {"id": 52, "value": "10y", "period": 3650}, 
        {"id": 53, "value": "11y", "period": 4015}, 
        {"id": 54, "value": "12y", "period": 4380}, 
        {"id": 55, "value": "13y", "period": 4745}, 
        {"id": 56, "value": "14y", "period": 5110}, 
        {"id": 57, "value": "15y", "period": 5475}, 
        {"id": 58, "value": "16y", "period": 5840}, 
        {"id": 60, "value": "17y", "period": 6205}, 
        {"id": 61, "value": "18y", "period": 6570}, 
        {"id": 62, "value": "19y", "period": 6935}, 
        {"id": 63, "value": "20y", "period": 7300}, 
        {"id": 64, "value": "200y", "period": 73000}, 
    ]

    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    console.debug("ageData: "+ageData); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            for (var i=0; i<ageData.length; i++) { 
                console.debug(ageData[i]); 
                var query = getageInsertQuery(ageData[i]); 
                console.debug(query); 
                connection.query(query, function(err, result){ 
                    if(err) { 
                        console.log(err); 
                    } else { 
                        console.debug("Data entered! "); 
                    }
                }); 
            }
        }
    });
}

function getageInsertQuery(dataRecord) { 
    return `INSERT IGNORE INTO age(id, value, period) `+ 
    `VALUES (${dataRecord['id']}, '${dataRecord['value']}', ${dataRecord['period']}) `; 
}

