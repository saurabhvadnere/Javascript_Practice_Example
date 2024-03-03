# Javascript_Practice_Example

## Square root
``` javascript
// const number = prompt('Enter the number: '); // Prompt is not working in VS Code

const number = 25;

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);
```

## Area of a Triangle
``` javascript
const height = 5;
const base = 6;

let final_height = `${height}cm`
let final_base = `${base}cm`

AreaofTriangle =( height * base ) / 2;

console.log(`Area of triangle is ${AreaofTriangle}cm²`)
```

## Swap Two Variables
```javascript
//JavaScript program to swap two variables

// Example 1: Using a Temporary Variable

let A = "Ram";
let B = "Sita";

//"create a temporary variable"
let temp 

// Swap variable
temp = A;
A = B ;
B = temp ;

console.log(`The value of A after swapping: ${A}`);
console.log(`The value of B swapping: ${B}`);

// Example 2: Using es6(ES2015) Destructuring assignment

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//"using destructuring assignment"
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
```

## degree_conversion
```javascript
let Fahrenheit = 80;

const factor = ((Fahrenheit - 32 ) / 1.8).toFixed(1);

let celsius = factor;

console.log(`${Fahrenheit} Fahrenheit degree is equal to ${celsius} celsius degree. `)


// program to convert celsius to Fah
// ask the celsius value to the user 
const Cel = 24;

// calculate Fah
const Fah = (Cel * 1.8) + 32

// display the result
console.log(`${Cel} degree celsius is equal to ${Fah} degree fahrenheit.`);
```

## Kilometre to mile
```javascript
// taking miles input from the user
let Miles = 10;

// conversion factor
const factor = 1.6;

// calculate Kilometers
let Kilometers = Miles * factor

console.log(`${Miles} miles is equal to ${Kilometers} Kilometers.`)
```

## Generate a Random Number
```javascript
// generating a random number
const a = Math.random();
console.log(a);


// generating a random number
const aa = Math.random() * (10-1) + 1 // + 1 for not print the 0 (Zero)
console.log(`Random value between 1 and 10 is ${aa}`);
//Math.random() * (highestNumber - lowestNumber) + lowestNumber
//This will show a random floating-point number greater than 1 and less than 10.


// You can use Math.floor() to get a random integer value.

let x = Math.floor(5.9); // to round a number to integer.
console.log(x);

let xx = Math.round(5.9);  // to round a number to the nearest integer.
console.log(xx);


// generating a random number
// Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber
const aaa = Math.floor(Math.random() * (20 - 1)) + 1;
console.log(`Random value between 1 and 20 is ${aaa}`);


// randomNumber will be between 0 and 100
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);


// randomNumber will be between 25 and 100
const randomNum = Math.floor(Math.random() * 75) + 25;
console.log(randomNum);

//run the code having multiple option ,Just you want to do code..
```
