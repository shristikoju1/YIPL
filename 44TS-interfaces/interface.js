function createUser(user) {
    console.log("User Created: ".concat(user.name, ", Age: ").concat(user.age, ", Email: ").concat(user.email));
}
var newUser = {
    name: "Shristi",
    age: 25,
    email: "shristi@gmail.dev"
};
createUser(newUser); // Output: User Created: Shristi, Age: 25, Email: shristi@gmail.dev
function printUserInfo(user) {
    console.log("Name: ".concat(user.name));
    console.log("Age: ".concat(user.age));
    if (user.email) {
        console.log("Email: ".concat(user.email));
    }
}
var user1 = { name: "Shristi", age: 25 };
var user2 = { name: "John", age: 30, email: "john@example.com" };
printUserInfo(user1);
// Output:
// Name: Shristi
// Age: 25
printUserInfo(user2);
var user = {
    id: 1,
    name: "Shristi",
    age: 25
};
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
user.name = "Shristi Koju"; // This is allowed
console.log(user);
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Student;
}());
var student = new Student("Shristi", 25);
student.greet(); // Output: Hello, my name is Shristi and I am 25 years old.
var employee = {
    name: "Shristi",
    age: 25,
    employeeId: 12345,
    position: "Frontend Developer"
};
console.log(employee);
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5
function createCounter() {
    var counter = 0;
    return {
        current: counter,
        increment: function () {
            counter++;
            this.current = counter;
        },
        reset: function () {
            counter = 0;
            this.current = counter;
        }
    };
}
var myCounter = createCounter();
myCounter.increment();
console.log(myCounter.current); // Output: 1
myCounter.reset();
console.log(myCounter.current); // Output: 0
