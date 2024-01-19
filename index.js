//index.js
//Part 1. JAcket or No Jacket?
// Pseudocode:
// 1. Declare a variable to hold the current temperature and assign it a value (e.g., 60).
// 2. Declare a second variable called isRaining and assign it a boolean value.
// 3. Use conditional statements to check the values of the variables:
//    a. If temperature is <= 40, print "Wear a heavy jacket."
//    b. Else if temperature is <= 60, print "Wear a jacket."
//    c. Else if temperature is <= 70, print "Wear a light jacket."
//    d. If none of the above, print "No jacket needed, it's hot!"
// 4. Check isRaining:
//    a. If isRaining is true, print "Bring an umbrella!"
//    b. If isRaining is false, print "No rain today, leave the umbrella at home."

// JavaScript code:
let currentTemperature = 60;
let isRaining = false;

if (currentTemperature <= 40) {
    console.log(`It's ${currentTemperature} degrees outside! Wear a heavy jacket.`);
} else if (currentTemperature <= 60) {
    console.log(`It's ${currentTemperature} degrees outside. Wear a jacket.`);
} else if (currentTemperature <= 70) {
    console.log(`It's ${currentTemperature} degrees outside, wear a light jacket.`);
} else {
    console.log("It's hot out today! No jacket needed!");
}

if (isRaining) {
    console.log("It's raining, too, so you should bring an umbrella!");
} else {
    console.log("No rain today, you can leave the umbrella at home!");
}

//Part 2
//The Calculator Section:

// Declare a variable called userName and assign it an empty string.
let userName = "";

// Check if userName has a truthy value and print a greeting accordingly.
if (userName) {
    console.log(`Hello ${userName}!`);
} else {
    console.log("Hello, guest!");
}

// Declare two variables to hold two different numbers.
let num1 = 10;
let num2 = 5;

// Declare a variable to hold a mathematical operation as a string.
let operation = "add";

// Use conditional statements to check which operation to perform.
if (operation === "add") {
    let result = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is ${result}.`);
} else if (operation === "subtract") {
    let result = num1 - num2;
    console.log(`Difference of ${num1} and ${num2} is ${result}.`);
} else if (operation === "multiply") {
    let result = num1 * num2;
    console.log(`Product of ${num1} and ${num2} is ${result}.`);
} else if (operation === "divide") {
    let result = num1 / num2;
    console.log(`Division of ${num1} and ${num2} is ${result}.`);
} else if (operation === "modulus") {
    let result = num1 % num2;
    console.log(`Modulus of ${num1} and ${num2} is ${result}.`);
} else {
    console.log(`${operation} is an invalid operation.`);
}

//
//note to self: Try the suggested - what happens if you assign the number as a string, i.e "25")
