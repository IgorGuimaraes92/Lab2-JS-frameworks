// app.js
const utils = require('./utils'); // Importing functions from utils.js

// Calling functions from utils.js
utils.printWelcomeMessage('Igor', 'Guimaraes');
console.log('Temperature F°:', utils.convertTemperature(21)); // Celsius to Fahrenheit
console.log('Factorial of 13 (13!):', utils.calculateFactorial(13)); // Calculating factorial
utils.advancedFunction(); // Advanced functionnode app.js
