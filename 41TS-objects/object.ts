//---------------------object-----------------------

const User = {
    name: "Shristi",
    email: "shristi@gmail.dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

const createCourse = (): {name: string, price: number} => {
    return {name: "reactjs", price: 999}
}

let newUser = {name: "Shristi", isPaid: false, email: "shristi@gmail.com"}

createUser(newUser);

//---------------------type aliases------------------

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function getUser(user: User){
    return {name:"Shristi", email: "shristi@gmail.com", isActive: true}
}

getUser({name:"Shristi", email: "shristi@gmail.com", isActive: true})

//type with readonly and optional properties
type Person = {
    readonly name: string;
    age?: number; // Optional property
};

const john: Person = {
    name: "John",
    age: 30
};

john.age = 31; // Allowed, as age is not readonly
// john.name = "Doe"; // Error

const jane: Person = {
    name: "Jane"
}; // age is omitted, which is allowed because it is optional


export{};