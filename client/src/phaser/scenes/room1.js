import Phaser from "phaser";
import room from "../assets/room.png";
import door from "../assets/door.png";
import openDoor from "../assets/open_door.png"

class room1 extends Phaser.Scene {
    constructor() {
        super ({key: "room1"});
    };

    preload(){
        //load ressources
        this.load.image("room", room);
        this.load.image("door", door);
        this.load.image("openDoor", openDoor);
    }

    create(){
        //definine objects
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.door = this.add.image(this.background.displayWidth/2, this.background.displayHeight/2 - 20, "door");
        this.door.on("pointerdown", function() {
            this.openDoor = this.add.image(this.background.displayWidth/2, this.background.displayHeight/2 -20, "openDoor");
        }, this)
    }

    update(){
        //constant running loop
    }
    customFunctions(){}
}

export default room1;