const express = require('express');

const router = express.Router();
const BLL = require("../BLL/usersBLL")
router.get("/", async (req,res) => {
    const users = await BLL.getUsersWithPermissions()
    return res.json(users)
})

router.put("/permissions", async (req,res) => {
    const status = await BLL.updateUserPermissions(req.body)
    return res.json({msg: status})
})
module.exports = router