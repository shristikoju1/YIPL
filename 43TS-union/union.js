//function
function printId(id) {
    if (typeof id === "string") {
        console.log("ID is a string: ".concat(id.toUpperCase()));
    }
    else {
        console.log("ID is a number: ".concat(id));
    }
}
printId(101); // Output: ID is a number: 101
printId("ABC123"); // Output: ID is a string: ABC123
//function return type
function getValue(val) {
    if (val) {
        return "Hello";
    }
    else {
        return 42;
    }
}
var result1 = getValue(true); // result1 is of type string | number
var result2 = getValue(false); // result2 is of type string | number
console.log(result1); // Output: Hello
console.log(result2); // Output: 42
//arrays
var mixedArray = [1, "two", 3, "four"];
mixedArray.push(5); // Valid
mixedArray.push("six"); // Valid
// mixedArray.push(true);   // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log(mixedArray); // Output: [1, "two", 3, "four", 5, "six"]
function handleResponse(response) {
    if (response.status === "success") {
        console.log("Data: ".concat(response.data));
    }
    else {
        console.log("Error: ".concat(response.message));
    }
}
var success = { status: "success", data: "Data loaded" };
var error = { status: "error", message: "Something went wrong" };
handleResponse(success); // Output: Data: Data loaded
handleResponse(error); // Output: Error: Something went wrong
//null or undefined
function greet(name) {
    if (name) {
        console.log("Hello, ".concat(name, "!"));
    }
    else {
        console.log("Hello, Guest!");
    }
}
greet("Shristi"); // Output: Hello, Shristi!
greet(null); // Output: Hello, Guest!
greet(undefined); // Output: Hello, Guest!
