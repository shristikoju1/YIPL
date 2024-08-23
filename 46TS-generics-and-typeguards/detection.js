"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                //   'strs' is possibly 'null'.
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        else {
            // do nothing
        }
    }
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
//------------------------instanceof------------------------
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getArea(shape) {
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
const circle = { kind: 'circle', radius: 5 };
const square = { kind: 'square', sideLength: 10 };
const rectangle = { kind: 'rectangle', width: 4, height: 6 };
console.log(getArea(circle)); // Output: 78.53981633974483
console.log(getArea(square)); // Output: 100
console.log(getArea(rectangle)); // Output: 24
function getArea2(shape) {
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
function assertNever(value) {
    throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}
// Example usage
const myShape = { kind: "circle", radius: 10 };
console.log(getArea(myShape)); // Outputs the area of the circle
