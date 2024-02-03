const express = require('express');
const jwt = require('jsonwebtoken');
const usersModel = require('../model/usersModel')
const MoviesModel = require('../../SubWS/SubServer/model/MoviesModel')


const axios = require('axios')

const router = express.Router();

//entry point : http//localhost:8000/auth

router.get('/', async (req, res) => {
    return usersModel
})

router.get('/movie', async (req, res) => {
    try {
      const movies = await MoviesModel.find()
      console.log(movies)
      res.json(movies);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post("/login", async (req, res) => {
    const user = await usersModel.findOne({ userName: req.body.userName })
    console.log(user.userName)
    console.log(req.body.userName)
    if (user && user.password === req.body.password) {
        if (user.userName === "admin") {
            const token = jwt.sign({ role: "admin" }, "secret")
            return res.json({ token: token, role: "admin" })
        } else {
            const token = jwt.sign({ role: "user" }, "secret")
            return res.json({ token: token, role: "user" })
        }
    } else {
        return res.status(404).json({ msg: "Invalid Credentials" })
    }

})
router.put('/updatmovie',async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

router.post("/create-account", async (req, res) => {
    const userName = req.body.userName

    const newUser = new usersModel({ userName: userName })
    await newUser.save()
    return res.status(201).json({ msg: "Account created successfully" })

})

router.post("/create-password", async (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
    const user = await usersModel.findOne({ userName })
    console.log(user)
    if (user) {
        console.log(password)
        await usersModel.findByIdAndUpdate(user._id, { password: password })
        return res.status(200).json({ msg: "Account updated successfully" })
    }

})

module.exports = router;
