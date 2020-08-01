const EventEmitter = require('events');
class MyEmitter extends EventEmitter { };

const userEventEmitter = new MyEmitter();

userEventEmitter.on('registration', function (a, b) {
  console.log(`registration event is fired and parameters are ${a} and ${b}`);
});


userEventEmitter.on('registration', function (a, b) {
  console.log(`registration event is fired and this is the second listener`);
});

userEventEmitter.on('registration', function (a, b) {
  setTimeout(
    () => {
      console.log(`registration event is fired and this is the third listener`);
    }, 5000
  )
});


userEventEmitter.on('login', function (a, b) {
  console.log(`login event is fired and parameters are ${a} and ${b}`);
});

userEventEmitter.emit('registration', 'Arshbeer', 'Singh');
userEventEmitter.emit('login', 'Nikhil', 'Jagtiani');