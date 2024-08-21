class User {

    protected _courseCounter = 1
    readonly name: string
    private city: string = 'bkt' //#private
    constructor(
        public email: string,
        name: string
    ){
        this.email = email;
        this.name = name; 
    }

    private deleteToken(){
        console.log('Token deleted!');
    }

    get getAppleEmail(): string{
        return `apple@${this.email}`
    }

    get courseCounter(): number {
        return this._courseCounter;
    }

    set courseCounter(value: number) {
        if(value > 0){
            this._courseCounter = value;
        } else {
            throw new Error("Course counter should be positive.");
        }
    }
}

//inheritance
class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCounter = 10;
    }
}

const shristi = new User("s@gmail.com","Shristi");
//shristi.city - not allowed
