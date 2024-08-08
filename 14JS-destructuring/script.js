const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
    greet() {
        // console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
}

person.greet(); 
// console.log(1);

//Destructuring 
const todo = {
    id:1,
    title: 'Clean the house',
    priority: 'high',
    dueDate: new Date('2022-01-31'),
    isCompleted: false,
    cleaner: {
        name: 'Jane Doe',
        age: 28,
        hobbies: ['reading', 'painting']
    },
};

const {id: todoID, title, cleaner: {name}} = todo;

// console.log(id, title, cleaner);
console.log(todoID);

//Destructure arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);