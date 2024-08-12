//event listener
const btn = document.querySelector('button');
const btn2 = document.querySelector('#btn');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

const changeBackgroundColor = () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    console.log(rndCol);
    document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', changeBackgroundColor);


const changeButtonColor = (e) => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    console.log(rndCol);
    e.target.style.backgroundColor = rndCol;
}

btn2.addEventListener('click', changeButtonColor);


//remove
// btn.removeEventListener('click',changeBackgroundColor);


//----------video----------------
const video = document.getElementById('myVideo');

video.addEventListener('play', () => {
    console.log('The video has started playing!');
    document.body.style.backgroundColor = 'lightgreen';
});


video.addEventListener('pause', () => {
    console.log('The video has been paused.');
    document.body.style.backgroundColor = 'lightcoral'; 
});

video.addEventListener('ended', () => {
    console.log('The video has ended.');
    document.body.style.backgroundColor = 'lightblue'; 
});

//keydown
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (e) => {
    output.textContent = `Key pressed: ${e.key}`;
});
