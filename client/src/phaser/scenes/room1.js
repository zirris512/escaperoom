import Phaser from "phaser";
import images from "../assets/images.js";

class room1 extends Phaser.Scene {
    constructor() {
        super({ key: "room1" });
    };

    create(){
        //definine objects
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.openDoor = this.add.image(this.background.displayWidth/2, this.background.displayHeight/2 - 20, "openDoor");
        this.openDoor.visible = false;
        this.door = this.add.image(this.background.displayWidth/2, this.background.displayHeight/2 - 20, "door");
        this.arrowRight = this.add.image(this.background.displayWidth - 50, this.background.displayHeight/2, "arrowRight").setScale(0.25);
        this.arrowLeft = this.add.image(50, this.background.displayHeight/2, "arrowLeft").setScale(0.25);

        this.door.setInteractive();
        this.openDoor.setInteractive();
        this.door.on("pointerdown", function() {
            if (this.door.visible) {
                return (this.door.visible = false, this.openDoor.visible = true);
            }
        }, this);

        this.openDoor.on("pointerdown", function() {
            if (this.openDoor.visible) {
                return (this.openDoor.visible = false, this.door.visible = true);
            }
        }, this);

        this.arrowRight.setInteractive();
        this.arrowLeft.setInteractive();

        this.arrowRight.on("pointerdown", function() {
            this.scene.start("puzzle1");
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.start("puzzle3");
        }, this);
    }
}

export default room1;