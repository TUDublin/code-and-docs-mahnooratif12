import express from 'express'; 
import cors from 'cors';
import * as database from './database.js'; 
import * as datainserted from './datainserted.js'

const PORT = 3061;  

database.connect(); 

const app = express(); 

const {data} = require('./datainserted');

console.log(data.price);

app.use(cors()); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

