//Example 1
// take input from the user
const num1 = +(prompt("Enter first number: "));
const num2 = +(prompt("Enter second number: "));
const num3 = +(prompt("Enter third number: "));
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
const number1 = +(prompt("Enter first number: "));
const number2 = +(prompt("Enter second number: "));
const number3 = +(prompt("Enter third number: "));

const large = Math.max(number1, number2, number3);

// display the result
console.log("The largest number is ", large);