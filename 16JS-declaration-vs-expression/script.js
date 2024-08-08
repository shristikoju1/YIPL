//Function Declaration
function addDollarSign(value){
    return '$' + value;
}

console.log(addDollarSign(100));

//Function Expression
const addPlugSign = function (value) {
    return '+' + value;
};

console.log(addPlugSign(100));