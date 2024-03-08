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
