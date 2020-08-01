var events = require('events');
var exampleEventEmitter = new events.EventEmitter();

var eventListener = function (milliseconds) {
    setTimeout(
        () => {
            console.log("this is the message ",milliseconds);
        }, milliseconds);
};

//adding event listener
exampleEventEmitter.on('someEvent', eventListener);

exampleEventEmitter.emit('someEvent', 10000);
exampleEventEmitter.emit('someEvent', 0);

//removing event listener
exampleEventEmitter.removeListener('someEvent', eventListener);

exampleEventEmitter.emit('someEvent');
