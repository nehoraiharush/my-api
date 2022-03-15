//const { response } = require('express');
const express = require('express');
//const fetch = require("node-fetch")
//import express from 'express';
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const arr = [

]
// const arr = [
//     {
//         username: 'Bill Gates',
//         password: '123456',
//         email: 'Billgates@gmail.com'
//     },
//     {
//         username: 'Elon Musk',
//         password: 'jso8seew0',
//         email: 'joemama@gmail.com'
//     },
//     {
//         username: 'Nehorai harush',
//         password: '123456',
//         email: 'joemama@gmail.com'
//     }
// ];


//http://localhost:5090/api/accounts/sayHello
/*router.post('/sayHello', (req, res) => {

    const { password, email } = req.body;
    for (let i = 0; i < arr.length; i++) {
        if (email == arr[i].email && password == arr[i].password) {
            return res.status(200).json({
                message: `Hello ${arr[i].username} nice seeing u here`
            });
        }
    }
    return res.status(200).json({
        message1: `User not found`
    });
});*/

//const url = "http://localhost:5090/api/accounts/login";
// router.post('/login', (req, res) => {
//     const { password, email } = req.body;
//     findUsers = arr.find(x => x.email == email && x.password == password);
//     if (!findUsers) {
//         return res.status(404).json({ message: "User not found" });
//     } else {
//         return res.status(200).json({ message: `Hi ${findUsers.username} good having u here` });
//     }
// })
module.exports = router;


router.post('/addPerson', (req, res) => {
    const { username_get, password_get, email_get } = req.body;
    if (!username_get || !password_get || !email_get) {
        return res.status(404).json({ message: `One or more variables are missing` });
    }
    exisingUser = arr.find(x => x.email == email_get || x.password == password_get || x.username == username_get);
    if (exisingUser) {
        return res.status(404).json({ message: `Person already exists` });
    }
    arr.push(
        {
            username: username_get,
            password: password_get,
            email: email_get
        });
    console.log(arr);
    return res.status(200).json({ message: `Hi ${username_get}` });
})

router.post('/signUp', async (req, res) => {
    const { password, email } = req.body;
    if (!password || !email) {
        return res.status(404).json({ message: `One or more variables are missing` });
    }
    const exisingUser = arr.find(x => x.email == email);
    if (exisingUser) {
        return res.status(404).json({ message: `Person already exists` });
    }
    const hash_password = await bcryptjs.hash(password, 10);
    arr.push(
        {
            password: hash_password,
            email: email
        });
    return res.status(200).json({ message: `Hi ${email} u have been added` });
})


router.post('/logIn', async (req, res) => {
    const { password, email } = req.body;
    const exisingUser = arr.find(x => x.email == email);
    if (!exisingUser)
        return res.status(200).json({ message: "User didn't found" });

    const isMatch = await bcryptjs.compare(password, exisingUser.password);
    if (isMatch) {
        const token = await jsonwebtoken.sign(exisingUser, 'jso8seew0');
        return res.status(200).json({ token: token, email: exisingUser.email });
    } else {
        return res.status(200).json({ message: "Wrong password" });
    }
})
