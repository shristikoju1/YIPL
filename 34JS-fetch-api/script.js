const url = 'https://bibhuticoder.github.io/nepali-calendar-api/api/2073.json';

const getCalender = async() => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(response);
    console.log(data);
} 