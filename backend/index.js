import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import multer from 'multer'; // Import multer for handling file uploads

const app = express();
app.use(express.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tuh" // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

const upload = multer({ dest: 'uploads/' }); // Set upload destination folder

// Route handler for file upload
app.post('/upload', upload.single('excelFile'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Save the filename to the database
    const filename = file.filename;
    const q = "INSERT INTO uploaded_files (filename) VALUES (?)";
    db.query(q, [filename], (err, result) => {
        if (err) {
            console.error('Error saving filename to database:', err);
            return res.status(500).json({ error: 'Failed to save filename to database' });
        }
        console.log('Filename saved to database successfully');
        res.json({ success: true });
    });
});

// Route to return a list of uploaded files from the database
app.get('/files', (req, res) => {
    const q = "SELECT filename FROM uploaded_files";
    db.query(q, (err, result) => {
        if (err) {
            console.error('Error fetching filenames from database:', err);
            return res.status(500).json({ error: 'Failed to fetch filenames from database' });
        }
        const filenames = result.map(row => row.filename);
        res.json(filenames);
    });
});

const PORT = process.env.PORT || 3060; // Use the port defined in the environment variable or default to 3060

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
