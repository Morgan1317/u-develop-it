const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user:'root',
        // your mysql password,
        password: 'P4ssc0de!',
        database: 'election'
    },
    console.log('Connected to the election database')
)

db.query(`SELECT * FROM candidates`, (err,row) => {
    console.log(row);
});

// route to handle user req that arent supported by app
// it's a catch all route
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Example app listening at http://localhost:${PORT}`);
  });