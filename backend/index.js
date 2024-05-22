import express from 'express'; 
import * as database from './database.js'; 

const PORT = 3061;  

database.connect(); 

const app = express(); 

app.post('/upload', (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Save the filename to the database
    const filename = file.filename;

    // parse data from exel file 
    // write sql queries to insert data to database 
    
    console.log('Filename saved to database successfully');
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});