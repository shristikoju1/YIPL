class Car {

    constructor(){
        console.log("new constructor created");
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}


const toyota = new Car(); 
const fortuner = new Car();

// console.log(toyota.setBrand('Toyota')); //output: undefined because setBrand method does not return anything
// toyota.setBrand('Toyota')
// console.log(toyota.brandName); //output: Toyota

console.log(toyota);
console.log(fortuner);