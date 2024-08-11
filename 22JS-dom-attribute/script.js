//getAttribute
const linkElement = document.getElementById('myLink');
const button = document.getElementById('getAttributeBtn');

button.addEventListener('click', () => {
    // Get the value of the 'title' attribute of the link
    const titleValue = linkElement.getAttribute('title');
    alert(`Link Title: ${titleValue}`);

    //style
    linkElement.style.color = 'pink';
});

//setAttribute
const imageLink = document.getElementById('myImage');
const changeImageBtn = document.getElementById('setAttributeBtn');


changeImageBtn.addEventListener('click', () => {
    const img = imageLink.setAttribute('src','https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

})

document.write(Date());


