const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.json({
        name: 'node express'
    })
})

app.get('/about', (request, response) => {
    response.send("Express")
})

app.listen(3000, () => {
    console.log('App listening on port 3000')
})