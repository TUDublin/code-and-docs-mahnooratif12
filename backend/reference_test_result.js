import mysql from 'mysql';

var data = [

    {
        "Request_Test_Result_ID" : 1,
        "Test_Request_ID": 2,
        "Test_ID": 3,
        "Request_Test_Resultcol": "positive",
    },
    {
        "Request_Test_Result_ID" : 2,
        "Test_Request_ID": 5,
        "Test_ID": 9,
        "Request_Test_Resultcol": "Negative",
    }

]

function insert() { 
    // Configure MySQL connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tuh'
    }); 

    //Establish MySQL connection
    connection.connect(function(err) {
        if (err) 
            throw err
        else {
            console.log('Connected to MySQL');
            for (var i=0; i<data.length; i++) { 
                console.log(data[i]); 
                var query = getReference_Test_ResultInsetQuery(data[i]); 
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




function getReference_Test_ResultInsetQuery(dataRecord) {
    return 'INSERT INTO  reference_test_result' + 
    '(Request_Test_Result_ID, Test_Request_ID, Test_ID, Request_Test_Resultcol)' +
    `VALUES (${dataRecord['idRequest_Test_Result_ID']}, ${dataRecord['Test_Request_ID']}, '${dataRecord['Test_ID']}', '${dataRecord['Request_Test_Resultcol']}')`; 
}

insert();