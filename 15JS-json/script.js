const data1 = {
    id: 1,
    title: 'Sample Post',
    content: 'This is a sample blog post.',
    author: 'John Doe',
    comments: [
        { id: 1, content: 'Nice post!', author: 'Jane Smith' },
        { id: 2, content: 'I agree!', author: 'Mike Johnson' }
    ]
};

//Convert to JSON string
const str1 = JSON.stringify(data1);

//Parse JSON
const obj1 = JSON.parse(str1);

const data2 = [
    {
        id: 1,
        title: 'Sample Post',
        content: 'This is a sample blog post.',
        author: 'John Doe',
        comments: [
            { id: 1, content: 'Nice post!', author: 'Jane Smith' },
            { id: 2, content: 'I agree!', author: 'Mike Johnson' }
        ]
    },
    {
        id: 2,
        title: 'Another Post',
        content: 'This is another sample blog post.',
        author: 'Jane Smith',
        comments: [
            { id: 3, content: 'I love it!', author: 'Alice Johnson' },
            { id: 4, content: 'Definitely!', author: 'Bob Brown' }
        ]
    }
];

const str2 = JSON.stringify(data2);
const obj2 = JSON.parse(str2);

console.log(data2);
console.log(str2);
console.log(obj2);