// Example 1: Check if Key Exists in Object Using in Operator

// program to check if a key exists

const person = {
    id: 1,
    name: 'Sam',
    age: 23
}

// check if key exists
const hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}


// Example 2: Check if Key Exists in Object Using hasOwnProperty()
// program to check if a key exists

const persons = {
    id: 1,
    name: 'Tom',
    age: 23
}

//check if key exists
const hasKeys = persons.hasOwnProperty('name');

if(hasKeys) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}