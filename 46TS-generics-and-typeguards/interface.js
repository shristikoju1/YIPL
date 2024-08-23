"use strict";
class Instagram {
    constructor(cameraMode = 'Normal', filter = 'None', burst = 1) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode = 'Normal', filter = 'None', burst = 1, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        console.log(`Creating a story with camera mode: ${this.cameraMode}, filter: ${this.filter}, burst: ${this.burst}, and shorts: ${this.shorts}`);
    }
}
