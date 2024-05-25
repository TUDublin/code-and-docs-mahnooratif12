import express from 'express'; 
import * as database from './database.js'; 

const PORT = 3061;  

database.connect(); 

const app = express(); 

app.get('/', (req, res) => {
    console.log("Get request received. "); 
});

app.post('/data', (req, res) => {
    console.log("Post request received. "); 
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});