interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string = 'Normal',
        public filter: string = 'None',
        public burst: number = 1
    ){}
}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string = 'Normal',
        public filter: string = 'None',
        public burst: number = 1,
        public shorts: string
    ){}

    createStory(): void {
        console.log(`Creating a story with camera mode: ${this.cameraMode}, filter: ${this.filter}, burst: ${this.burst}, and shorts: ${this.shorts}`);
    }
}
