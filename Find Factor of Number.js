// find the factor of number
num = 66;
console.log(`Factors of ${num} is:`)

for (let i=1; i<=num; i++){
    if(num%i===0){
        console.log(i);
    }
}
