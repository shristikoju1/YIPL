abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public quality: number,
    ){}

    // Abstract method, must be implemented by derived classes
    abstract getSepia(): void;

    // Regular method with implementation
    getreelTime(): number {
        return 8;
    }
}

// Instagram class extends TakePhoto and must implement the abstract method
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public quality: number,
        public resolution: string,
        public photoSize: number,
        public flashMode: string,
        public focusMode: string,
    ) {
        super(cameraMode, quality);
    }

    // Implementing the abstract method from TakePhoto
    getSepia(): void {
        console.log("Applying Sepia filter");
    }
}

// Now you can create an instance of Instagram, but not TakePhoto
const ram = new Instagram("portrait", 12, "1080p", 5, "auto", "manual");
ram.getSepia(); // Output: Applying Sepia filter
console.log(ram.getreelTime()); // Output: 8
