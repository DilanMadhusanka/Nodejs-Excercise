const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.url)

    response.end('Hello Node Js!!')
})

server.listen(3000)