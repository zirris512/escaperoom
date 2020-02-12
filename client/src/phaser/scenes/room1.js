import Phaser from "phaser";
import game from "../config"
class room1 extends Phaser.Scene {
    constructor() {
        super ({key: "room1"});
    };
    preLoad(){
        //load ressources
        this.load.image("ship","../../images/scary-ship.jpg")
        console.log("ready set, GO!")
    }
    creat(){
        //definine objects
        this.background = this.add.image(game.config.width/2,game.config.height/2,"ship")
        console.log("message!")
    }
    update(){
        //constant running loop
    }
    customeFunctions(){}
}

export default room1;