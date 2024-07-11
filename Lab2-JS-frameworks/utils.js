// utils.js

// Function to print a welcome message
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Function to convert temperature (Celsius to Fahrenheit)
function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * calculateFactorial(number - 1);
}

// Advanced function
async function advancedFunction() {
    try {
        const fetch = await import('node-fetch'); // Dynamically importing node-fetch
        const response = await fetch.default('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

module.exports = {
    printWelcomeMessage,
    convertTemperature,
    calculateFactorial,
    advancedFunction,
};