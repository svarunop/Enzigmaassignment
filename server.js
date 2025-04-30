
const mysql = require("mysql2") ;
const cors = require('cors');
const taskRoutes = require('./routes/routes');
const express = require('express');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/routes', taskRoutes);


// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


