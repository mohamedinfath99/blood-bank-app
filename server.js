const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');

// Dotenv Config
dotenv.config();


// Rest Object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())


// Test Route
app.get('/', (req, res) => {
    res.status(200).send("succes")
})

// Port
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Node server is running in the ${process.env.DEV_MODE} mode & port number is ${process.env.PORT}!`.bgCyan.bgMagenta);
})