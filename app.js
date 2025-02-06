const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');  // <-- Import cors

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());  // <-- Enable CORS globally

// Create SQLite database and table (as previously described)
const db = new sqlite3.Database('formData.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Database created/connected successfully');
    }
});

// Create the users table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        dob TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Table created successfully');
        }
    });
});

// Middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" folder (this will serve the index.html)
app.use(express.static(path.join(__dirname, 'Storing Data')));

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, phone, dob } = req.body;

    // Insert form data into the SQLite database
    const query = `INSERT INTO users (name, email, phone, dob) VALUES (?, ?, ?, ?)`;
    db.run(query, [name, email, phone, dob], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error inserting data', error: err });
        }
        res.status(200).json({ message: 'Data saved successfully!' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});
