"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this._courseCounter = 1;
        this.city = 'bkt'; //#private
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log('Token deleted!');
    }
    get getAppleEmail() {
        return `apple@${this.email}`;
    }
    get courseCounter() {
        return this._courseCounter;
    }
    set courseCounter(value) {
        if (value > 0) {
            this._courseCounter = value;
        }
        else {
            throw new Error("Course counter should be positive.");
        }
    }
}
//inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCounter = 10;
    }
}
const shristi = new User("s@gmail.com", "Shristi");
//shristi.city - not allowed
