const http = require('http');

var web = http.createServer(function(req,res){
    res.end('Javascript')
});

const port = 3000;
web.listen(3000);

