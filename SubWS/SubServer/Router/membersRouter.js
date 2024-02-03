// Endpoint: /api/members
const express = require('express');
const router = express.Router();
const MembersBll = require('../BLL/membersBll'); 
const membersModel = require('../model/MembersModel')

router.get('/', async (req, res) => {
  try {
    // Fetch data from Members WS
    const membersData = await MembersBll.getAllmembers()
    console.log(membersData)

    // Store data in MongoDB
    await membersModel.insertMany(membersData);

    res.json({ message: 'Members data fetched and stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



router.get('/members', async (req, res) => {
  try {
    const membersData = await membersModel.find();
    console.log(membersData);
    res.json(membersData); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', originalError: error.message });
  }
});

module.exports = router;
