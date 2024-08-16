const accessKey = "RXO_MYWiAiH9jAHZt9VZhOMvvhGdmTaSxMzWwPKUJeo";

const formElement = document.querySelector('form');
const inputElement = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const seeMore = document.getElementById('see-more');
const debounceKeyword = document.querySelector('.keyword span');

let inputData = "";
let page = 1;

// Debounce function to limit how often the callback function is called
// let button = document.getElementById("search-btn");
// const debounce = (func, delay) => {
//     let debounceTimer
//     return function () {
//         const context = this
//         const args = arguments
//         clearTimeout(debounceTimer)
//         debounceTimer
//             = setTimeout(() => func.apply(context, args), delay)
//     }
// }
//     button.addEventListener('click', debounce(function () {
// }, 3000));

 
// API fetch function
const searchImages = async () => {
    inputData = inputElement.value; 
    if (!inputData.trim()) {
        alert('Please enter a search term!');
        return;
    }
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const results = data.results;

        if (page === 1) {
            searchResults.innerHTML = "";
        }

        if (results.length === 0) {
            alert('No images found!');
            return;
        }

        results.forEach(result => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("search-result");
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = "_blank"; // Open link in a new tab
            imageLink.textContent = result.alt_description || 'No description available';

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });

        page++;
        seeMore.style.display = "block";
    } catch (error) {
        console.error('Error fetching images:', error);
        alert('An error occurred while fetching images. Please try again later.');
    }
};

// Event listeners for form submission and "See more" button
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

seeMore.addEventListener('click', () => {
    searchImages();
});
