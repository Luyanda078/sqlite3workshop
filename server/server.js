const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const db = require('better-sqlite3')('database.db');
const port = 3001;
app.use(cors());
app.use(express.json());
// Create the table
const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER
        )
    `;
    db.prepare(sql).run();
};
createTable();
// Insert a new user
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const sql = `
        INSERT INTO user (name, age)
        VALUES (?, ?)
    `;
    const info = db.prepare(sql).run(name, age);
    res.status(201).json({ id: info.lastInsertRowid });
});
// Get all users
app.get('/users', (req, res) => {
    const sql = `
        SELECT * FROM user
    `;
    const rows = db.prepare(sql).all();
    res.json(rows);
});

// Get a user by id
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT * FROM user
        WHERE id = ?
    `;
    const row = db.prepare(sql).get(id);
    if (row) {
        res.json(row);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});
// Update a user by id
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const sql = `
        UPDATE user
        SET name = ?, age = ?
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(name, age, id);
    if (info.changes > 0) {
        res.json({ message: 'User updated successfully' });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});
// Delete a user by id
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        DELETE FROM user
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(id);
    if (info.changes > 0) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


app.get('/test', (req, res) => {
    res.send('This is a test endpoint!');
  });
// app.use(course())
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.get('/', function(req, res) {
    const books = {
        id:1,
         Author: "Mary",
        title: "Purple Hibiscus",
        year:2021
    }
    res.json(books)
})
app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000')
})