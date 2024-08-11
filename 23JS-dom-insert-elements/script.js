let box = document.querySelector('.box');
let apple = document.querySelector('.apple');

let btn = document.createElement('button');
let para = document.createElement('p');
let btnBefore = document.createElement('button');
let btnAfter = document.createElement('button');

//append
box.append(btn);
btn.innerText = 'Click Me!';

//prepend
box.prepend(para);
para.innerHTML = 'This is the paragraph text inserted as a prepend';

//before insertion
box.before(btnBefore);
btnBefore.innerText = 'Before Insertion';

//after insertion
box.after(btnAfter);
btnAfter.innerText = 'After Insertion';

//remove
apple.remove();



