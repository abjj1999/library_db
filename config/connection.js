require('dotenv').config();
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the ${process.env.DB_NAME} database.`)
);

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

module.exports = db;



