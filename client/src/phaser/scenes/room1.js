import Phaser from "phaser";
import dungeon from "../assets/dungeon.jpg";

class room1 extends Phaser.Scene {
    constructor() {
        super ({key: "room1"});
    };

    preload(){
        //load ressources
        this.load.image("dungeon", dungeon);
        console.log("ready set, GO!")
    }

    create(){
        //definine objects
        this.background = this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,"dungeon");
        console.log("message!")
    }

    update(){
        //constant running loop
    }
    customFunctions(){}
}

export default room1;