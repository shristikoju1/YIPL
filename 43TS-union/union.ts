//function

function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(`ID is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID is a number: ${id}`);
    }
}

printId(101);         // Output: ID is a number: 101
printId("ABC123");    // Output: ID is a string: ABC123


//function return type
function getValue(val: boolean): string | number {
    if (val) {
        return "Hello";
    } else {
        return 42;
    }
}

let result1 = getValue(true);   // result1 is of type string | number
let result2 = getValue(false);  // result2 is of type string | number

console.log(result1); // Output: Hello
console.log(result2); // Output: 42


//arrays
let mixedArray: (number | string)[] = [1, "two", 3, "four"];

mixedArray.push(5);         // Valid
mixedArray.push("six");     // Valid
// mixedArray.push(true);   // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

console.log(mixedArray); // Output: [1, "two", 3, "four", 5, "six"]


//custom types
type SuccessResponse = {
    status: "success";
    data: string;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
        console.log(`Data: ${response.data}`);
    } else {
        console.log(`Error: ${response.message}`);
    }
}

let success: SuccessResponse = { status: "success", data: "Data loaded" };
let error: ErrorResponse = { status: "error", message: "Something went wrong" };

handleResponse(success); // Output: Data: Data loaded
handleResponse(error);   // Output: Error: Something went wrong


//null or undefined
function greet(name: string | null | undefined) {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello, Guest!");
    }
}

greet("Shristi"); // Output: Hello, Shristi!
greet(null);      // Output: Hello, Guest!
greet(undefined); // Output: Hello, Guest!

