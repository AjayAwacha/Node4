const fs = require('fs');

console.log('Start');

fs.readFile(`${__dirname}/myFile.txt`, 'utf8',(err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('I/O callback file data ', data);
})

setTimeout(() => {
    console.log('setTimeout callback');
}, 0);

setImmediate(() => {
    console.log('setImmediate callback');
});

Promise.resolve().then(() => {
    console.log('Promise Then callback')
});

process.nextTick(() => {
    console.log('Next Tick callback');
});

console.log('Synchronous code');
