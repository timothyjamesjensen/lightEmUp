var express = require('express');
var gpio = require('rpi-gpio'); // gpio for controllin pi
var app = express();
var light = 'on';

app.use(express.static('./.')); // use the current directory
app.get('/', function (req, res) { // will be used to server a static optional html page
    res.sendFile(__dirname + '/index.html');
});

app.post('/light', function(req, res) { // when the post request for /on is called
    console.log('switch flipped');
    lightSwitch();
});

app.listen(3000, function () { // port number
    console.log('Example app listening on port 3000!');

    gpio.on('change', function(channel, value) {
        console.log('button has been pressed!');
        lightSwitch();
    });
    gpio.setup(15, gpio.DIR_IN, gpio.EDGE_BOTH);

    console.log('Listening for changes on channel 23');

    console.log('Channel 2 setup');
});


var lightSwitch = function() {
    light == 'on' ? gpio.setup(3, gpio.DIR_OUT, switchOn) : gpio.setup(3, gpio.DIR_OUT, switchOff);
};

var switchOn = function() {
    light = 'on';
    gpio.write(3, true, function(err) {
        if (err) throw err;
        console.log('pin 3 set to true');
    });
};

var switchOff = function() {
    light = 'off';
    gpio.write(3, false, function(err) {
        if (err) throw err;
        console.log('pin 3 set to false');
    });
};