const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/test', (req, res) =>{
    return res.json("Hello world")
})

app.listen(PORT, () => {
    console.log('server started')
})