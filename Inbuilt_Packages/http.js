const http = require('http');


// req >> What client sends to the server by params, query params, body etc.
// res >> What server sends to the client in the response.

let server = http.createServer((req, res)=>{
    res.write('<h1>Server sending response successfully</h1>');
    res.end();
})

server.listen(3300)