// promisify function 
const fs = require('fs');
const { promisify } = require('util');

fs.readFile(`${__dirname}/myFile.txt`, 'utf-8', (err, data) => {
    console.log(data);
});

async function handleData() {
    const data = await promisify(fs.readFile)(`${__dirname}/myFile.txt`, 'utf-8');
    console.log('Read data using promisify ', data);
}
handleData();

