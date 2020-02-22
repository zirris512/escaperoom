import Phaser from "phaser";
import images from "../assets/images";

class room1 extends Phaser.Scene {
    constructor() {
        super ({key: "room1"});
    };

    preload(){
        //load ressources
        this.load.image("room", images.room);
        this.load.image("door", images.door);
        this.load.image("openDoor", images.openDoor);
    }

    create(){
        //definine objects
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.openDoor = this.add.image(this.background.displayWidth/2, this.background.displayHeight/2 - 20, "openDoor");
        this.openDoor.visible = false;
        this.door = this.add.image(this.background.displayWidth/2, this.background.displayHeight/2 - 20, "door");
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
        }, this)
    }
        

    update(){
        //constant running loop
    }
    customFunctions(){}
}

export default room1;