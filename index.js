// write your code here
const http = require('http');
// const dt = require('./myFirstModule');

const PORT = process.env.PORT || 8080;

let requestCounter = 0;

const server = http.createServer((req, res) => {

console.log('Received ' + req.method + ' request for ' + req.url);

res.writeHead(200, {'Content-Type': 'text/plain'});
if(res.statusCode === 200) {
    requestCounter++;
    console.log('request number: ' + requestCounter);
    console.log(res.statusCode);
    // res.write(res.getHeader.toString());


    // res.write('The current date and time is: ' + dt.myDateTime());
    
    res.end('Hello World');
} else {

    console.log('Status code is not 200!');
    res.end('Did not say Hello World!');
}



});

server.listen(PORT, 'localhost', null, function() {
    console.log('Server is listening on localhost:8080');
});