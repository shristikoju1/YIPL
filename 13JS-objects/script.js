const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['reading', 'painting', 'cooking']
}

let x = person.name;
let y = person.hobbies;

person.name = "Jane"
x = person.name;

person['isAdmin'] = true;

x = person;

const person2 = {
    'frist name': 'Brad',
    'last name': 'Pitt',
    age: 54,
}

x = person2;
// x = person2."first name";  -> error
x = person2['frist name']


const todos = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Clean the house', completed: true },
    { id: 3, title: 'Pick up dry cleaning', completed: false },
];

x = todos[0].title;

x = Object.keys(todos);
x = Object.keys(todos).length;
x = Object.values(todos);
x = Object.entries(todos);
// x = todos.hasOwnProperty('age');
// x = todos.hasOwnProperty('title');
// const allHaveTitle = todos.every(todo => todo.hasOwnProperty('title'));

// console.log(allHaveTitle); // Output: true


console.log(x);

