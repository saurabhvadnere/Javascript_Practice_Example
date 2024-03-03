// generating  a random number
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