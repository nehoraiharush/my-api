const express = require('express');
//import express from 'express';//same as line 1
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 5090;
app.listen(port, function () {
    console.log(`Server is running via port ${port}`);
});

