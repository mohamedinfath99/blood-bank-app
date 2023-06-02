const express = require('express');

// Rest Object
const app = express();


// Test Route
app.get('/', (req, res) => {
    res.status(200).send("succes")
})

// Port
const PORT = 8080;

app.listen(PORT, () => {
    console.log("Node server is running!");
})