const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('connection', () => {
    console.log('This callback execute whever connection event emmit');
});

myEvent.emit('connection');
myEvent.emit('connection');

