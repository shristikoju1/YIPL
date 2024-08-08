//Arrow function syntax
const add = (a,b) => {
    return a + b;
}

//Implicit return
const subract = (a,b) => a-b;

//Can leave off the parameter with a single param
const double = a => a * 2;

//Returning an object

const personObj = () => ({
    name: 'Brad', 
    age: 19,
});

//forEach loop in array

const numbers = [1,2,3,4,5];
numbers.forEach((num )=> {
    console.log(num);
});  

console.log(add(1,2)); 
console.log(subract(3,2)); 
console.log(double(1)); 
console.log(personObj); 
