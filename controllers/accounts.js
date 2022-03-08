//const { response } = require('express');
const express = require('express');
//import express from 'express';
const router = express.Router();

const arr = [
    {
        username: 'Bill Gates',
        password: '123456',
        email: 'Billgates@gmail.com'
    },
    {
        username: 'Elon Musk',
        password: 'jso8seew0',
        email: 'joemama@gmail.com'
    }
];


//http://localhost:5090/api/accounts/sayHello
// router.post('/login', (req, res) => {

//     const { password, email } = req.body;
//     for (let i = 0; i < arr.length; i++) {
//         if (email == arr[i].email && password == arr[i].password) {
//             return res.status(200).json({
//                 message: `Hello ${arr[i].username} nice seeing u here`
//             });
//         }
//     }
//     return res.status(200).json({
//         message1: `User not found`
//     });
// });
module.exports = router;
//const fetch = require('node-fetch');
const url = "http://localhost:5090/api/accounts/sayHello";
router.post('/login', (req, res) => {
    const { password, email } = req.body;
    const fetchUser = fetch(url);
    fetchUser
        .then(data => {
            data.json().then(rand => {
                const findUseres = rand.find(x => x.email == email && x.password == password);
                console.log(findUseres);
            })
        })
        .catch(err => {
            console.log(err);
        })
})