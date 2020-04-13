const express = require('express')
const path = require('path')

const app = express()

app.get('/', (request, response) => {
    response.json({
        name: 'node express'
    })
})

app.get('/about', (request, response) => {
    response.send("Express")
})

app.get('/home', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3000, () => {
    console.log('App listening on port 3000')
})