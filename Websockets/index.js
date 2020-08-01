var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(1234, function () {
    console.log('listening for requests on port 1234,');
});

// Static files
app.use(express.static('public'));


// rest of the code here
var io = socket(server);

io.on('connection', (socket) => {
    debugger;
    console.log('new user made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function (data) {
        debugger;
        // console.log(data);
        io.sockets.emit('chat2client', data);

        socket.emit('chat2singleclient', '(last message was yours)');
    });

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });


});