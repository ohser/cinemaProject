const express = require('express');
const jwt = require('jsonwebtoken');
const usersModel = require('../model/usersModel')

const axios = require('axios')

const router = express.Router();

//entry point : http//localhost:8000/auth

router.get('/', async (req,res) => {
    
  
    return usersModel



})

module.exports = router;
