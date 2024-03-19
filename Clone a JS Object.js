// Example 1. Clone the Object Using Object.assign()
// program to clone the object

// declaring object
const person = {
    name: 'Aryan',
    age: 25,
}

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'David';

console.log(clonePerson.name);
console.log(person.name);



// Example 2: Clone the Object Using Spread Syntax
// program to clone the object

// declaring object
const persons = {
    name: 'Saurabh',
    age: 24,
}

// cloning the object
const clonePersons = { ... persons}

console.log(clonePersons);

// changing the value of clonePerson
clonePersons.name = 'Miller';

console.log(clonePersons.name);
console.log(persons.name);