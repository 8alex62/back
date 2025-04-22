const http = require('http');
const handleMethod = require('./handleMethode');

const server  = http.createServer((req, res) => {
    // res.writeHead(200);
    // res.readableEnded('Salut tout le monde');
    handleMethod.handleMethod(req, res);
});  

server.listen(8080, () => {
    console.log('Server démarré sur le port 8080')
});