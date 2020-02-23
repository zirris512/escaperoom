import Phaser from "phaser";

class puzzle1 extends Phaser.Scene {
    constructor() {
        super({ key: "puzzle1" });
    };

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.arrowRight = this.add.image(this.background.displayWidth - 50, this.background.displayHeight/2, "arrowRight").setScale(0.25).setInteractive({ useHandCursor: true });
        this.arrowLeft = this.add.image(50, this.background.displayHeight/2, "arrowLeft").setScale(0.25).setInteractive({ useHandCursor: true });

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