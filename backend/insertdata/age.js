import mysql from 'mysql';

export function insert() { 

    var ageData = [
        {"value": "1day", "period": 1}, 
        {"value": "2day", "period": 1}, 
        {"value": "3day", "period": 1}, 
        {"value": "4day", "period": 1}, 
        {"value": "5day", "period": 1}, 
        {"value": "6day", "period": 1}, 
        {"value": "7day", "period": 1}, 
        {"value": "8day", "period": 1}, 
        {"value": "9day", "period": 1}, 
        {"value": "10day", "period": 1}, 
        {"value": "11day", "period": 1}, 
        {"value": "12day", "period": 1}, 
        {"value": "13day", "period": 1}, 
        {"value": "14day", "period": 1}, 
        {"value": "15day", "period": 1}, 
        {"value": "16day", "period": 1}, 
        {"value": "17day", "period": 1}, 
        {"value": "18day", "period": 1}, 
        {"value": "19day", "period": 1}, 
        {"value": "20day", "period": 1}, 
        {"value": "21day", "period": 1}, 
        {"value": "22day", "period": 1}, 
        {"value": "23day", "period": 1}, 
        {"value": "24day", "period": 1}, 
        {"value": "25day", "period": 1}, 
        {"value": "26day", "period": 1}, 
        {"value": "27day", "period": 1}, 
        {"value": "28day", "period": 1}, 
        {"value": "29day", "period": 1}, 
        {"value": "30day", "period": 1}, 
        {"value": "1m", "period": 30}, 
        {"value": "2m", "period": 30}, 
        {"value": "3m", "period": 30}, 
        {"value": "4m", "period": 30}, 
        {"value": "5m", "period": 30}, 
        {"value": "6m", "period": 30}, 
        {"value": "7m", "period": 30}, 
        {"value": "8m", "period": 30}, 
        {"value": "9m", "period": 30}, 
        {"value": "10m", "period": 30}, 
        {"value": "11m", "period": 30}, 
        {"value": "12m", "period": 30}, 
        {"value": "1y", "period": 365}, 
        {"value": "2y", "period": 365}, 
        {"value": "3y", "period": 365}, 
        {"value": "4y", "period": 365}, 
        {"value": "5y", "period": 365}, 
        {"value": "6y", "period": 365}, 
        {"value": "7y", "period": 365}, 
        {"value": "8y", "period": 365}, 
        {"value": "9y", "period": 365}, 
        {"value": "10y", "period": 365}, 
        {"value": "11y", "period": 365}, 
        {"value": "12y", "period": 365}, 
        {"value": "13y", "period": 365}, 
        {"value": "14y", "period": 365}, 
        {"value": "15y", "period": 365}, 
        {"value": "16y", "period": 365}, 
        {"value": "17y", "period": 365}, 
        {"value": "18y", "period": 365}, 
        {"value": "19y", "period": 365}, 
        {"value": "20y", "period": 365}, 
        {"value": "200y", "period": 365}, 
    ]

    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    console.log("ageData: "+ageData); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            for (var i=0; i<ageData.length; i++) { 
                console.log(ageData[i]); 
                var query = getageInsertQuery(ageData[i]); 
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


function getageInsertQuery(dataRecord) { 
    return `INSERT INTO age `+
    `(value, period) `+ 
    `VALUES ('${dataRecord['value']}', ${dataRecord['period']})`; 
}

