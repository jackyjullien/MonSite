var http = require('http');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function(request, response){
    if (request.url === '/') {
        // retourne la page index.html
        var indexPath = path.join(__dirname, '.', 'index.html');
        console.log("indexPath = " + indexPath);
        fs.readFile(indexPath, function(err, content) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(content);
        });
    } else {
        response.writeHead(404, {'Content-Type':'text/html'});
        response.end('Not Found');
    }
});

server.listen(8080, function(){
   console.log('le serveur a demarre');
});
