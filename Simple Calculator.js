
const operator = "*";
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
