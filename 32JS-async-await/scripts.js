function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API data");
            resolve('API Response');
        }, 2000);
    })
}

async function getWeatherdata(){
    await api();
    await api();
}

getWeatherdata();

function getData(dataID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data from ${dataID}`);
            resolve('success');
        }, 1000);
    });
}

//Async-await
async function getAllData(){
    console.log("Getting data 1...")
    await getData(1);
    console.log("Getting data 2...")

    await getData(2);
    console.log("Getting data 3...")

    await getData(3);
}

getAllData();
