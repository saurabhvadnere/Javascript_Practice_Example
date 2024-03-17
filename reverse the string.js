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