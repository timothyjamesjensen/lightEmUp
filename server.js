var express = require('express');
var app = express();

app.use(express.static('./.')); // use the current directory
app.get('/', function (req, res) { //will be used to server a static optional html page
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3000, function () { //port number
    console.log('Example app listening on port 3000!');
});
