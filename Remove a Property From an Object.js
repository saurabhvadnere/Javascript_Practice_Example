// program to remove a property from an object

// creating an object
const student = { 
    name: 'Sam',
    hobbies: ['reading', 'games', 'coding'],
    age: 24,
    score: {
        maths: 90,
        science: 80
    },
    greet: function() {
        console.log('Hello everyone.');
    }
    
};

// deleting a property from an object
delete student.greet; // using DOT Notation
delete student['score']; // using Braket Notation

console.log(student);