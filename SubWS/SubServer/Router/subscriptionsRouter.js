const express = require('express');
const router = express.Router();

const SubscriptionsModel = require('../model/SubscriptionsModel')

router.get('/subs', async (req, res) => {
    try {
      const subsData = await SubscriptionsModel.find();
      console.log(subsData);
      res.json(subsData); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error', originalError: error.message });
    }
  });

  

module.exports = router;