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
