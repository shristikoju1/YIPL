let openReq = indexedDB.open('collegeDB', 1);

openReq.onsuccess = (e) => {
    console.log("from success");
    let db = openReq.result;
    let transaction = db.transaction('students', 'readwrite');
    let storeObject = transaction.objectStore("students");
//-----------------CRUD---------------------
    // ------------------create (data insertion)------------
    // let request = storeObject.add({
    //     id: 3,
    //     name: "James Doe",
    //     age: 40,
    //     major: "IT",
    //     gpa: 4,
    //     email: "james@example.com"
    // });

    //----------------------read (data retrieve)----------
    // let request = storeObject.get(1);
    // let request = storeObject.getAll();
    // let request = storeObject.getAll(IDBKeyRange.bound(1,1));
        // let index = storeObject.index("name");
    // let request = index.get('James Doe'); 

    // ------------------update (data change)------------
    // let request = storeObject.put({
    //     id: 3,
    //     name: "James Doe",
    //     age: 40,
    //     major: "IT",
    //     gpa: 4,
    //     email: "jamesdoe@example.com"
    // });

    //---------------delete-----------------
    // let request = storeObject.delete(1);


    let request = storeObject.openCursor();



    request.onsuccess = (e) => {
        let cursor = e.target.result;  //request.result
        console.log('iteration');
        if (cursor) {
            let {key, value} = cursor;
            console.log(key, value);
            cursor.continue();  // move to the next record
        }
    }

    request.onerror = (e) => {
        console.log("Error adding student:", e.target.error);
    }
}

openReq.onupgradeneeded = (e) => {
    console.log("from upgradeneeded");
    let db = openReq.result;
    if(!db.objectStoreNames.contains("students")){
        let request = db.createObjectStore("students", {keyPath: 'id'})
        request.createIndex("name", "name", {unique: false});
        request.createIndex("age", "age", {unique: false});
        request.createIndex("major", "major", {unique: false});
        request.createIndex("gpa", "gpa", {unique: false});
        request.createIndex("email", "email", {unique: true});
    }
}

openReq.onerror = (e) => {
    console.log("Error:", e);
}