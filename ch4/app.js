

var http=require('http');
 var fs = require('fs');
var server=http.createServer(function (req, res) {
  // if ('/' == req.url) {
  function serve (path, type) {
  res.writeHead(200, {'Content-Type': type });
  fs.createReadStream(path).pipe(res);
  }
 serve(__dirname + '/index.html', 'text/html');
  // }

});



server.listen(3000)
