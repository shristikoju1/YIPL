const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', (event) => {
    if (event.target.className === 'child'){
        console.log("Child clicked!");
    } else if (event.target.className === 'parent'){
        console.log("Parent clicked!");
    } else if (event.target.className === 'grandparent'){
        console.log("Grandparent clicked!");
    }
    
});