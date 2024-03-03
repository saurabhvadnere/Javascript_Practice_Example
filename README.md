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
```jacascript
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

