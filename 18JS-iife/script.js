const user = 'John Smith';

(function () {
    const user = 'John';
    console.log(user);
    const hello = () => {
        return console.log("Hello, from IIFE");
    }
    hello();
})();