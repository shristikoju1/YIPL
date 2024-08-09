//map
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function (num) {
  return num * num;
});
console.log(squares); // Output: [1, 4, 9, 16, 25]

//filter
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evens); // Output: [2, 4]

//reduce
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(sum); // Output: 15

//forEach
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num);
});

//find
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(function (num) {
  return num % 2 === 0;
});
console.log(firstEven); // Output: 2

