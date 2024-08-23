function detectType(val: number | string){
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId (id: string | null){
    if(!id){
        console.log("Please provide ID");
        return 
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    if(strs){
    if (typeof strs === "object") {
      for (const s of strs) {
//   'strs' is possibly 'null'.
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
    }
  }

//---------------------in----------------------
interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin): boolean {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}

//------------------------instanceof------------------------
function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());               
    } else {
      console.log(x.toUpperCase());               
    }
  }

  //-----------------type---------------------
  type Fish = {swim: () => void};
  type Bird = {fly: () => void};

  function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
  }

  function getFood(pet: Fish | Bird){
    if (isFish(pet)){
        pet 
        return "fish food"
    } else {
        pet
        return "bird food"
    }
  }

//---------------discriminated union-----------------------
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; sideLength: number }
  | { kind: 'rectangle'; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'square':
      return shape.sideLength ** 2;

    case 'rectangle':
      return shape.width * shape.height;

    default:
      throw new Error('Unknown shape!');
  }
}

// Example usage:
const circle: Shape = { kind: 'circle', radius: 5 };
const square: Shape = { kind: 'square', sideLength: 10 };
const rectangle: Shape = { kind: 'rectangle', width: 4, height: 6 };

console.log(getArea(circle));    // Output: 78.53981633974483
console.log(getArea(square));    // Output: 100
console.log(getArea(rectangle)); // Output: 24

//--------------------exhaustiveness checking with never-------------------
type Shape2 =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea2(shape: Shape2): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.sideLength * shape.sideLength;
    case "rectangle":
      return shape.width * shape.height;
    default:
      // This ensures that we handle all possible cases of the Shape union type
      return assertNever(shape);
  }
}

// This function will cause a compile-time error if a new kind is added to the Shape type but not handled in the switch statement.
function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}

// Example usage
const myShape: Shape = { kind: "circle", radius: 10 };
console.log(getArea(myShape)); // Outputs the area of the circle
