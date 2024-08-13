function getData(dataID, getNextData) {
    setTimeout(
        () => {
            console.log("data", dataID);
            if (getNextData) getNextData();
        }, 2000
    )
}

//callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5, () => {
                    console.log("Finished!");
                });
            });
        });
    });
});