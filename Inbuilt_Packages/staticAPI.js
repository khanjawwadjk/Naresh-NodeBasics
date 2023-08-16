const http = require('http');
const fs = require('fs');

let port = 3001;

let server = http.createServer((req, res)=>{
    fs.readFile('db.json', (err, data)=>{
        if(err) throw err;
        res.write (data);
        //Always write res.end() at the last to terminate the request.
        res.end();
    })
})

server.listen(port);