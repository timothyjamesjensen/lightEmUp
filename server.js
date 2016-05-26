var express = require('express');
var app = express();

app.use(express.static('./.')); // use the current directory
app.get('/', function (req, res) { //will be used to server a static optional html page
    res.sendFile(__dirname + '/index.html');
});

app.get('/light', function(req, res) { //when the post request for /on is called
    console.log('switch flipped');
});

app.listen(3000, function () { //port number
    console.log('Example app listening on port 3000!');
});
