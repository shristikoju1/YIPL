//local storage console
const userArray = ["Obaseki",25];
localStorage.setItem('user', JSON.stringify(userArray));

const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData);

//normal console
const userArray2 = ["Oscar", 27];
console.log(userArray2);
