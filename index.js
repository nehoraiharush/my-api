const express = require('express');
//import express from 'express';//same as line 1
const bodyParser = require('body-parser');
//import bodyParser from 'body-parser';
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


const accountsRoute = require('./controllers/accounts');
//import accountsRoute from './controllers/accounts';
app.use('/api/accounts', accountsRoute);

const port = 5090;
app.listen(port, function () {
    console.log(`Server is running via port ${port}`);
});