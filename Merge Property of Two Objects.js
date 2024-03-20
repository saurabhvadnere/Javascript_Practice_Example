// program to merge property of two objects
// Example 1

// object 1
const Student1 = {
    name: 'Saurabh',
    age:26
}

// object 2
const Student2 = {
    gender: 'male',
    age:28
}

// merge two objects
const newObj = Object.assign(Student1, Student2);

console.log(newObj);
console.log(newObj===Student1);


// Example Two

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
