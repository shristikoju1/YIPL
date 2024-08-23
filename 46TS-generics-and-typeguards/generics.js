"use strict";
const score = [];
const names = [];
//---------------functions--------------------------------
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree('three');
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//------------------arrow function-------------------
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
