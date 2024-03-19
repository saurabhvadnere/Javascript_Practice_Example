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

## checks if the number is positive, negative or zero
```javascript
//Example 1: Check Number Type with if...else if...else

// program that checks if the number is positive, negative or zero


const number = 22;
console.log("User Entered number is",number)

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number === 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}


// Example 2: Check Number Type with nested if...else

// check if the Digit is positive, negative or zero

const Digit = -35;
console.log("User Entered number is",Digit)

if (Digit >= 0) {
    if (Digit === 0) {
        console.log("The Digit is zero");
    } else {
        console.log("The Digit is positive");
    }
} else {
    console.log("The Digit is negative");
}
```

## Check if a number is Odd or Even
```javascript

const number = 6576879787898

//check if the number is even
// Example 1: Using if...else

if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
```


## Find Large Number
```javascript
//Example 1
// take input from the user
const num1 = 213;
const num2 = 144;
const num3 = 79;
let largest;

if (num1>=num2 && num1>=num3){
    largest=num1;
}else if(num2>=num1 && num2>=num3){
    largest=num2;
}else{
    largest=num3;
}
console.log("The large number is",largest)



//Example 2
// take input from the user
const number1 = 55;
const number2 = 63;
const number3 = 85;

const large = Math.max(number1, number2, number3);

// display the result
console.log("The largest number is", large);
```

## Find Factorial of Number
``` javascript
// Example 1
number = 6; 

if (number<0){
    console.log("Less than zero factorial is not available")
}
else if(number===0){
    console.log(`the factorial of zero is ${number}`);
}
else{
    let fact = 1;
    for (let i = 1; i<=number; i++)
    {
        fact *= i ;
    }
    console.log(`The factorial of ${number} is ${fact}`)
}

// Example 2

number = 4;
fact = 1;
function factorial () {
    for (i=1; i<=number; i++){
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}`);
}
factorial()
```

## Simple Calculator
``` javascript

const operator = "*"
const number1 = 22;
const number2 = 84;

let result;

if(operator === "+"){
    result = number1 + number2;
}
else if(operator === "-"){
    result = number1 - number2;
}
else if(operator === "*"){
    result = number1 * number2;
}
else{
    result = number1 /  number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`)
```

## Sum of Number
``` javascript
// Exmaple 1 using while loop
let total = 0;
let i = 1;
let number=10;//+prompt("Enter the number")

while (i<=number) {
    total +=i;
    i++;
}
console.log("the sum numbers is",total)


// // Exmaple 2 using for loop

let totals = 0;
let numbers=100;//+prompt("Enter the number")

for (let i=1; i<=numbers; i++){
    totals += i;
}
console.log("the sum numbers is",totals)
```

## Find Factor of Number
```javascript
num = 66;
console.log(`Factors of ${num} is:`)

for (let i=1; i<=num; i++){
    if(num%i===0){
        console.log(i);
    }
}
```

## Reverse the string
```javascript
//Example 1 => Using for Loop
// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const finalstring = "Javascript";

const Result = reverseString(finalstring);
console.log(Result);


//Example 2 =>  Using built-in Methods
// program to reverse a string

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}

// take input from the user
const string ="Hello World!!!";

const result = reverseString(string);
console.log(result);
```
## convert first letter of a string to uppercase
```
javascript
// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase

    const capital = str.charAt(0).toUpperCase() + str.slice(1);

    return capital;
}

// take input
const string = "javascript";

const result = capitalizeFirstLetter(string);

console.log(result);
```

## Average of number
```javascript
function average(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return (total / array.length);
}

let number = [72,80,90,98,100];
const result = average(number); 
console.log( result ); // 88
```

## sum of only even number
``` javascript
// find the sum of only even number 
function sum (array){
    let total = 0;
      for(i=0; i<array.length; i++){
        if (array[i]%2===0){
          total = total + array[i];
        }
      }
      return total;
  }
  let number = [1,2,3,4,5,6,7,8,9];
  const result = sum(number);
  console.log(result)
```

## Remove a Property From an Object
```javascript
// program to remove a property from an object

// creating an object
const student = { 
    name: 'Sam',
    hobbies: ['reading', 'games', 'coding'],
    age: 24,
    score: {
        maths: 90,
        science: 80
    },
    greet: function() {
        console.log('Hello everyone.');
    }
    
};

// deleting a property from an object
delete student.greet; // using DOT Notation
delete student['score']; // using Bracket Notation

console.log(student);
```

## Check if a Key Exists in an Object
```javascript
// Example 1: Check if Key Exists in Object Using in Operator

// program to check if a key exists

const person = {
    id: 1,
    name: 'Sam',
    age: 23
}

// check if key exists
const hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}


// Example 2: Check if Key Exists in Object Using hasOwnProperty()
// program to check if a key exists

const persons = {
    id: 1,
    name: 'Tom',
    age: 23
}

//check if key exists
const hasKeys = persons.hasOwnProperty('name');

if(hasKeys) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}```

## cloning the object
```javascript
// Example 1. Clone the Object Using Object.assign()
// program to clone the object

// declaring object
const person = {
    name: 'Aryan',
    age: 25,
}

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'David';

console.log(clonePerson.name);
console.log(person.name);


// Example 2: Clone the Object Using Spread Syntax
// program to clone the object

// declaring object
const persons = {
    name: 'Saurabh',
    age: 24,
}

// cloning the object
const clonePersons = { ... persons}

console.log(clonePersons);

// changing the value of clonePerson
clonePersons.name = 'Miller';

console.log(clonePersons.name);
console.log(persons.name);
```


