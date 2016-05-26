var express = require('express');
var gpio = require('rpi-gpio');
var Gpio = require('onoff').Gpio,
    button = new Gpio(23, 'in');
var app = express();
var light = 'on';

app.use(express.static('./.')); // use the current directory
app.get('/', function (req, res) { // will be used to server a static optional html page
    res.sendFile(__dirname + '/index.html');
});

app.post('/light', function(req, res) { // when the post request for /on is called
    console.log('http switch flipped');
    lightSwitch();
});

app.listen(3000, function () { // port number
    console.log('Example app listening on port 3000!');

    button.watch(function(err, value) {
      if (value == 1) lightSwitch();
    });
    console.log('Listening for changes on channel 23');
});


var lightSwitch = function() {
    light == 'on' ? gpio.setup(3, gpio.DIR_OUT, switchOff) : gpio.setup(3, gpio.DIR_OUT, switchOn);
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
