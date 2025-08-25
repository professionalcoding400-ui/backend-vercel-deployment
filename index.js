const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello From the Backend Deployment !');
    });

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`);
    });