//1.Creating objects
const library = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        status: {
            own: true,
            reading: false,
            read: false,
        } 
    },
    {
        title: '1984',
        author: 'George Orwell',
        status: {
            own: true,
            reading: true,
            read: false
        }
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        status: {
            own: false,
            reading: false,
            read: false,
        }
    }
];

//2.Updating the status of the read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//3.Destructure ie renaming the title of first object

const {title: firstBook} = library[0];

// console.log(firstBook);

//4.Turning library into the JSON string

const libraryString = JSON.stringify(library);

console.log(libraryString);