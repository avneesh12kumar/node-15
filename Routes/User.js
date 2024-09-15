const express = require('express');
const router = express.Router();
const usercontroller = require('../Controller/UserController');

//http://localhost:3000/users
router.get('/users', (req, res)=>{
    usercontroller.getAllUsers(req, res);
})
//http://localhost:3000/user/2
router.get('/user/:id', (req, res)=>{
    usercontroller.getUser(req, res);
})

module.exports=router;