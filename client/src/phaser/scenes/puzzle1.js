import Phaser from "phaser";

class puzzle1 extends Phaser.Scene {
    constructor() {
        super({ key: "puzzle1" });
    };

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.arrowRight = this.add.image(this.cameras.main.width - 50, this.cameras.main.height/2, "arrowRight").setScale(0.25).setInteractive({ useHandCursor: true });
        this.arrowLeft = this.add.image(50, this.cameras.main.height/2, "arrowLeft").setScale(0.25).setInteractive({ useHandCursor: true });
        this. thisBed = this.add.image(800,550,"thisBed").setScale(1.40);
        this.allMight = this.add.image(800,300, "allMight").setScale(.35);
        this.wallShelf = this.add.image(300,300,"wallShelf").setScale(0.55);
        this.add.text(this.background.displayWidth/2, 20, "Puzzle 1 goes here...");


        this.arrowRight.on("pointerdown", function() {
            this.scene.switch("puzzle2");
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.switch("room1");
        }, this);

    }
}

export default puzzle1;