
//promise
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('Promise');
        // resolve("success");
        reject("error occurred");
    });
};

let promise = getPromise(); 
promise.then((res) => {
    console.log("Promise Fulfilled", res);
});

promise.catch((err) => {
    console.log("Promise Rejected", err);
});

//promise chaining
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some msg received 1");
            resolve("Async function resolved");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some msg received 2");
            resolve("Async function resolved");
        }, 4000);
    });
}

console.log("Fetching data1...");
asyncFunc1().then((res) => {
    console.log("Fetching data2...");
    return asyncFunc2()
    .then((res) => {
        console.log(res);
    });
})

