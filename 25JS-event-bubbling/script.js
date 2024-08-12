const container = document.querySelector(".container");
const button = document.querySelector('button');

container.addEventListener("click", () => {
    console.log("DIV clicked");
})

button.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents event bubbling to parent elements
    console.log("Button clicked");
})