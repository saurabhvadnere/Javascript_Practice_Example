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
