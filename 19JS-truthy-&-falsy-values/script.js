// Falsy Values
if (!false) console.log("false is falsy"); // Will execute
if (!0) console.log("0 is falsy"); // Will execute
if (!-0) console.log("-0 is falsy"); // Will execute
if (!0n) console.log("0n is falsy"); // Will execute
if (!"") console.log('"" is falsy'); // Will execute
if (!null) console.log("null is falsy"); // Will execute
if (!undefined) console.log("undefined is falsy"); // Will execute
if (!NaN) console.log("NaN is falsy"); // Will execute

// // Truthy Values
if (true) console.log("true is truthy"); // Will execute
if (42) console.log("42 is truthy"); // Will execute
if (-42) console.log("-42 is truthy"); // Will execute
if (3.14) console.log("3.14 is truthy"); // Will execute
if ("hello") console.log('"hello" is truthy'); // Will execute
if ("0") console.log('"0" is truthy'); // Will execute
if ("false") console.log('"false" is truthy'); // Will execute
if ({}) console.log("{} is truthy"); // Will execute
if ([]) console.log("[] is truthy"); // Will execute
if (Symbol()) console.log("Symbol() is truthy"); // Will execute
if (42n) console.log("42n is truthy"); // Will execute

// Using in practice
let value = ""; // falsy value
if (!value) {
    console.log("The value is falsy");
} else {
    console.log("The value is truthy");
}

value = "some string"; // truthy value
if (!value) {
    console.log("The value is falsy");
} else {
    console.log("The value is truthy");
}
