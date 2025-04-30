const mysql = require('mysql2');


const db = mysql.createConnection({
  host: "localhost",
  user: "w1_87099_Saivarun",
  password: "manager",
  database: "enzigma",
  
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to the database!');
});

module.exports = db;


