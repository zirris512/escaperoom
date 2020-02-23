import Phaser from "phaser";
import images from "../assets/images.js";

class boot extends Phaser.Scene {
    constructor() {
        super({ key: "boot" });
    };

    preload(){
        //load ressources
        this.load.image("room", images.room);
        this.load.image("door", images.door);
        this.load.image("openDoor", images.openDoor);
        this.load.image("arrowRight", images.arrowRight);
        this.load.image("arrowLeft", images.arrowLeft);
    }

    create() {
        this.scene.start("title");
    }
}

export default boot;