// commonJS module system
const importedData = require('./exportThings');

importedData.greet();
console.log(importedData.myName);
console.log(importedData.myObj);
importedData.myObj.fetchDetails();

// importedData.greet2();
// console.log(importedData.myName2);
// console.log(importedData.myObj2);
// importedData.myObj2.fetchDetails();

// ES6 Moudle system
// import myData, { greet, myName } from "./exportThings.js";
// // Named import
// greet();
// console.log(myName);

// // Deault import
// console.log(myData);
// console.log(myData.myName2);
// myData.greet2();

