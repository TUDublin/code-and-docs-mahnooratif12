import express from 'express'; 
import * as database from './database.js'; 

const PORT = 3061;  

database.connect(); 

const app = express(); 

app.get('/upload', (req, res) => {
    console.log("Get request received. "); 
});

app.post('/upload', (req, res) => {
    console.log("Post request received. "); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});