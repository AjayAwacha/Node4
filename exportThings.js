// commonJS moudle system
exports.greet = function() {
    console.log('Hello from Function');
}
exports.myName = 'Ajay Awachar';
exports.myObj = {
    name: 'Ajay',
    fetchDetails: function() {
        console.log('otherDetails');
    }
}

// module.exports = {
//     greet2: function() {
//         console.log('Hello from Function');
//     },
//     myName2: 'Ajay Awachar',
//     myObj2: {
//         name: 'Ajay',
//         fetchDetails: function() {
//             console.log('otherDetails')
//         }
//     }
// }

// ES6 Module system
// export const myName = 'Ajay Awachar';
// export const greet = function() {
//     console.log('Hello from Function');
// }

// export default {
//     myName2: 'Ajay Awachar',
//     greet2: function() {
//         console.log('Hello from Function');
//     }
// }

