import { Router } from 'express';
import mysql from 'mysql';

const router = Router();

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tuh'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Endpoint to create a new user
router.post('/signup', (req, res) => {
    const { forename, lastname, username, email, password } = req.body;
    const insertUserQuery = 'INSERT INTO users (forename, lastname, username, email, password) VALUES (?, ?, ?, ?, ?)';
    
    connection.query(insertUserQuery, [forename, lastname, username, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error creating account');
            return;
        }
        res.send('Account created successfully');
    });
});

export default router;
