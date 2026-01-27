const http = require('http');
const host = 'localhost';
const port = 8000

const requestListenner = function(req, res){
    res.writeHead(200)
    res.end('My First Server!')
}

const server = http.createServer(requestListenner)
server.listen(port, host, () => {
    console.log(`server is running at http://${host}:${port}`)
})

