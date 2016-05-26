var express = require('express');
var gpio = require('rpi-gpio'); // gpio for controllin pi
var app = express();

app.use(express.static('./.')); // use the current directory
app.get('/', function (req, res) { // will be used to server a static optional html page
    res.sendFile(__dirname + '/index.html');
});

app.get('/light', function(req, res) { // when the post request for /on is called
    console.log('switch flipped');
});

app.listen(3000, function () { // port number
    console.log('Example app listening on port 3000!');

    gpio.on('change', function(channel, value) {
        console.log('Channel ' + channel + ' value is now ' + value);
    });
    gpio.setup(23, gpio.DIR_IN, gpio.EDGE_BOTH);

    console.log('Listening for changes on channel 23');

    gpio.setup(2, gpio.DIR_OUT, write);
    console.log('Channel 2 setup');
    gpio.setup(3, gpio.DIR_OUT, write);
    console.log('Channel 3 setup');
});



