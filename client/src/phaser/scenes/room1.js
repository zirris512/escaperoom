import Phaser from "phaser";
import game from "../config";
import scaryShip from "../assets/scary-ship.jpg";

class room1 extends Phaser.Scene {
    constructor() {
        super ({key: "room1"});
    };

    preload(){
        //load ressources
        this.load.image("ship", scaryShip);
        console.log("ready set, GO!")
    }

    create(){
        //definine objects
        this.background = this.add.image(game.config.width/2,game.config.height/2,"ship")
        console.log("message!")
    }

    update(){
        //constant running loop
    }
    customFunctions(){}
}

export default room1;