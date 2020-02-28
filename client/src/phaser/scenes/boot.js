import Phaser from "phaser";
import images from "../assets/images.js";

class boot extends Phaser.Scene {
  constructor() {
    super({ key: "boot" });
  }


    preload(){
        //load ressources
        this.load.image("room", images.room);
        this.load.image("door", images.door);
        this.load.image("openDoor", images.openDoor);
        this.load.image("arrowRight", images.arrowRight);
        this.load.image("arrowLeft", images.arrowLeft);
        this.load.image("finalDesk", images.finalDesk);
        this.load.image("wallShelf",images.wallShelf);
        this.load.image("bookShelf",images.bookShelf);
        this.load.image("anime",images.anime);
        this.load.image("soloShelf", images.soloShelf);
        this.load.image("thisBed", images.thisBed);
        this.load.image("allMight", images.allMight);
        this.load.image("thisTv",images.thisTv);
        this.load.image("nightStand", images.nightStand);
    }


  create() {
    this.initialTime = 0;

    this.scene.start("title", {
      time: this.initialTime
    });
  }
}

export default boot;
