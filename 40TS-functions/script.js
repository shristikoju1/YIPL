"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function type
function addTwo(num) {
    return num + 2;
}
function addOne(num) {
    return num + 1;
}
function getUpper(val) {
    return val.toUpperCase();
}
//optional parameter
function signUpUser(name, email, isPaid) { }
//default parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
function gatValue(myVal) {
    if (myVal > 5) {
        return true; // Returning a boolean
    }
    return "200 OK"; // Returning a string
}
var getHello = function (s) {
    return "";
};
var heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1,2,3];
//map with arrow function
heros.map(function (hero) {
    return 'hero is ${hero}';
});
//console error
function consoleError(errmsg) {
    console.log(errmsg);
}
//handle error
function handleError(errmsg) {
    console.log(errmsg);
}
//rest parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0); //0 is the initial value of total
}
addTwo(5);
getUpper("hey");
signUpUser("Shristi", "shristi@gmail.com", true);
loginUser("hello", 'hello@gmail.dev');
addOne(2);
