const express = require('express')

const router = express.Router()

router.post('/register', async(req, res) => {
    console.log(req.body)
    return res.json("Hello")
})

module.exports = router