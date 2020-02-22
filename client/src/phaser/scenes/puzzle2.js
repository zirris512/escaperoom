import Phaser from "phaser";

class puzzle2 extends Phaser.Scene {
    constructor() {
        super({ key: "puzzle2" });
    };

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.arrowRight = this.add.image(this.background.displayWidth - 50, this.background.displayHeight/2, "arrowRight").setScale(0.25);
        this.arrowLeft = this.add.image(50, this.background.displayHeight/2, "arrowLeft").setScale(0.25);

        this.add.text(this.background.displayWidth/2, 20, "Puzzle 2 goes here...");

        this.arrowLeft.setInteractive();
        this.arrowRight.setInteractive();

        this.arrowRight.on("pointerdown", function() {
            this.scene.start("puzzle3");
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.start("puzzle1");
        }, this);

    }
}

export default puzzle2;