"use strict";
class TakePhoto {
    constructor(cameraMode, quality) {
        this.cameraMode = cameraMode;
        this.quality = quality;
    }
    // Regular method with implementation
    getreelTime() {
        return 8;
    }
}
// Instagram class extends TakePhoto and must implement the abstract method
class Instagram extends TakePhoto {
    constructor(cameraMode, quality, resolution, photoSize, flashMode, focusMode) {
        super(cameraMode, quality);
        this.cameraMode = cameraMode;
        this.quality = quality;
        this.resolution = resolution;
        this.photoSize = photoSize;
        this.flashMode = flashMode;
        this.focusMode = focusMode;
    }
    // Implementing the abstract method from TakePhoto
    getSepia() {
        console.log("Applying Sepia filter");
    }
}
// Now you can create an instance of Instagram, but not TakePhoto
const ram = new Instagram("portrait", 12, "1080p", 5, "auto", "manual");
ram.getSepia(); // Output: Applying Sepia filter
console.log(ram.getreelTime()); // Output: 8
