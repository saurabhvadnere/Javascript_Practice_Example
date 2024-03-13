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
