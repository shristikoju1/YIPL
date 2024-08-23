const score: Array<number> = []
const names: Array<string> = []


//---------------functions--------------------------------
function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type{
    return val;
}

// identityThree('three');

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle{
    brand: string,
    type: number
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}

//------------------arrow function-------------------

const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
}

//------------------constraints------------------

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
     return{
        valOne,
        valTwo
     }
}

// anotherFunction(10, {});

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(products: T){
        this.cart.push(products);
    }
}