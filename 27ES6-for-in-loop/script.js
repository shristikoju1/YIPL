//Array
const numbers = [1, 2, 3, 4, 5];

for (let num in numbers) {
    console.log(num);
    console.log(numbers[num]);
}


//Object
const posts = {
    title: 'My First Post',
    author: 'John Doe',
    content: 'This is the content of my first post.'
}

for (let key in posts) {
    console.log(key);
    console.log(posts[key]);
    console.log(posts);
}


//for-of for array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

console.log(text);

//for-of for strings
let language = "JavaScript";
let letter = "";

for (let x of language) {
    letter += x + " ";
    console.log(x);
}

console.log(letter);
