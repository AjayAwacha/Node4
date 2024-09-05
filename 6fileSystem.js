// const fs = require('fs');

// synchronous operation
// const data = fs.readFileSync(`${__dirname}/myFile.txt`, 'utf-8');
// fs.writeFileSync(`${__dirname}/blankFile.txt`, data);

// asynchronous operation
// fs.readFile(`${__dirname}/myFile.txt`, 'utf-8', (err, data) => {
//     console.log('File data ', data);
//     fs.writeFile(`${__dirname}/blankFile.txt`, data, (err, data) => {
//         console.log('file write successfully')
//     });
// });

// promise based methods
const fs = require('fs').promises;
async function handleFileOperation() {
    const data = await fs.readFile(`${__dirname}/myFile.txt`, 'utf-8');
    await fs.writeFile(`${__dirname}/blankFile.txt`, data);
    console.log('data write successfully!');
}
handleFileOperation();

console.log('Synchronous Code');

