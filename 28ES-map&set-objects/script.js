// ------------------set----------------------

const myArray = [1, 2, 3, 4, 5, 4, 5, 3,2, 8];
console.log(myArray);

const mySet = new Set(myArray);
console.log(mySet);

const uniqueArray = [...mySet];
console.log(uniqueArray);

mySet.add(6);
mySet.add('6');
mySet.delete(1);
// mySet.clear();
console.log(mySet);
console.log(mySet.has(6));


//------------------map----------------------
const a = {};
const b = {};
const myMap = new Map(
    [[a, 1], [b, 2], ['c', 3]]
);
console.log(myMap);

myMap.set('d', 10);
// myMap.clear();
console.log(myMap);
console.log(myMap.size);
