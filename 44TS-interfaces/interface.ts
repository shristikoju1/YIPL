//basic example
interface User {
    name: string;
    age: number;
    email: string;
}

function createUser(user: User): void {
    console.log(`User Created: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
}

const newUser: User = {
    name: "Shristi",
    age: 25,
    email: "shristi@gmail.dev"
};

createUser(newUser); // Output: User Created: Shristi, Age: 25, Email: shristi@gmail.dev


//optional properties
interface User {
    name: string;
    age: number;
    email?: string; // Optional property
}

function printUserInfo(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
}

const user1: User = { name: "Shristi", age: 25 };
const user2: User = { name: "John", age: 30, email: "john@example.com" };

printUserInfo(user1); 
// Output:
// Name: Shristi
// Age: 25

printUserInfo(user2); 
// Output:
// Name: John
// Age: 30
// Email: john@example.com



//readonly properties
interface User {
    readonly id: number;
    name: string;
    age: number;
}

const user: User = {
    id: 1,
    name: "Shristi",
    age: 25
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
user.name = "Shristi Koju"; // This is allowed
console.log(user);


//method signature
interface Person {
    name: string;
    age: number;
    greet(): void; // Method signature
}

class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const student = new Student("Shristi", 25);
student.greet(); // Output: Hello, my name is Shristi and I am 25 years old.


//extending interfaces
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    position: string;
}

const employee: Employee = {
    name: "Shristi",
    age: 25,
    employeeId: 12345,
    position: "Frontend Developer"
};

console.log(employee);
// Output: { name: 'Shristi', age: 25, employeeId: 12345, position: 'Frontend Developer' }


//function types
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5


//hybrid(properties and methods)
interface Counter {
    current: number;
    increment(): void;
    reset(): void;
}

function createCounter(): Counter {
    let counter = 0;
    return {
        current: counter,
        increment() {
            counter++;
            this.current = counter;
        },
        reset() {
            counter = 0;
            this.current = counter;
        }
    };
}

const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.current); // Output: 1
myCounter.reset();
console.log(myCounter.current); // Output: 0
