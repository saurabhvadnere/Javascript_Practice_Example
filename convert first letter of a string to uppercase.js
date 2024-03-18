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
