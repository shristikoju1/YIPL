//function type
function addTwo(num: number){
    return num + 2;
}

function addOne(num: number): number{
    return num + 1;
}

function getUpper(val: string){
    return val.toUpperCase();
}

//optional parameter
function signUpUser(name: string, email: string, isPaid?: boolean){}

//default parameter
let loginUser = (name: string, email: string, isPaid: boolean = true) => {}

function gatValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true; // Returning a boolean
    }
    return "200 OK"; // Returning a string
}

const getHello = (s: string):string => {
    return "";
}

const heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1,2,3];

//map with arrow function
heros.map((hero): string => {
    return 'hero is ${hero}'
})

//console error
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//handle error
function handleError(errmsg: string): void{
    console.log(errmsg);
}

//rest parameters
function sum(...numbers: number[]): number{
    return numbers.reduce((total, num) => total + num, 0); //0 is the initial value of total
}

addTwo(5);
getUpper("hey");
signUpUser("Shristi","shristi@gmail.com", true);
loginUser("hello", 'hello@gmail.dev');
addOne(2);

export{}